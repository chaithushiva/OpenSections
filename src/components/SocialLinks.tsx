import { Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/opensections",
    color: "hover:text-neon-pink",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/opensections",
    color: "hover:text-neon-aqua",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@opensections.com",
    color: "hover:text-primary",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="social"
            size="icon"
            asChild
            className={social.color}
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}