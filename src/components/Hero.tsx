import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale: "1.1",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl animate-fade-in">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-morphism mb-8 animate-fade-in-scale">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/90 text-sm font-light tracking-wider">
              חוויה יוקרתית בגליל המערבי
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="luxury-heading text-white mb-6 leading-tight">
            Black Diamond
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

          {/* Subheading */}
          <p className="luxury-subheading text-white/90 mb-4 max-w-3xl mx-auto">
            פסגת האירוח בגליל המערבי
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            חוויה יוקרתית, פרטית ומלאת שלווה בכפר ורדים
            <br />
            שתי יחידות אירוח מעוצבות בקפידה המשלבות אלגנטיות מודרנית וחום כפרי
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105"
            >
              הזמן את השהייה שלך
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              גלה עוד
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
