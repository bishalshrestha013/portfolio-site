import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const renderFooterLinksGroup = (links: { href: string; name: string }[]) => {
    return (
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <footer className="mt-4 max-w-4xl mx-auto w-full text-gray-600 p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-4 md:place-items-center">
        {renderFooterLinksGroup(SOCIAL_LINKS)}
        {renderFooterLinksGroup(NAV_LINKS)}
      </div>
    </footer>
  );
};

export default Footer;
