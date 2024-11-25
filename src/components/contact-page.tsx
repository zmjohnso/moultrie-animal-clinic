import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Printer } from "lucide-react";
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
            <span>+1 (904) 797-5601</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-gray-500" />
            <Link
              href="mailto:contact@example.com"
              className="text-blue-600 hover:underline"
            >
              moultrieanimalclinic@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Printer className="h-5 w-5 text-gray-500" />
            <span>+1 (904) 794-7170</span>
          </div>
          <div className="flex space-x-4 pt-4">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.facebook.com/Moultrieanimalclinic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={FacebookColor} alt="Facebook Icon" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://www.pinterest.com/moultrieanimal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={PinterestColor} alt="Pinterest Icon" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
