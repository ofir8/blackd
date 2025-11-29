import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  amplitude?: number;
}

const ScrollFloat = ({ 
  children, 
  className = "", 
  speed = 1,
  amplitude = 40 
}: ScrollFloatProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    let scrollTrigger: ScrollTrigger | null = null;

    // Scroll Float animation based on react-bits example
    scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: speed,
      onUpdate: (self) => {
        const progress = self.progress;
        const y = Math.sin(progress * Math.PI) * amplitude;
        gsap.set(element, { y: y });
      },
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [amplitude, speed]);

  return (
    <div
      ref={elementRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollFloat;

