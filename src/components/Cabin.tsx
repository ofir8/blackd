import { Users, Coffee, Tv, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import cabinImage from "@/assets/cabin-exterior.jpg";

const Cabin = () => {
  const features = [
    {
      icon: Users,
      title: "עד 4 אורחים",
      description: "מיטה זוגית וכורסה נפתחת",
    },
    {
      icon: Coffee,
      title: "מטבחון מצויד",
      description: "אספרסו, מקרר, מיקרוגל ועוד",
    },
    {
      icon: Tv,
      title: "בידור וחימום",
      description: "טלוויזיה עם כבלים ומיזוג איכותי",
    },
    {
      icon: Droplet,
      title: "ג'קוזי ספא",
      description: "Soft-Tub שקוע בדק במתחם הפרטי",
    },
  ];

  return (
    <section id="cabin" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            הצימר – <span className="text-gradient">חמימות כפרית</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            באיכות גבוהה ונוחות ללא פשרות
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl group hover-lift">
            <img
              src={cabinImage}
              alt="Cozy Cabin with Hot Tub"
              className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              מתאים לזוגות או למשפחות עד 4 אנשים. מעוצב באווירה גלילית רגועה, 
              עם נגיעות מודרניות ונוחות ללא פשרות.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-6">המתחם החיצוני הפרטי כולל:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>ג'קוזי ספא Soft-Tub שקוע בדק</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>פרגולה מקסימה עם פינות ישיבה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>מנגל גז ומטבח חוץ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>ריהוט גן איכותי ומעוצב</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                הזמן את הצימר
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabin;
