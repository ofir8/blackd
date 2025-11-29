import { MapPin, Trees, Mountain, UtensilsCrossed, Activity } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/config/contact";

const Location = () => {
  const attractions = [
    {
      icon: Trees,
      title: "טבע ונוף",
      description: "מסלולי טיול ונקודות תצפית מדהימות",
    },
    {
      icon: Mountain,
      title: "חוף ים",
      description: "מרחק עד כ- 20 דק' נסיעה מחוף הים בנהריה",
    },
    {
      icon: UtensilsCrossed,
      title: "מסעדות איכותיות",
      description: "אוכל גלילי משובח בסביבה",
    },
    {
      icon: Activity,
      title: "פעילויות",
      description: "ריינג'רים, טרקטורונים, רכיבה על סוסים וג'יפים",
    },
  ];

  return (
    <section id="location" className="section-padding bg-black relative overflow-hidden pt-12 md:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      <div className="container mx-auto relative z-10">
        {/* Glow effect container */}
        <div className="relative rounded-2xl p-8 md:p-12" style={{
          boxShadow: '0 0 60px rgba(128, 128, 128, 0.15), 0 20px 40px rgba(0, 0, 0, 0.3)',
          background: 'linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 0%, transparent 100%)',
        }}>
        <Reveal direction="fade-up" delay={0.1} width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-center">
              <span className="text-gradient">המיקום</span> המושלם
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-center">
              {contactInfo.address.hebrew}
            </p>
          </div>
        </Reveal>

        <Reveal direction="fade-up" delay={0.2} width="100%">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
              ממוקם בכפר ורדים שבגליל המערבי, Black Diamond מציע את השילוב המושלם בין 
              בידוד רומנטי לנגישות למגוון אטרקציות ושירותים.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
              {attractions.map((attraction, index) => (
                <Reveal key={index} direction="fade-up" delay={0.3 + index * 0.1} duration={0.6} width="100%">
                  <div className="flex flex-col items-center text-center group w-full max-w-[200px] overflow-visible">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 flex items-center justify-center mb-4 group-hover:scale-110 hover-lift mx-auto overflow-visible">
                      <attraction.icon className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors duration-300 text-base md:text-lg">{attraction.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{attraction.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
