import { Bath, Coffee, Tv, Waves, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import suiteImage from "@/assets/DSC07930.jpg";
import saunaImage from "@/assets/DSC08030.jpg";

const Suite = () => {
  const features = [
    {
      icon: Bath,
      title: "אמבטיית וינטג'",
      description: "מעוצבת כפריט אמנותי עם תמרוקים יוקרתיים",
    },
    {
      icon: Coffee,
      title: "מטבחון מאובזר",
      description: "מכונת אספרסו מקצועית וכלי הגשה איכותיים",
    },
    {
      icon: Tv,
      title: "בידור פרימיום",
      description: 'טלוויזיה 65" עם HOT + Netflix',
    },
    {
      icon: Waves,
      title: "בריכה פרטית",
      description: "מחוממת ל-34° כל השנה",
    },
    {
      icon: Flame,
      title: "סאונה יבשה",
      description: "איכותית ופרטית במתחם החיצוני",
    },
  ];

  return (
    <section id="suite" className="section-padding bg-black relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${suiteImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-center">
            סוויטת <span className="text-gradient">Black Diamond</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-center">
            יוקרה שמרגישים בנשימה הראשונה
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              סוויטה זוגית בעיצוב מהפנט, המשלבת טוויסט שיקי עם אווירה פסטורלית.
              החלל המרכזי מרווח, מואר, נעים ומזמין — כזה שלא תרצו לעזוב.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                הזמן את הסוויטה
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="relative overflow-hidden rounded-2xl group hover-lift border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
              <img
                src={suiteImage}
                alt="Black Diamond Suite Interior"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-right">
                <p className="text-white text-lg font-medium">סוויטה יוקרתית</p>
                <p className="text-white/80 text-sm">עיצוב מהפנט ומפנק</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group hover-lift border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
              <img
                src={saunaImage}
                alt="Private Sauna"
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-right">
                <p className="text-white text-lg font-medium">סאונה יבשה</p>
                <p className="text-white/80 text-sm">חוויית רילקס מושלמת</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-light mb-8 text-center">
            <span className="text-gradient">המתחם החיצוני</span> – פרטיות מוחלטת
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🏊‍♂️</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">בריכה פרטית מחוממת</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">34° כל השנה, עטופה בדק עץ</p>
            </div>
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🧖‍♀️</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">סאונה יבשה איכותית</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">חוויית רילקס מושלמת</p>
            </div>
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🌿</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">מטבח חוץ מקצועי</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">עם מנגל גז ומשטח שיש</p>
            </div>
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🛁</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">מקלחת חוץ</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">במתחם החיצוני</p>
            </div>
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🌳</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">נוף לחורש</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">שקט וטבע מרגיע</p>
            </div>
            <div className="p-6 group hover-lift transition-all duration-300 rounded-xl hover:bg-primary/10">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">🪑</div>
              <h4 className="font-medium mb-2 group-hover:text-primary transition-colors duration-300">פינות ישיבה מרובות</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">ערסל, מיטות שיזוף ופופים</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suite;
