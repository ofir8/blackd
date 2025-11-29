import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SplitText = ({ 
  children, 
  className = "", 
  delay = 0 
}: SplitTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    const originalText = element.textContent || "";
    
    // Split text into words
    const words = originalText.split(" ");
    element.innerHTML = "";

    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.overflow = "hidden";
      wordSpan.style.verticalAlign = "top";
      
      const charSpan = document.createElement("span");
      charSpan.style.display = "inline-block";
      charSpan.textContent = word + (index < words.length - 1 ? " " : "");
      
      wordSpan.appendChild(charSpan);
      element.appendChild(wordSpan);
    });

    const wordSpans = Array.from(element.querySelectorAll("span > span"));

    // Animate on scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          wordSpans,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.05,
            delay: delay,
          }
        );
      },
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default SplitText;

