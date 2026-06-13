import logo from "../components/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Phone } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

export function Header() {
  // 🔥 force hash navigation
  const goTo = (path: string) => {
    window.location.hash = path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} className="h-12 w-12 object-contain" />

          <span
            onClick={() => goTo("/")}
            className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
          >
            Soni Paras Autovälitys
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => {
            const Icon = item.icon;

            return (
              <span
                key={item.name}
                onClick={() => goTo(item.href)}
                className="flex items-center gap-1 text-sm font-medium cursor-pointer text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </span>
            );
          })}
        </nav>

        {/* Mobile button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
