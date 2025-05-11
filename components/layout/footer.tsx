import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/elkwawy" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmed-elkwawy-0a3973224",
  },
  { name: "Email", icon: Mail, href: "mailto:ahmedelkwawy32@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container-custom py-10 md:py-14">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight mb-2 inline-block"
          >
            Ahmed Elkwawy<span className="text-primary">.</span>
          </Link>
          <p className=" text-muted-foreground mt-4 max-w-[440px] text-center">
            Frontend developer with a passion for creating beautiful,
            responsive, and user-friendly websites.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Elkwawy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
