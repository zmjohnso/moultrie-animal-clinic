import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Users,
  Camera,
  Phone,
  MapPin,
  Clock,
  Star,
  Mail,
} from "lucide-react";
import { GoogleMapComponent } from "./google-map";
import MoultrieLogo from "../../public/home/moultrie-logo-color.jpg";
import DogLickingCat from "../../public/home/dog-lick-cat.jpg";
import { CLINIC_HOURS } from "./shared/constants";

export function HomePageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <Image
          src={MoultrieLogo}
          alt="Full Moultrie Animal Clinic logo with lighthouse and clinic name."
          priority
          placeholder="blur"
          className="mx-auto mb-8 w-full max-w-xl"
        />
        <p className="text-xl text-foreground">
          Family Owned - Providing Compassionate Care for Your Furry Family
          Members Since 1985
        </p>
      </section>

      <section className="mb-12">
        <Card>
          <CardContent className="p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-3xl font-semibold mb-4">
                Your Trusted Local Veterinarians
              </h2>
              <p className="mb-4">
                At Moultrie Animal Clinic, we understand that your pets are more
                than just animals - they are family. Our team of experienced
                veterinarians and staff are dedicated to providing the highest
                quality care for your beloved companions. We strive to provide a
                personal touch that only a locally owned and family run practice
                can proudly offer.
              </p>
              <Button asChild>
                <Link href="/meet-our-team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src={DogLickingCat}
                alt="Dog licking a cat."
                placeholder="blur"
                className="rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Link href="/our-services">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Services
          </h2>
        </Link>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Stethoscope,
              title: "Wellness Exams/Preventative Care",
              description: "Comprehensive check-ups for your pet's health",
            },
            {
              icon: Users,
              title: "Surgery",
              description: "Advanced surgical procedures with expert care",
            },
            {
              icon: Camera,
              title: "In-Clinic Laboratory",
              description:
                "Diagnostic blood work in-clinic for immediate results",
            },
            {
              icon: Phone,
              title: "Accepting New Clients",
              description: "New Clients and Snow Birds are always welcome!",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-evenly mt-6">
          <Button asChild>
            <Link href="/our-services">View All Services</Link>
          </Button>
          <Button asChild>
            <Link href="/new-clients">New Client Information</Link>
          </Button>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg">
                Have questions or need to schedule an appointment? We are here
                to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <Link
                    href="tel:+19047975601"
                    className="text-lg hover:underline"
                  >
                    +1 (904) 797-5601
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <Link
                    href="mailto:moultrieanimalclinic@gmail.com"
                    className="text-lg hover:underline"
                  >
                    moultrieanimalclinic@gmail.com
                  </Link>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1" />
                  <div className="flex flex-col">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=3450+US+Hwy+1+S,+Saint+Augustine,+FL+32086"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      3450 US Hwy 1 S, Saint Augustine, FL 32086
                    </Link>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="flex flex-col w-full">
                    <h3 className="font-semibold mb-2">Hours of Operation</h3>
                    <ul className="space-y-2">
                      {CLINIC_HOURS.map((item, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:flex-row sm:justify-between"
                        >
                          <span className="font-medium sm:inline">
                            {item.days}
                          </span>
                          <span className="whitespace-nowrap">{item.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-6 w-6" />
                  <Link
                    href="https://www.google.com/search?q=Moultrie+Animal+Clinic&oq=Moultrie+Animal+Clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Read our Google Reviews
                  </Link>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <Button asChild>
                    <Link href="/take-a-tour">Take a Tour</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-full">
              <GoogleMapComponent />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
