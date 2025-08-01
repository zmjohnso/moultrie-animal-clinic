import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonials } from "./testimonials";
import TitlePhoto from "../../public/new-clients/title-photo.jpg";
import { MOULTRIE_GOOGLE_REVIEWS_LINK } from "./shared/constants";

export function NewClientsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto">
            <Image
              src={TitlePhoto}
              alt="Dog laying down in the grass with surrounding flowers."
              className="rounded-lg shadow-lg mb-8 mt-6 w-full h-auto"
              priority
              placeholder="blur"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6">
            Saint Augustine Veterinary Services - Delivered With Courtesy And
            Respect!
          </h2>
          <div className="space-y-4 text-base sm:text-lg">
            <p>
              We are all animal lovers here! Our team works hard to create a
              warm, inviting and comfortable environment for you and your pet.
              We strive for individualized care where you and your pet are never
              just a number, but part of our family. Our Veterinarians are
              dedicated to spending time talking with you to address your
              concerns, complete a thorough physical exam on your pet, recommend
              any diagnostic testing if needed, and create your pet&apos;s
              individual treatment plan.
            </p>
            <p>
              We welcome new clients and patients! Snowbirds welcome! We
              recommend that you call and make your first appointment over the
              phone. We require a deposit over the phone of your first office
              visit. Change your mind? Don&apos;t worry- if you cancel more than
              24 hours before your appointment we will issue you a full refund.
              We will request full medical records prior to your visit so that
              we have everything we need.
            </p>
            <p>
              Want to save some time? Fill out our new client/patient form
              below!
            </p>
            <p className="font-semibold">
              We are excited to meet you and your pets!
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg py-6 px-8 mt-6">
              <Link href="/new-clients/registration-form">
                New Client Registration Form
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Testimonials />

      <div className="text-center mb-8">
        <Button asChild size="lg" className="text-lg">
          <Link
            href={MOULTRIE_GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            See more reviews on Google
          </Link>
        </Button>
      </div>
    </div>
  );
}
