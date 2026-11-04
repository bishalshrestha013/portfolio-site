"use client";

import Link from "next/link";
import Logo from "../app/logo.png";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, NAVBAR_SCROLL_THRESHOLD, RESUME_PATH } from "@/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const renderNavLinks = () => {
    return NAV_LINKS.map((link) => {
      const isActive = pathname === link.href;

      return (
        <Link
          key={link.name}
          href={link.href}
          onClick={closeMenu}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors hover:text-neutral-900",
            isActive && "bg-neutral-100 text-neutral-900",
          )}
        >
          {link.name}
        </Link>
      );
    });
  };

  const renderResumeButton = () => {
    return (
      <Button asChild size="sm" className="rounded-full">
        <Link
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <Download /> Resume
        </Link>
      </Button>
    );
  };

  return (
    <div className="sticky top-0 z-50">
      <div
        className={cn(
          "relative flex justify-between items-center gap-4 mx-auto px-4 transition-all duration-300 md:rounded-full",
          isScrolled
            ? "py-2 bg-white/75 backdrop-blur-md shadow-aceternity md:mt-2 md:max-w-3xl"
            : "py-4 bg-white md:mt-4 md:max-w-4xl md:shadow-aceternity",
        )}
      >
        <Link href={"/"} onClick={closeMenu}>
          <Image
            src={Logo}
            alt="logo"
            height={50}
            width={50}
            className="rounded-full"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm text-neutral-500">
          {renderNavLinks()}
          <div className="ml-2">{renderResumeButton()}</div>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav className="md:hidden absolute inset-x-2 top-full mt-2 flex flex-col gap-1 p-3 text-sm text-neutral-500 bg-white rounded-2xl shadow-aceternity animate-in fade-in slide-in-from-top-2 duration-200">
            {renderNavLinks()}
            <div className="mt-2">{renderResumeButton()}</div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
