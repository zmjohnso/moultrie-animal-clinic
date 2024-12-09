import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Printer, MapPin, Clock } from "lucide-react";
import FacebookColor from "/public/brand-icons/facebook-color.svg";
import PinterestColor from "/public/brand-icons/pinterest-color.svg";
import Link from "next/link";
import Image from "next/image";

export function ContactPageComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <Card className="max-w-2xl mx-auto border shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Get in touch</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-gray-500" />
            <Link
              href="tel:+19047975601"
              className="text-blue-600 hover:underline"
            >
              +1 (904) 797-5601
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-gray-500" />
            <Link
              href="mailto:moultrieanimalclinic@gmail.com"
              className="text-blue-600 hover:underline"
            >
              moultrieanimalclinic@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Printer className="h-5 w-5 text-gray-500" />
            <Link
              href="tel:+19047947170"
              className="text-blue-600 hover:underline"
            >
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
                className="text-blue-600 hover:underline"
              >
                3450 US Hwy 1 S, Saint Augustine, FL 32086
              </Link>
              <div className="mt-2 w-full h-64 md:h-80 lg:h-96 rounded-md overflow-hidden">
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
          <div className="flex space-x-4 pt-4">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.facebook.com/Moultrieanimalclinic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={FacebookColor}
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.pinterest.com/moultrieanimal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={PinterestColor}
                  alt="Pinterest Icon"
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
