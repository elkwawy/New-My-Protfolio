import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/ahmedElkwawy" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/ahmedElkwawy",
  },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/ahmedElkwawy" },
  { name: "Email", icon: Mail, href: "mailto:ahmed.elkwawy@example.com" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight mb-4 inline-block"
            >
              Ahmed<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
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
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="mailto:ahmedelkwawy32@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  ahmedelkwawy32@gmail.com
                </a>
              </li>
              <li>Cairo, Egypt</li>
            </ul>
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
