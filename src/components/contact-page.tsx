import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Printer, MapPin, Clock } from "lucide-react";
import FacebookColor from "../../public/brand-icons/facebook-color.svg";
import Google from "../../public/brand-icons/google.svg";
import Link from "next/link";
import Image from "next/image";
import { GoogleMapComponent } from "./google-map";

export function ContactPageComponent() {
  const hours = [
    { days: "Mon, Tue, Thu, Fri", time: "7:00 AM - 5:30 PM" },
    { days: "Wed", time: "7:00 AM - 3:00 PM" },
    { days: "Sat, Sun", time: "Closed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <Card className="max-w-2xl mx-auto border shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Get in touch</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-gray-500" />
            <Link href="tel:+19047975601" className="hover:underline">
              +1 (904) 797-5601
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-gray-500" />
            <Link
              href="mailto:moultrieanimalclinic@gmail.com"
              className="hover:underline"
            >
              moultrieanimalclinic@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Printer className="h-5 w-5 text-gray-500" />
            <Link href="tel:+19047947170" className="hover:underline">
              +1 (904) 794-7170
            </Link>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-5 w-5 text-gray-500 mt-1" />
            <div className="flex flex-col w-full">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=3450+US+Hwy+1+S,+Saint+Augustine,+FL+32086"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                3450 US Hwy 1 S, Saint Augustine, FL 32086
              </Link>
              <GoogleMapComponent />
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="h-5 w-5 text-gray-500 mt-1" />
            <div className="flex flex-col w-full">
              <h2 className="font-semibold mb-2">Hours of Operation</h2>
              <ul className="text-sm space-y-1">
                {hours.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="min-w-[140px]">{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.facebook.com/Moultrieanimalclinic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={FacebookColor}
                  alt="Visit the Moultrie Animal Clinic Facebook."
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.google.com/search?q=Moultrie+Animal+Clinic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Google}
                  alt="Visit the Moultrie Animial Clinic Google search entry."
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
