import { Gift, UtensilsCrossed, Sparkles, MapPin } from "lucide-react";

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
    <section id="amenities" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            שירותים <span className="text-gradient">משלימים</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            כל מה שצריך לחוויה מושלמת
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-500 hover-lift"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <amenity.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-6">{amenity.title}</h3>
              <ul className="space-y-3">
                {amenity.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hosts Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-light mb-6">
            <span className="text-gradient">מארחים שמרגישים</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            אופיר ובינת, המתגוררים בקדמת המתחם, מעניקים אירוח בגישה אחרת – שלווה, מכבדת, 
            קשובה ונעימה. אופיר בנה את המקום בידיו והאיכות מורגשת בכל פינה: מפרטי העץ 
            ועד התאורה, מהסאונה ועד הבריכה.
          </p>
        </div>

        {/* Kosher Section */}
        <div className="mt-12 bg-card border border-border/50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🕍</span>
            </div>
            <div className="text-center md:text-right flex-1">
              <h3 className="text-2xl font-light mb-4">אירוח מותאם לשומרי מסורת</h3>
              <p className="text-muted-foreground leading-relaxed">
                המתחם כולל פלטת שבת, מיחם, כלים חד-פעמיים, מעמד לנרות, ובית כנסת במרחק הליכה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
