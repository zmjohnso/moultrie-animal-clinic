"use client";

import { useEffect, useRef, useState } from "react";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import { pages } from "../shared/constants";
import Link from "next/link";
import clsx from "clsx";

export default function MenuNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        type="button"
        className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdownMenu"
      >
        <MdMenu size={23} />
      </button>

      <div
        id="dropdownMenu"
        className={clsx(
          "origin-top-right mt-2 left-0 absolute w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50",
          {
            block: isOpen,
            hidden: !isOpen,
          }
        )}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdownButton"
        >
          {Array.from(pages.entries()).map((page) => (
            <Link href={page[1]} key={page[0]}>
              <button
                key={page[0]}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleToggle()}
              >
                {page[0]}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
