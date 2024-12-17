import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  review: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ review, author }) => (
  <Card className="h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm mb-4">{review}</p>
      </div>
      <p className="text-sm font-semibold">{author}</p>
    </CardContent>
  </Card>
);

export function Testimonials() {
  const testimonials = [
    {
      review:
        "The staff at this veterinary clinic are amazing! They treated my dog with such care and compassion. I couldn't be happier with the service.",
      author: "John D.",
    },
    {
      review:
        "I've been bringing my cats here for years. The doctors are knowledgeable and always take the time to explain everything thoroughly.",
      author: "Sarah M.",
    },
    {
      review:
        "The facility is clean, modern, and welcoming. It's clear they prioritize both pet and owner comfort. Highly recommended!",
      author: "Michael R.",
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
