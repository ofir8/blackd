import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            מוכנים <span className="text-gradient">לחוויה</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            צרו קשר עכשיו והזמינו את השהייה המושלמת שלכם
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:+972"
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-300 hover-lift text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">טלפון</h3>
              <p className="text-muted-foreground">חייגו עכשיו</p>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-300 hover-lift text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">שלחו הודעה</p>
            </a>

            <a
              href="mailto:info@blackdiamond.com"
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-elegant transition-all duration-300 hover-lift text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">אימייל</h3>
              <p className="text-muted-foreground">כתבו לנו</p>
            </a>
          </div>

          <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Black Diamond – כשאיכות, שלווה ועיצוב נפגשים
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              אם אתם מחפשים חופשה שקטה, מוקפדת, פרטית ומפנקת — 
              חופשה שממשיכה להדהד הרבה אחרי שחוזרים הביתה
            </p>
            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105"
            >
              הזמינו עכשיו
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
