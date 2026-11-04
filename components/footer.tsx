import { CONTACT_LINKS, NAV_LINKS, RESUME_PATH } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 md:px-4 md:pb-4">
      <div className="max-w-4xl mx-auto bg-white md:rounded-4xl shadow-aceternity p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Let&apos;s build something together.
            </h2>
            <p className="mt-2 text-neutral-500">
              Open to new opportunities, collaborations, and interesting
              problems.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full self-start md:self-auto">
            <Link href="/contact">
              Get in touch <FaArrowRight />
            </Link>
          </Button>
        </div>

        <hr className="my-8" />

        <div className="grid items-start gap-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="logo"
              height={48}
              width={48}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Bishal Shrestha</p>
              <p className="text-sm text-neutral-500">
                Senior Full-Stack & DevOps Engineer
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Navigate
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-500">
              {NAV_LINKS.map((link) => (
                <Link
                  className="hover:text-neutral-900"
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                className="hover:text-neutral-900"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Connect
            </h3>
            <div className="mt-3 flex gap-2">
              {CONTACT_LINKS.map(({ name, href, icon: ContactIcon }) => (
                <Button
                  asChild
                  key={name}
                  variant="outline"
                  size="icon"
                  className="rounded-full text-neutral-500 hover:text-neutral-900"
                >
                  <Link
                    href={href}
                    aria-label={name}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <ContactIcon />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <p className="text-sm text-neutral-400">
          © {currentYear} Bishal Shrestha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
