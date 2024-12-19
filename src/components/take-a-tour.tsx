"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { TakeATour } from "@/lib/types";
import { ImageSkeleton } from "./image-skeleton";
import clsx from "clsx";

export function TakeATourComponent({
  takeATourPage,
}: {
  takeATourPage: TakeATour;
}) {
  const images = takeATourPage.clinicPhotosCollection.items;
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const nextImage = () => {
    setIsLoading(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsLoading(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        {takeATourPage.heading}
      </h1>
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="text-xl text-center mb-4">
            Take a tour of our local Family Business with state of the art care
            for your pet.
          </p>
          <p className="text-center text-muted-foreground">
            {takeATourPage.description}
          </p>
        </CardContent>
      </Card>

      <div className="relative mb-8">
        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-200">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {isLoading && <ImageSkeleton />}
            <Image
              src={images[currentImage].url}
              alt={images[currentImage].title}
              fill
              className={clsx(
                "object-contain transition-opacity duration-300",
                {
                  "opacity-0": isLoading,
                  "opacity-100": !isLoading,
                }
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          aria-label="Previous Image"
          onClick={prevImage}
          disabled={isLoading}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          aria-label="Next Image"
          onClick={nextImage}
          disabled={isLoading}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="font-semibold">{images[currentImage].title}</p>
        <p className="text-sm text-foreground">
          Image {isLoading ? "..." : `${currentImage + 1} of ${images.length}`}
        </p>
      </div>

      <div className="text-center">
        <Button asChild>
          <Link href="/contact">Schedule a Visit</Link>
        </Button>
      </div>
    </div>
  );
}
