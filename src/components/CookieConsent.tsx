import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show consent banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Reveal direction="fade-up" delay={0} duration={0.5}>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-white/10 shadow-2xl">
        <div className="container mx-auto px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex-1 text-center md:text-right">
              <p className="text-white text-sm md:text-base leading-relaxed">
                אנו משתמשים בקובצי Cookie כדי לשפר את חוויית הגלישה שלכם. 
                בהמשך הגלישה באתר אתם מסכימים לשימוש בקובצי Cookie בהתאם למדיניות הפרטיות שלנו.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleAccept}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-6 py-2 text-sm md:text-base whitespace-nowrap"
              >
                אישור
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default CookieConsent;

