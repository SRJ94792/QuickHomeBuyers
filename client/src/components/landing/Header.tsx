import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onScrollToSection?: (section: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection?.(section);
  };

  const navItems = [
    { label: "How It Works", section: "how-it-works" },
    { label: "Why Us", section: "comparison" },
    { label: "Testimonials", section: "testimonials" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground">
              <Home className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              QuickHomeBuyers
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-sm font-medium text-muted-foreground transition-colors hover-elevate px-2 py-1 rounded-md"
                data-testid={`nav-${item.section}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+18005551234"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span>(800) 555-1234</span>
            </a>
            <Button
              onClick={() => handleNavClick("hero")}
              className="hidden sm:flex bg-cta text-cta-foreground"
              data-testid="button-get-offer"
            >
              Get My Offer
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className="block w-full text-left px-4 py-3 text-foreground hover-elevate rounded-md"
                  data-testid={`mobile-nav-${item.section}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 px-4 py-3 text-primary font-semibold"
                data-testid="mobile-phone"
              >
                <Phone className="w-4 h-4" />
                <span>(800) 555-1234</span>
              </a>
              <Button
                onClick={() => handleNavClick("hero")}
                className="w-full bg-cta text-cta-foreground"
                data-testid="button-mobile-get-offer"
              >
                Get My Cash Offer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
