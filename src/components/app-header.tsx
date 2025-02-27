import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/brand-icons/facebook.svg";
import { Phone } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import Logo from "../app/icon.png";

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
    <header className="border-b bg-white shadow-sm" tabIndex={-1}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={Logo}
                alt="Small Moultrie Animal Clinic dog and cat logo."
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden xl:flex ml-36 space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="text-gray-900 transition duration-150 ease-in-out"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Contact Us</span>
              </Link>
              <Link
                href="https://www.facebook.com/Moultrieanimalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 transition duration-150 ease-in-out"
              >
                <Image
                  src={Facebook}
                  alt="Visit the Moultrie Animal Clinic Facebook."
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <a
              href="tel:+19047975601"
              className="mt-1 text-sm font-medium text-gray-900 transition duration-150 ease-in-out"
            >
              +1 (904) 797-5601
            </a>
            <a
              href="mailto:moultrieanimalclinic@gmail.com"
              className="mt-1 text-sm font-medium text-gray-900 transition duration-150 ease-in-out"
            >
              moultrieanimalclinic@gmail.com
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
