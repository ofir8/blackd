import { Gift, UtensilsCrossed, Sparkles, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const Amenities = () => {
  const amenities = [
    {
      icon: Gift,
      title: "פינוקים ומחשבה",
      items: [
        "יין, בירות ושוקולדים איכוטיים",
        "מעדנים ושתייה קרה",
        "חלוקי ספא ונעליים ממותגות",
        "תמרוקים יוקרתיים",
      ],
    },
    {
      icon: UtensilsCrossed,
      title: "ארוחות ושירותי קייטרינג",
      items: [
        "ארוחות בוקר מפנקות (טבעוני/צמחוני)",
        "אופציות קייטרינג מגוונות",
        "סידורים לאירועים מיוחדים",
        "שירות למועדים וחגים",
      ],
    },
    {
      icon: Sparkles,
      title: "שירותי ספא ועיסוי",
      items: [
        "מגוון טיפולי ספא",
        "עיסויים מקצועיים",
        "טיפולי פנים ויופי",
        "חבילות זוגיות",
      ],
    },
    {
      icon: MapPin,
      title: "נגישות ושירותים נוספים",
      items: [
        "נגישות לנכים (בצימר)",
        "פלטת שבת ומיחם",
        "בית כנסת במרחק הליכה",
        "חניה פרטית",
      ],
    },
  ];

  return (
    <section id="amenities" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 overflow-x-hidden">
        <Reveal direction="fade-up" delay={0.1} width="100%">
          <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 tracking-tight text-center">
              <span className="text-gradient">כל מה שצריך לחוויה מושלמת</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 sm:mb-8" />
        </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {amenities.map((amenity, index) => (
            <Reveal key={index} direction="fade-up" delay={0.2 + index * 0.1} duration={0.6} width="100%">
              <div className="group p-6 sm:p-8 lg:p-10 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 hover-lift h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110 transition-all duration-300 mx-auto">
                <amenity.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300 text-center">
                {amenity.title}
              </h3>
                <ul className="space-y-2 sm:space-y-3 flex-1">
                {amenity.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-right">
                    <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Hosts Section */}
        <Reveal direction="fade-up" delay={0.3} width="100%">
          <div className="mt-8 sm:mt-12 lg:mt-16 bg-white rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="relative z-10 text-center px-2">
            <h3 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-black">
              <span className="text-black">מארחים שמרגישים</span>
          </h3>
            <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-3xl mx-auto leading-relaxed">
            אופיר ובינת, המתגוררים בקדמת המתחם, מעניקים אירוח בגישה אחרת – שלווה, מכבדת, 
            קשובה ונעימה. אופיר בנה את המקום בידיו והאיכות מורגשת בכל פינה: מפרטי העץ 
            ועד התאורה, מהסאונה ועד הבריכה.
          </p>
        </div>
          </div>
        </Reveal>

        {/* Kosher Section */}
        <Reveal direction="fade-up" delay={0.4} width="100%">
          <div className="mt-6 sm:mt-8 lg:mt-12 bg-white rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center px-2">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-black">אירוח מותאם לשומרי מסורת</h3>
            <p className="text-sm sm:text-base text-black/80 leading-relaxed max-w-2xl mx-auto">
                המתחם כולל פלטת שבת, מיחם, כלים חד-פעמיים, מעמד לנרות, ובית כנסת במרחק הליכה.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Amenities;
