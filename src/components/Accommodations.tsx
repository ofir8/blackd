import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import suiteImage1 from "@/assets/DSC07982.jpg";
import suiteImage2 from "@/assets/DSC07922.jpg";
import suiteImage3 from "@/assets/DSC07928.jpg";
import suiteImage4 from "@/assets/DSC07930.jpg";
import zimmerImage1 from "@/assets/DSC08060.jpg";
import zimmerImage2 from "@/assets/DSC05631.jpg";
import zimmerImage3 from "@/assets/DSC05634.jpg";
import zimmerImage4 from "@/assets/DSC05637.jpg";

const Accommodations = () => {
  const [suiteIndex, setSuiteIndex] = useState(0);
  const [zimmerIndex, setZimmerIndex] = useState(0);

  const suiteImages = [suiteImage1, suiteImage2, suiteImage3, suiteImage4];
  const zimmerImages = [zimmerImage1, zimmerImage2, zimmerImage3, zimmerImage4];

  const nextSuite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSuiteIndex((prev) => (prev + 1) % suiteImages.length);
  };

  const prevSuite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSuiteIndex((prev) => (prev - 1 + suiteImages.length) % suiteImages.length);
  };

  const nextZimmer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZimmerIndex((prev) => (prev + 1) % zimmerImages.length);
  };

  const prevZimmer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZimmerIndex((prev) => (prev - 1 + zimmerImages.length) % zimmerImages.length);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-[100vh]">
      {/* Top Left - Suite Text */}
      <Reveal direction="fade-right" delay={0.2} width="100%">
        <div className="bg-black text-white flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 h-full w-full">
          <div className="max-w-lg text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            סוויטת <span className="text-gradient">Black Diamond</span>
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto my-6" />
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
            סוויטה זוגית בעיצוב מהפנט, המשלבת טוויסט שיקי עם אווירה פסטורלית.
            החלל המרכזי מרווח, מואר, נעים ומזמין — כזה שלא תרצו לעזוב.
          </p>
          <Link to="/diamond-suite">
            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none px-8 py-6 text-base font-light"
            >
              לפרטים נוספים
            </Button>
          </Link>
          </div>
        </div>
      </Reveal>

      {/* Top Right - Suite Image */}
      <Reveal direction="fade-left" delay={0.3} width="100%">
        <div className="relative overflow-hidden group cursor-pointer h-full">
        <Link to="/diamond-suite" className="block h-full">
          <img
            src={suiteImages[suiteIndex]}
            alt="Black Diamond Suite"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </Link>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSuite}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Previous image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={nextSuite}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Next image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        </div>
      </Reveal>

      {/* Bottom Left - Cabin Image */}
      <Reveal direction="fade-right" delay={0.4} width="100%">
        <div className="relative overflow-hidden group cursor-pointer h-full">
        <Link to="/diamond-zimmer" className="block h-full">
          <img
            src={zimmerImages[zimmerIndex]}
            alt="Diamond Zimmer Cabin"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </Link>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevZimmer}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Previous image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={nextZimmer}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Next image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        </div>
      </Reveal>

      {/* Bottom Right - Cabin Text */}
      <Reveal direction="fade-left" delay={0.5} width="100%">
        <div className="bg-black text-white flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 h-full w-full">
          <div className="max-w-lg text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            הצימר – <span className="text-gradient">חמימות כפרית</span>
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto my-6" />
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
            מתאים לזוגות או למשפחות עד 4 אנשים. מעוצב באווירה גלילית רגועה,
            עם נגיעות מודרניות ונוחות ללא פשרות.
          </p>
          <Link to="/diamond-zimmer">
            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none px-8 py-6 text-base font-light"
            >
              לפרטים נוספים
            </Button>
          </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Accommodations;

