import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Car, Users, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },

  { name: "Contact", href: "/contact", icon: Phone },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-4">
          {/* Company Logo - Now h-12 w-12 */}
          <img
            src="/logo.png"
            alt="Car Listing Site Logo"
            className="h-15 w-15 object-contain"
          />
          <Link href="/">
            <span className="font-bold text-xl cursor-pointer hover:text-primary transition-colors">
              Soni Paras Autovälitys
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <Link key={item.name} href={item.href}>
              <a className="text-sm font-medium transition-colors hover:text-primary">
                {item.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Placeholder for full implementation) */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  );
}
