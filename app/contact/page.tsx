import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CONTACT_LINKS } from "@/constants";

const Contact = () => {
  return (
    <div className="p-4 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-zinc-600">
        Open to new opportunities and collaborations. Feel free to reach out.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map(({ name, label, href, icon: ContactIcon }) => (
          <Card key={name}>
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ContactIcon />
                  <p>{name}</p>
                </CardTitle>
                <CardDescription className="break-all">{label}</CardDescription>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Contact;
