import { MapPin, Trees, Mountain, UtensilsCrossed, Activity } from "lucide-react";

const Location = () => {
  const attractions = [
    {
      icon: Trees,
      title: "טבע ונוף",
      description: "מסלולי טיול ונקודות תצפית מדהימות",
    },
    {
      icon: Mountain,
      title: "חופי ים",
      description: "חופי הכרמל במרחק נסיעה קצר",
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
    <section id="location" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            <span className="text-gradient">המיקום</span> המושלם
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            כפר ורדים, גליל מערבי
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              ממוקם בכפר ורדים שבגליל המערבי, Black Diamond מציע את השילוב המושלם בין 
              בידוד רומנטי לנגישות למגוון אטרקציות ושירותים.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <attraction.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{attraction.title}</h3>
                    <p className="text-sm text-muted-foreground">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-2">כתובת</h3>
                <p className="text-muted-foreground">כפר ורדים, גליל מערבי</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl h-[600px] bg-card border border-border/50">
            {/* Map Placeholder - Replace with actual map integration */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 mx-auto text-primary" />
                <p className="text-xl font-light">כפר ורדים, גליל מערבי</p>
                <p className="text-sm">Google Maps / Waze Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
