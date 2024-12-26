import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  review: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ review, author }) => (
  <Card className="h-full">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div>
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
        "I can't say enough wonderful things about Dr Bendick and her staff at Moultrie Animal Clinic. We have been clients of Dr Bendick for many years. We followed her from Atlantic Beach where she used to work to St Augustine when she took ownership of Moultrie Animal Clinic. Dr Bendick is amazing, very knowledgeable about new treatments and drugs and keeps up to date with the latest information. She is always so professional as is her staff. The staff (techs and office personnel) are great and work well together as a team. We are very happy with the care that our three dogs receive and wouldn't go anywhere else.",
      author: "Heidi O.",
    },
    {
      review: `Dr. Bendick and her awesome staff always go above and beyond, always ready to step in help whatever the circumstances. We travel over 45 minutes each way to visit this clinic just so Dr. Bendick can take care of my girls "Daisy and Missy." The clinic is always accommodating even when calling last minute with a problem. Highly recommend Dr. Bendick and her awesome staff.`,
      author: "Tina B. and her furbabies Daisy & Missy",
    },
    {
      review:
        "We cannot express enough how grateful we are for the exceptional care Rex receives at Moultrie Animal Clinic. From the moment we walked in, the staff was warm, welcoming, and professional. Dr. Bendick is not only highly skilled but also compassionate and truly listens to all of our concerns. Their genuine love for animals is evident in every interaction, and we always feel confident that Rex is in the very best of hands. Whether it's a routine check-up or a more urgent situation (and we’ve had and still have our share of urgent situations), we know that we can rely on the staff at Moultrie Animal Clinic and Dr. Bendick for top-notch care.Thank you for everything each of you does - you've made such a positive impact on our lives! Rex loves each of you, and he always looks forward to giving his kisses and love to each of you and especially Dr. B.",
      author: "George, Becky & Rex",
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
