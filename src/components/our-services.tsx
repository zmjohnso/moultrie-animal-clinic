import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Syringe,
  Scissors,
  Bone,
  Heart,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    description:
      "Regular check-ups to ensure your pet's ongoing health and catch any issues early.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Protection against common and serious diseases to keep your pet healthy.",
  },
  {
    icon: Scissors,
    title: "Surgery",
    description:
      "From routine procedures to complex operations, performed with the utmost care.",
  },
  {
    icon: Bone,
    title: "Dental Care",
    description:
      "Comprehensive dental services to maintain your pet's oral health.",
  },
  {
    icon: Heart,
    title: "In-Clinic Laboratory",
    description: "Diagnostic blood work in-clinic for immediate results",
  },
  {
    icon: Calendar,
    title: "Senior Pet Care",
    description:
      "Specialized care for older pets to ensure comfort and quality of life.",
  },
];

export function OurServicesComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
      <Card className="mb-8">
        <CardContent className="flex flex-col items-center p-6">
          <Image
            src="/our-services/title-photo.jpg"
            alt="Our Services Title Photo"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg mb-4">
            You work hard to ensure that your furry family member has the best
            possible life. That&apos;s why partnering with a locally owned
            veterinary team who genuinely cares is so important.
          </p>
          <p className="text-lg">
            At Moultrie Animal Clinic we are proud to offer a comprehensive
            range of services to address your pet&apos;s specific veterinary
            needs. From the first checkup to their precious golden years, you
            can count on us every step of the way!
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Microchipping</li>
            <li>Bathing</li>
            <li>Nutritional Counseling</li>
            <li>
              Soft tissue surgery with Complete Monitoring equipment to ensure
              your pet&apos;s safety
            </li>
            <li>
              Endocrine Disease Management: Thyroid disease, Cushing Disease,
              Diabetes Mellitus
            </li>
            <li>Year-Round Parasite Prevention and Control</li>
            <li>Daytime Hospitalization and fluid therapy</li>
            <li>
              Laboratory Services: Complete In house IDEXX Machines and
              Reference Lab
            </li>
            <li>
              HT VISTA- The first completely non-invasive cancer screening tool
              that allows veterinary teams to rule out cancer of dermal and
              subcutaneous masses on the spot
            </li>
            <li>Digital Radiology</li>
            <li>Digital Dental Radiology</li>
            <li>
              Comprehensive Oral Health Assessment and Treatment (It&apos;s not
              just your average dental!)
            </li>
            <li>Behavioral Counseling</li>
            <li>
              ForceTriad- Electrosurgical System that provides electrosurgical
              cutting and coagulation, monopolar and bipolar functionality, and
              vessel sealing.
            </li>
            <li>
              Phovia - fluorescent light energy to accelerate natural skin
              regeneration
            </li>
            <li>Companion Therapy Laser- CTS DUO+ Class 4 laser</li>
            <li>
              Mobile Abdominal Ultrasounds and Echocardiograms with MOVES
              Internal Medicine Specialist Dr. Kristen Parker
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <a href="/contact">Schedule an Appointment</a>
        </Button>
      </div>
    </div>
  );
}
