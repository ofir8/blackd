import { useEffect, useState, useRef } from "react";
import image1 from "@/assets/DSC08032.jpg";
import image2 from "@/assets/DSC08004.jpg";
import image3 from "@/assets/DSC08060.jpg";
import image4 from "@/assets/DSC08156.jpg";
import blackIcon from "@/assets/icons/black-icon.svg";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const features = [
    {
      image: image1,
      title: "יוקרה ללא פשרות",
      description: "עיצוב מהפנט המשלב טוויסט שיקי עם אווירה פסטורלית",
    },
    {
      image: image2,
      title: "פרטיות מוחלטת",
      description: "מתחם מבודד עם כל השירותים שתצטרכו",
    },
    {
      image: image3,
      title: "חוויה בלתי נשכחת",
      description: "כל פרט נבחר בקפידה ליצירת רגעים מושלמים",
    },
    {
      image: image4,
      title: "חוויה בלתי נשכחת",
      description: "כל פרט נבחר בקפידה ליצירת רגעים מושלמים",
    },
  ];

  // Auto-rotate images
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible, features.length]);

  // Calculate parallax offset - images start below hero and move up
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const sectionTop = sectionRef.current?.getBoundingClientRect().top + scrollY || 0;
  const startScroll = sectionTop - heroHeight * 1.2;
  const endScroll = sectionTop - heroHeight * 0.5;
  const parallaxProgress = Math.max(0, Math.min(1, (scrollY - startScroll) / (endScroll - startScroll)));
  const parallaxOffset = (1 - parallaxProgress) * 400; // Start 400px below, move to 0

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full overflow-x-hidden lg:h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] lg:h-screen w-full">
        {/* Right Side - White Background with Content (50%) */}
        <div className="bg-white text-black flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative z-10 overflow-hidden lg:h-screen py-12 lg:py-0 w-full" style={{ boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.08)' }}>
          {/* White background slides in from right */}
      <div
            className={`absolute inset-0 bg-white transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-x-0' 
                : 'translate-x-full'
            }`}
        style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          />
          
          {/* Content appears after background */}
          <div 
            className={`relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-700 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Title - Smaller, more minimalistic */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 tracking-tight leading-[1.1] text-black text-center">
              Black Diamond
            </h2>

            {/* Separator with diamond */}
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <div className="flex-1 h-px bg-black/20" />
              <div className="w-1.5 h-1.5 transform rotate-45 bg-black" />
              <div className="flex-1 h-px bg-black/20" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-black/70 mb-4 sm:mb-6 text-center font-light">
              אירוח אקסלוסיבי בגליל
            </p>

            {/* Body Text - Centered, standard readable size */}
            <div className="space-y-2 sm:space-y-3 text-center">
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal">
                בלב החורש הגלילי,
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal">
                בין עצים מרשרשים ושקט שמרגישים בגוף
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal mb-2 sm:mb-3">
                שוכן מתחם Black Diamond.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal">
                שתי יחידות אירוח שעוצבו בקפידה רבה,
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal">
                המשלבות בין אלגנטיות מודרנית לחום כפרי.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black/90 leading-relaxed font-normal mt-2 sm:mt-3">
                עם הרבה שקט פסטורלי ואירוח חוויתי
              </p>
            </div>
          </div>
        </div>

        {/* Left Side - Split Background with Gallery (50%) */}
        <div className="relative overflow-x-hidden lg:h-screen py-12 lg:py-0 w-full">
          {/* Split Background: 50% black top with lighting effect, 50% white bottom */}
          <div className="absolute inset-0 w-full">
            <div className="absolute top-0 left-0 right-0 h-[50%] bg-black overflow-hidden w-full">
              {/* GLOW effect from below the image - circular, doesn't reach edges */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0.05) 45%, transparent 60%)',
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-white" />
          </div>

          {/* Single Image Carousel - Centered with Logo in corner - Takes full height */}
          <div className="relative lg:h-full flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full" style={{ overflow: 'visible' }}>
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square" style={{ overflow: 'visible' }}>
              {/* Images with fade transition - Enhanced clarity */}
            {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-sm"
                    style={{
                      filter: 'contrast(1.05) brightness(1.02)',
                    }}
                  />
                </div>
              ))}

              {/* Navigation Dots - Small dots at bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-4'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`תמונה ${index + 1}`}
                  />
                ))}
                </div>

              {/* Circular Logo with Rotating Text - Top center on mobile, bottom left on desktop */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:!top-auto lg:!bottom-0 lg:!left-0 lg:!translate-x-[-50%] lg:!translate-y-[50%] z-30" style={{ pointerEvents: 'none' }}>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  <svg
                    viewBox="0 0 140 140"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))',
                    }}
                  >
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      />
                    </defs>
                    <circle
                      cx="70"
                      cy="70"
                      r="65"
                      fill="white"
                    />
                    {/* Rotating text around circle - full text visible from start */}
                    <text
                      fontSize="10"
                      fill="black"
                      fontFamily="serif"
                      fontWeight="500"
                      letterSpacing="1"
                    >
                      <textPath 
                        href="#circleTextPath" 
                        startOffset="0"
                      >
                        <animate
                          attributeName="startOffset"
                          from="0"
                          to="100%"
                          dur="20s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        />
                        BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND • BLACK DIAMOND •
                      </textPath>
                    </text>
                    {/* Logo image in center */}
                    <foreignObject x="35" y="35" width="70" height="70">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={blackIcon}
                          alt="Black Diamond Logo"
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                        />
                  </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
