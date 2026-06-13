import { Mail, MapPin, Linkedin, Send } from "lucide-react";
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
  {
    icon: Send,
    href: "https://t.me/SONIP2016",
    name: "Telegram",
  },
];

export function Footer() {
  // 🔥 force hash navigation
  const goTo = (path: string) => {
    window.location.hash = path;
  };

  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground mt-10">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1 */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} className="h-12 w-12 object-contain" />
            <span className="font-bold text-xl">Soni Paras Autovälitys</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted source for the best car deals.
          </p>
        </div>

        {/* Section 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavItems.map(item => (
              <li key={item.name}>
                <span
                  onClick={() => goTo(item.href)}
                  className="text-sm cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1" />
              <p>Likusterikatu 1, 02250 Espoo Finland</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=soniparasauto@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@soniparasauto.fi
              </a>
            </div>
          </div>
        </div>

        {/* Section 4 */}
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
          &copy; {new Date().getFullYear()} Soni Paras Autovälitys. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
