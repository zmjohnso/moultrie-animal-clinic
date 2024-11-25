import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Users, Camera, Phone } from "lucide-react";

export function HomePageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Moultrie Animal Clinic
        </h1>
        <p className="text-xl text-muted-foreground">
          Providing compassionate care for your furry family members since 1985
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
                than just animals – they're family. Our team of experienced
                veterinarians and staff are dedicated to providing the highest
                quality care for your beloved companions.
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
              title: "Wellness Exams",
              description: "Comprehensive check-ups for your pet's health",
            },
            {
              icon: Users,
              title: "Surgery",
              description: "Advanced surgical procedures with expert care",
            },
            {
              icon: Camera,
              title: "Diagnostic Imaging",
              description: "State-of-the-art imaging for accurate diagnoses",
            },
            {
              icon: Phone,
              title: "Emergency Care",
              description: "24/7 support for your pet's urgent needs",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild>
            <Link href="/our-services">View All Services</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Take a Virtual Tour
            </h2>
            <p className="text-center mb-6">
              Explore our state-of-the-art facilities and see where your pets
              will receive their care.
            </p>
            <div className="aspect-w-16 aspect-h-9 mb-6 flex justify-center">
              <Image
                src="/home/clinic.jpg"
                alt="Moultrie Animal Clinic Facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="/take-a-tour">Take the Tour</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              New Clients Welcome
            </h2>
            <p className="text-center mb-6">
              We're always excited to meet new furry friends and their families.
              Learn what to expect on your first visit.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/new-clients">New Client Information</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Contact Us
            </h2>
            <p className="text-center mb-6">
              Have questions or need to schedule an appointment? We're here to
              help!
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
