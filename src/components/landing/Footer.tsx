"use client";

import { Home, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#comparison" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const situations = [
  "Foreclosure",
  "Inherited Property",
  "Divorce",
  "Relocation",
  "Vacant Home",
  "Bad Tenants",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground">
                <Home className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg">QuickHomeBuyers</span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Your trusted local cash home buyers. We purchase houses in any 
              condition, offering fair prices and fast closings since 2015.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <MapPin className="w-4 h-4" />
              <span>Serving All of New Jersey</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">We Buy Houses</h3>
            <ul className="space-y-2">
              {situations.map((situation) => (
                <li key={situation}>
                  <span className="text-background/70 text-sm">{situation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-background/70 text-sm hover:text-background transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                (800) 555-1234
              </a>
              <a
                href="mailto:info@quickhomebuyers.com"
                className="flex items-center gap-2 text-background/70 text-sm hover:text-background transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                info@quickhomebuyers.com
              </a>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-background/10">
              <p className="text-sm font-semibold mb-1">Available 24/7</p>
              <p className="text-xs text-background/70">
                Call anytime. We're here to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
            <p>&copy; {new Date().getFullYear()} QuickHomeBuyers. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
