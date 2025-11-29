import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/DSC08032.jpg";
import suiteInterior from "@/assets/DSC08060.jpg";
import cabinExterior from "@/assets/DSC07991.jpg";
import sauna from "@/assets/DSC08148.jpg";
import logo from "@/assets/icons/Logo_v1.svg";
import shapeLogo from "@/assets/icons/shape Logo.svg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const backgroundImages = [heroImage, suiteInterior, cabinExterior, sauna];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale based on scroll position
  // When scrollY = 0 (top): scale = 2.2 (normal)
  // When scrollY increases: scale decreases (zoom out)
  const maxScroll = 500; // Maximum scroll distance for full zoom out
  const minScale = 1.0; // Minimum scale when scrolled down
  const maxScale = 2.2; // Maximum scale when at top
  const scale = Math.max(minScale, maxScale - (scrollY / maxScroll) * (maxScale - minScale));

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Rotating Background Images with Fade */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 image-fade-transition ${index === currentImageIndex ? "opacity-100 hero-image-animation" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          {/* Overlay with gradient - stronger at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
          {/* Additional bottom overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Animated overlay particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[
          { left: 10, top: 20, delay: 0, duration: 2 },
          { left: 30, top: 40, delay: 0.5, duration: 2.5 },
          { left: 50, top: 15, delay: 1, duration: 3 },
          { left: 70, top: 60, delay: 1.5, duration: 2 },
          { left: 90, top: 30, delay: 2, duration: 2.8 },
          { left: 15, top: 70, delay: 0.3, duration: 2.3 },
          { left: 40, top: 80, delay: 0.8, duration: 2.6 },
          { left: 60, top: 50, delay: 1.2, duration: 2.2 },
          { left: 85, top: 75, delay: 1.8, duration: 2.7 },
          { left: 25, top: 10, delay: 0.6, duration: 2.4 },
          { left: 55, top: 90, delay: 1.3, duration: 2.1 },
          { left: 75, top: 25, delay: 0.9, duration: 2.9 },
          { left: 5, top: 55, delay: 0.4, duration: 2.5 },
          { left: 35, top: 85, delay: 1.1, duration: 2.3 },
          { left: 65, top: 35, delay: 0.7, duration: 2.6 },
          { left: 95, top: 65, delay: 1.4, duration: 2.2 },
          { left: 20, top: 45, delay: 0.2, duration: 2.8 },
          { left: 45, top: 5, delay: 0.6, duration: 2.4 },
          { left: 80, top: 85, delay: 1.7, duration: 2.7 },
          { left: 12, top: 95, delay: 0.5, duration: 2.5 },
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Logo Overlay - Centered on background, full opacity */}
      <div className="absolute inset-0 flex items-center justify-center z-[3] pointer-events-none">
        <img
          src={logo}
          alt="Black Diamond Logo"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
        />
          </div>

      {/* Shape Logo Overlay - Full screen cover with soft blend mode for luxury effect */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        <img
          src={shapeLogo}
          alt="Black Diamond Shape Logo"
          className="w-full h-full object-cover opacity-5 transition-transform duration-300 ease-out"
              style={{
            mixBlendMode: 'overlay',
            objectFit: 'contain',
            transform: `scale(${scale})`,
            filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.15))',
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-gentle-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
