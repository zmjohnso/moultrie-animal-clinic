"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { TakeATour } from "@/lib/types";

const reviews = [
  {
    author: "John D.",
    rating: 5,
    text: "Exceptional care for our furry family members! The staff is knowledgeable and compassionate.",
    date: "2 weeks ago",
  },
  {
    author: "Sarah M.",
    rating: 5,
    text: "State-of-the-art facility with a warm, friendly atmosphere. Highly recommend!",
    date: "1 month ago",
  },
  {
    author: "Mike R.",
    rating: 4,
    text: "Great service and care. The only reason for 4 stars is the wait times can be long sometimes.",
    date: "2 months ago",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export function TakeATourComponent(takeATourPage: TakeATour) {
  const images = takeATourPage.clinicPhotosCollection.items;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Take a Tour</h1>
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-xl text-center mb-4">
            Take a tour of our local Family Business with state of the art care
            for your pet.
          </p>
          <p className="text-center text-muted-foreground">
            At Moultrie Animal Clinic, we pride ourselves on providing a warm,
            welcoming environment coupled with cutting-edge veterinary
            technology. Scroll through our gallery to get a glimpse of our
            facilities and the loving care we provide to our furry patients.
          </p>
        </CardContent>
      </Card>

      <div className="relative mb-8">
        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-200">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {" "}
            {/* 16:9 Aspect Ratio */}
            <Image
              src={images[currentImage].url}
              alt={images[currentImage].title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="font-semibold">{images[currentImage].title}</p>
        <p className="text-sm text-muted-foreground">
          Image {currentImage + 1} of {images.length}
        </p>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 pb-4 last:pb-0"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button asChild>
          <Link href="/contact">Schedule a Visit</Link>
        </Button>
      </div>
    </div>
  );
}
