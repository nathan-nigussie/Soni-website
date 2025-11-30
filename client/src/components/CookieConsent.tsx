import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { X } from "lucide-react"; // Ensure this library is installed

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for consent status
    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) {
      // If no status is found, show the banner
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleAccept = () => {
    onAccept();
    setIsVisible(false);
  };

  const handleDecline = () => {
    onDecline();
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t border-border shadow-2xl">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">
            We value your privacy.
          </p>
          <p>
            This website uses cookies to ensure you get the best experience. By
            clicking "Accept," you consent to the use of cookies for analytics
            and personalized content.
          </p>
        </div>
        <div className="flex space-x-3 flex-shrink-0">
          <Button variant="outline" onClick={handleDecline} className="group">
            <X className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
