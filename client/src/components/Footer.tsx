import { Link } from "wouter";
import { Mail, MapPin, Linkedin, MessageSquare, Send } from "lucide-react"; // MessageSquare for WhatsApp, Send for Telegram
import logo from "../components/logo.png";
const footerNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const socialMediaLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/soni-paras-autov%C3%A4litys/?viewAsMember=true",
    name: "LinkedIn",
  },
  { icon: MessageSquare, href: "https://w.app/dqvrvm", name: "WhatsApp" }, // Using MessageSquare for WhatsApp

  { icon: Send, href: "https://t.me/SONIP2016", name: "Telegram" }, // Using Send for Telegram
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground mt-10">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1: Company Info/Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            {/* Company Logo */}
            <img
              src={logo}
              alt="Car Listing Site Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="font-bold text-xl">Soni Paras Autovälitys</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted source for the best car deals.
          </p>
        </div>

        {/* Section 2: Navigation Tabs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavItems.map(item => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <p>Loading Address: Kumitehtaankatu, 04260 Kerava Finland</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=soniparasauto@gmail.com"
                  target="_blank"
                >
                  info@soniparasauto.fi
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialMediaLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container border-t border-border/40 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} soni paras Autovälitys. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
