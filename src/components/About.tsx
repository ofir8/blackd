import { Sparkles, Heart, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "יוקרה ללא פשרות",
      description: "עיצוב מהפנט המשלב טוויסט שיקי עם אווירה פסטורלית",
    },
    {
      icon: Heart,
      title: "פרטיות מוחלטת",
      description: "מתחם מבודד עם כל השירותים שתצטרכו",
    },
    {
      icon: Star,
      title: "חוויה בלתי נשכחת",
      description: "כל פרט נבחר בקפידה ליצירת רגעים מושלמים",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            ברוכים הבאים ל-
            <span className="text-gradient"> Black Diamond</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            בלב החורש הגלילי, בין עצים מרשרשים ושקט שמרגישים בגוף — שוכן מתחם Black Diamond.
            שתי יחידות אירוח שעוצבו בקפידה רבה, המשלבות בין אלגנטיות מודרנית לחום כפרי.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card hover-lift border border-border/50 transition-all duration-500 hover:shadow-elegant animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            כאן, כל פרט נבחר בקפידה. כל אלמנט מעוצב. וכל רגע נועד לגרום לכם להרגיש 
            שאף אחד לא חשב עליכם ככה קודם. חופשה שקטה, מוקפדת, פרטית ומפנקת — 
            חופשה שממשיכה להדהד הרבה אחרי שחוזרים הביתה.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
