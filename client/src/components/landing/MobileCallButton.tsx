import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileCallButton() {
  return (
    <a
      href="tel:+18005551234"
      className="fixed bottom-4 right-4 z-50 md:hidden"
      data-testid="mobile-call-button"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-cta text-cta-foreground shadow-lg"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </a>
  );
}
