import Image from "next/image";
import Link from "next/link";
import Facebook from "/public/brand-icons/facebook.svg";
import { Phone } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/meet-our-team", label: "Meet Our Team" },
  { href: "/our-services", label: "Our Services" },
  { href: "/take-a-tour", label: "Take a Tour" },
  { href: "/new-clients", label: "New Clients" },
  {
    href: "https://moultrieanimalclinic.securevetsource.com/site/view/site/view/HomeDelivery.pml?retUrl=https://moultrieanimalclinic.com/&cmsTitle=MOULTRIE%20ANIMAL%20CLINIC",
    label: "Online Pharmacy",
  },
];

export function AppHeaderComponent() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/moultrie_logo_color.jpg"
                alt="Moultrie Animal Clinic Logo"
                width={200}
                height={67}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links, Phone, and Phone Number */}
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Contact Us</span>
              </Link>
              <Link
                href="https://www.facebook.com/Moultrieanimalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
              >
                <Image
                  src={Facebook}
                  alt="Facebook Icon"
                  width={20}
                  height={20}
                />
              </Link>

              <MobileMenu navItems={navItems} />
            </div>
            <a
              href="tel:+19047947170"
              className="mt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              +1 (904) 794-7170
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
