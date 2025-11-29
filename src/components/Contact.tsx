import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import Booking from "@/components/Booking";
import { contactInfo } from "@/config/contact";

const Contact = () => {
  return (
    <section id="contact" className="bg-black relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 4px 4px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      {/* White Banner Section - Full Width Edge to Edge */}
      <Reveal direction="fade-up" delay={0.1} width="100%">
        <div className="w-screen bg-white py-12 md:py-16 relative z-10" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-black">
            מוכנים <span className="text-gradient">לחוויה</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto font-light leading-relaxed">
            צרו קשר עכשיו והזמינו את השהייה המושלמת שלכם
          </p>
          </div>
        </div>
      </Reveal>

      <div className="section-padding container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Reveal direction="scale" delay={0.2} duration={0.6} width="100%">
            <a
                href={`tel:${contactInfo.phoneLink}`}
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 hover-lift text-center h-full flex flex-col items-center justify-center"
            >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">טלפון</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{contactInfo.phoneDisplay}</p>
            </a>
            </Reveal>

            <Reveal direction="scale" delay={0.3} duration={0.6} width="100%">
            <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 hover-lift text-center h-full flex flex-col items-center justify-center"
            >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">WhatsApp</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">שלחו הודעה</p>
            </a>
            </Reveal>

            <Reveal direction="scale" delay={0.4} duration={0.6} width="100%">
            <a
                href={`mailto:${contactInfo.email}`}
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-500 hover-lift text-center h-full flex flex-col items-center justify-center"
            >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">אימייל</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{contactInfo.email}</p>
              </a>
            </Reveal>
          </div>
        </div>

        {/* Booking Form Section - Outside White Banner */}
        <div className="mt-16">
          <Booking />
        </div>
      </div>
    </section>
  );
};

export default Contact;
