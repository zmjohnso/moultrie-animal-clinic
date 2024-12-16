import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Users, Camera, Phone, MapPin, Clock } from "lucide-react";

export function HomePageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Moultrie Animal Clinic
        </h1>
        <Image
          src="/moultrie_logo_color.jpg"
          alt="Moultrie Animal Clinic Logo"
          width={400}
          height={134}
          className="mx-auto my-8 w-full max-w-xl"
        />
        <p className="text-xl text-foreground">
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
              New Clients Welcome
            </h2>
            <p className="text-center mb-4">
              We&apos;re always excited to meet new furry friends and their
              families. Learn what to expect on your first visit.
            </p>
            <p className="text-center mb-6">
              Snow Birds, we&apos;ve got you covered! We offer part-of-the-year
              treatment plans for your pets, ensuring they receive consistent
              care even when you&apos;re only in town seasonally.
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
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-center mb-4">
              Have questions or need to schedule an appointment? We&apos;re here
              to help!
            </p>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-gray-500" />
              <Link
                href="tel:+19047975601"
                className="text-blue-600 hover:underline"
              >
                +1 (904) 797-5601
              </Link>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 text-gray-500 mt-1" />
              <div className="flex flex-col w-full">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=3450+US+Hwy+1+S,+Saint+Augustine,+FL+32086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  3450 US Hwy 1 S, Saint Augustine, FL 32086
                </Link>
                <div className="mt-2 w-full h-56 md:h-72 lg:h-96 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5511120403247!2d-81.31808368489!3d29.846099981951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d9f0b1d7e5e7%3A0x1b5c5b1d1b1b1b1b!2s3450%20US-1%2C%20St%20Augustine%2C%20FL%2032086!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Moultrie Animal Clinic"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-5 w-5 text-gray-500 mt-1" />
              <div className="flex flex-col w-full">
                <h3 className="font-semibold mb-2">Hours of Operation</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-4">Monday</td>
                      <td>7:00 AM - 5:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Tuesday</td>
                      <td>7:00 AM - 5:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Wednesday</td>
                      <td>7:00 AM - 3:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Thursday</td>
                      <td>7:00 AM - 5:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Friday</td>
                      <td>7:00 AM - 5:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Saturday</td>
                      <td>Closed</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4">Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center mt-4">
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
