import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
  initials: string;
}

const Testimonials = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    // Clone cards for seamless loop
    if (row1Ref.current) {
      const cards = Array.from(row1Ref.current.children);
      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        row1Ref.current?.appendChild(clone);
      });
    }
    if (row2Ref.current) {
      const cards = Array.from(row2Ref.current.children);
      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        row2Ref.current?.appendChild(clone);
      });
    }
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: "דוד כהן",
      rating: 5,
      comment: "חופשה מושלמת! המקום נקי, מפנק ומוקפד בכל פרט. השירות מעולה והמארחים חמים ומסבירי פנים. בהחלט נחזור!",
      date: "נובמבר 2024",
      initials: "דכ",
    },
    {
      name: "שרה לוי",
      rating: 5,
      comment: "הסאונה והבריכה פשוט מדהימות. האווירה שקטה ושלווה, בדיוק מה שחיפשנו. המושלם לבריחה מהשגרה.",
      date: "אוקטובר 2024",
      initials: "של",
    },
    {
      name: "יוסי מזרחי",
      rating: 5,
      comment: "איכות יוצאת דופן בכל פרט. מהעיצוב ועד התאורה - הכל מוקפד ומעוצב בטעם מעולה. המלצה חמה!",
      date: "ספטמבר 2024",
      initials: "ימ",
    },
    {
      name: "מיכל דוד",
      rating: 5,
      comment: "צימר יוקרתי עם כל הפרטים הקטנים שמייצרים חוויה בלתי נשכחת. ארוחת בוקר מצוינת ושירות מדהים.",
      date: "אוגוסט 2024",
      initials: "מד",
    },
    {
      name: "אלון שרון",
      rating: 5,
      comment: "מקום מדהים לזוגות. הפרטיות, השקט והפינוקים - הכל מושלם. המארחים דאגו לכל צורך שלנו.",
      date: "יולי 2024",
      initials: "אש",
    },
    {
      name: "רונית גולן",
      rating: 5,
      comment: "השילוב בין יוקרה, נוחות ושקט פשוט מושלם. המקום ממוקם נהדר ונוח להגעה. חוויה מעולה!",
      date: "יוני 2024",
      initials: "רג",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-5 h-5",
          i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
        )}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="w-full relative z-10">
        <Reveal direction="fade-up" delay={0.1} width="100%">
          <div className="text-center mb-16 px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-center text-black">
              מה <span className="text-gradient">אורחינו</span> אומרים
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto font-light leading-relaxed text-center">
              המלצות מאורחים מרוצים שחוו את הקסם שלנו
            </p>
          </div>
        </Reveal>

        {/* First Row - Moving Left (Right to Left) */}
        <div className="relative overflow-hidden mb-6 w-full">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div ref={row1Ref} className="flex gap-6 marquee-left" style={{ width: 'max-content' }}>
            {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial, index) => {
              const cardId = `row1-${index}`;
              const isHovered = hoveredCard === cardId;
              return (
              <Card
                key={cardId}
                onMouseEnter={() => setHoveredCard(cardId)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group border transition-all duration-500 flex-shrink-0 ${
                  isHovered 
                    ? 'border-black/30 bg-black/5 shadow-2xl shadow-black/20' 
                    : 'border-black/10 bg-white'
                }`}
                style={{ width: '400px', minWidth: '400px' }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 flex-row-reverse">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-black/10 text-black font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-right">
                      <h4 className="font-medium text-lg text-black">{testimonial.name}</h4>
                      <p className="text-sm text-black/60">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4 justify-end">{renderStars(testimonial.rating)}</div>
                  <p className="text-black/80 leading-relaxed text-right">{testimonial.comment}</p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        {/* Second Row - Moving Right (Left to Right) - Same as first row but opposite direction */}
        <div className="relative overflow-hidden w-full">
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div ref={row2Ref} className="flex gap-6 marquee-right" style={{ width: 'max-content' }}>
            {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((testimonial, index) => {
              const cardId = `row2-${index}`;
              const isHovered = hoveredCard === cardId;
              return (
              <Card
                key={cardId}
                onMouseEnter={() => setHoveredCard(cardId)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group border transition-all duration-500 flex-shrink-0 ${
                  isHovered 
                    ? 'border-black/30 bg-black/5 shadow-2xl shadow-black/20' 
                    : 'border-black/10 bg-white'
                }`}
                style={{ width: '400px', minWidth: '400px' }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 flex-row-reverse">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-black/10 text-black font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-right">
                      <h4 className="font-medium text-lg text-black">{testimonial.name}</h4>
                      <p className="text-sm text-black/60">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4 justify-end">{renderStars(testimonial.rating)}</div>
                  <p className="text-black/80 leading-relaxed text-right">{testimonial.comment}</p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center px-6 md:px-12 lg:px-24">
          <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-medium text-black">דירוג ממוצע: 4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

