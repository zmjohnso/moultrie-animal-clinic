import Image from "next/image";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import Link from "next/link";
import MenuNavigation from "./menuNavigation";
import { pages } from "../shared/constants";

export default function Header() {
  return (
    <div className="flex flex-col">
      <header className="bg-seafoam-blue">
        <div className="max-w-screen-xl py-2 mx-auto flex justify-between lg:justify-center">
          <div className="hidden lg:flex">
            <Link href="/">
              <Image
                src="/moultrie_logo_color.jpg"
                alt="Moultrie Animal Clinic Logo"
                width={75}
                height={75}
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <MenuNavigation />
          </div>

          <div className="flex lg:hidden">
            <Link href="/">
              <Image
                src="/moultrie_logo_color.jpg"
                alt="Moultrie Animal Clinic Logo"
                width={75}
                height={75}
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-evenly flex-grow">
            {Array.from(pages.entries()).map((page) => (
              <div key={page[0]} className="my-2 text-white block">
                <Link href={page[1]}>{page[0]}</Link>
              </div>
            ))}
          </div>

          <div className="flex flex-row">
            <Link href="/contact">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <MdPhone className="w-6 h-6 text-gray-500" />
              </button>
            </Link>
            <a
              href="https://www.facebook.com/Moultrieanimalclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaFacebook className="w-6 h-6 text-gray-500" />
              </button>
            </a>
            <a
              href="https://www.pinterest.com/moultrieanimal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaPinterest className="w-6 h-6 text-gray-500" />
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
