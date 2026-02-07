"use client";

import Link from "next/link";
import Logo from "../app/logo.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderNavLinks = () => {
    return NAV_LINKS.map((link, index) => (
      <Link className="hover:text-neutral-900" key={index} href={link.href}>
        {link.name}
      </Link>
    ));
  };

  return (
    <div className="sticky top-0">
      <div className="flex relative md:rounded-full bg-white justify-between items-center gap-4 md:mt-4 max-w-4xl mx-auto px-2 py-4 md:shadow-aceternity ">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            height={50}
            width={50}
            className="rounded-full"
          />
        </Link>
        <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10">
          {renderNavLinks()}
          <Link
            className="hover:text-neutral-900"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
        {open && (
          <div className="absolute inset-x-0 bg-white rounded-md shadow-aceternity top-25 max-w-[95%] mx-auto">
            <div className="flex md:hidden flex-col items-start gap-4 text-sm text-neutral-500 p-4">
              {renderNavLinks()}
              <Link
                className="hover:text-neutral-900"
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
