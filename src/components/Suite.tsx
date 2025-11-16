import { Bath, Coffee, Tv, Waves, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import suiteImage from "@/assets/suite-interior.jpg";
import saunaImage from "@/assets/sauna.jpg";

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
    <section id="suite" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            סוויטת <span className="text-gradient">Black Diamond</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
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
            <div className="relative overflow-hidden rounded-2xl group hover-lift">
              <img
                src={suiteImage}
                alt="Black Diamond Suite Interior"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group hover-lift">
              <img
                src={saunaImage}
                alt="Private Sauna"
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-light mb-8 text-center">
            המתחם החיצוני – פרטיות מוחלטת
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl mb-3">🏊‍♂️</div>
              <h4 className="font-medium mb-2">בריכה פרטית מחוממת</h4>
              <p className="text-sm text-muted-foreground">34° כל השנה, עטופה בדק עץ</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🧖‍♀️</div>
              <h4 className="font-medium mb-2">סאונה יבשה איכותית</h4>
              <p className="text-sm text-muted-foreground">חוויית רילקס מושלמת</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="font-medium mb-2">מטבח חוץ מקצועי</h4>
              <p className="text-sm text-muted-foreground">עם מנגל גז ומשטח שיש</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🛁</div>
              <h4 className="font-medium mb-2">מקלחת חוץ</h4>
              <p className="text-sm text-muted-foreground">במתחם החיצוני</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🌳</div>
              <h4 className="font-medium mb-2">נוף לחורש</h4>
              <p className="text-sm text-muted-foreground">שקט וטבע מרגיע</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-3">🪑</div>
              <h4 className="font-medium mb-2">פינות ישיבה מרובות</h4>
              <p className="text-sm text-muted-foreground">ערסל, מיטות שיזוף ופופים</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suite;
