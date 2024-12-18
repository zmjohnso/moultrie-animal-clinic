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
} from "lucide-react";
import { HomePageMap } from "./home-page-map";

export function HomePageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <Image
          src="/moultrie_logo_color.jpg"
          alt="Moultrie Animal Clinic Logo"
          width={400}
          height={134}
          className="mx-auto mb-8 w-full max-w-xl"
        />
        <p className="text-xl text-foreground">
          Family Owned and Providing Compassionate Care for Your Furry Family
          Members Since 1985!
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
                than just animals – they&apos;re family. As a family-owned
                business, our team of experienced veterinarians and staff are
                dedicated to providing the highest quality care for your beloved
                companions with the personal touch that only a family practice
                can offer.
              </p>
              <Button asChild>
                <Link href="/meet-our-team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/home/team.jpg"
                alt="Moultrie Animal Clinic Team"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Services
        </h2>
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
                Have questions or need to schedule an appointment? We&apos;re
                here to help!
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
                  <Clock className="h-6 w-6 mt-1" />
                  <div className="flex flex-col w-full">
                    <h3 className="font-semibold mb-2">Hours of Operation</h3>
                    <ul className="space-y-1">
                      {[
                        {
                          days: "Mon, Tue, Thu, Fri",
                          time: "7:00 AM - 5:30 PM",
                        },
                        { days: "Wed", time: "7:00 AM - 3:00 PM" },
                        { days: "Sat, Sun", time: "Closed" },
                      ].map((item, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="font-medium">{item.days}</span>
                          <span>{item.time}</span>
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
              <HomePageMap />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
