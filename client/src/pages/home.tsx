import { useCallback } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ComparisonSection from "@/components/landing/ComparisonSection";
import SituationsGrid from "@/components/landing/SituationsGrid";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import StatsSection from "@/components/landing/StatsSection";
import AboutSection from "@/components/landing/AboutSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import MobileCallButton from "@/components/landing/MobileCallButton";

export default function Home() {
  const handleScrollToSection = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header onScrollToSection={handleScrollToSection} />
      <HeroSection />
      <HowItWorks />
      <StatsSection />
      <ComparisonSection />
      <SituationsGrid />
      <TestimonialsSection />
      <AboutSection />
      <FinalCTA />
      <Footer />
      <MobileCallButton />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "QuickHomeBuyers",
            description: "We buy houses for cash in any condition. Get a fair offer within 24 hours and close in as little as 7 days.",
            url: "https://quickhomebuyers.com",
            telephone: "+1-800-555-1234",
            email: "info@quickhomebuyers.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              addressCountry: "US",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
            sameAs: [],
          }),
        }}
      />
    </main>
  );
}
