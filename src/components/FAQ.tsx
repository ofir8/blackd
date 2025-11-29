import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const FAQ = () => {
  const faqs = [
    {
      question: "מה השעות של צ'ק-אין וצ'ק-אאוט?",
      answer:
        "צ'ק-אין מ-15:00 ואילך. צ'ק-אאוט עד 11:00. ניתן לתאם שעה אחרת בתיאום מראש לפי זמינות.",
    },
    {
      question: "האם יש פלטת שבת ומיחם?",
      answer:
        "כן, כל הצימרים והסוויטות כוללים פלטת שבת, מיחם, כלים חד-פעמיים ומעמד לנרות שבת. בית כנסת נמצא במרחק הליכה.",
    },
    {
      question: "מה כלול במחיר?",
      answer:
        "המחיר כולל לינה, ארוחת בוקר (טבעוני/צמחוני), פינוקים (יין, שוקולדים, מעדנים), חלוקי ספא, נעליים ממותגות ותמרוקים יוקרתיים.",
    },
    {
      question: "האם יש בריכה ושימוש חופשי?",
      answer:
        "כן, יש בריכה יוקרתית ואזור ספא עם סאונה לשימוש האורחים. השימוש כלול במחיר (בתיאום מראש לפי זמינות).",
    },
    {
      question: "האם המקום נגיש לנכים?",
      answer:
        "כן, אחד הצימרים נגיש לנכים עם נגישות מלאה ונוחות מותאמת. יש צורך לציין זאת בעת ההזמנה.",
    },
    {
      question: "מה המדיניות לגבי ביטולים?",
      answer:
        "ביטול עד 7 ימים לפני התאריך - החזר מלא. ביטול 3-7 ימים לפני - החזר 50%. פחות מ-3 ימים - ללא החזר. ניתן לשנות תאריך בנסיבות מסוימות.",
    },
    {
      question: "האם ניתן לארח אירועים?",
      answer:
        "כן, ניתן לארגן אירועים קטנים ואירועים מיוחדים. יש צורך לתאם מראש ולבדוק זמינות. אנו מציעים שירותי קייטרינג מגוונים.",
    },
    {
      question: "איך מגיעים למקום?",
      answer:
        "המקום ממוקם בנוחות עם חניה פרטית. פרטי הניווט המדויקים יישלחו לאחר ההזמנה.",
    },
    {
      question: "האם ניתן להזמין טיפולי ספא?",
      answer:
        "כן, אנו מציעים מגוון טיפולי ספא ועיסויים מקצועיים. ניתן להזמין מראש או בעת השהייה לפי זמינות.",
    },
    {
      question: "האם ניתן להביא ילדים?",
      answer:
        "המקום מותאם בעיקר לזוגות ולרומנטיקה. ניתן לברר לגבי ילדים לפי צימר/סוויטה ספציפיים.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-black relative overflow-hidden pb-12 md:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '35px 35px',
        }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      
      <div className="container mx-auto relative z-10">
        <Reveal direction="fade-up" delay={0.1} width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight text-center">
              שאלות <span className="text-gradient">נפוצות</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed text-center">
              כל התשובות לשאלות הנפוצות ביותר
            </p>
          </div>
        </Reveal>

        <Reveal direction="fade-up" delay={0.2} width="100%">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} direction="fade-up" delay={0.3 + index * 0.05} duration={0.5} width="100%">
                  <AccordionItem
                    value={`item-${index}`}
                    className="group bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 rounded-lg px-6 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-500 hover-lift w-full data-[state=open]:bg-white data-[state=open]:border-black/20 data-[state=open]:shadow-lg"
                  >
                    <AccordionTrigger className="text-right font-medium text-lg py-6 hover:no-underline group-hover:text-primary transition-colors duration-300 w-full data-[state=open]:text-black">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-right text-muted-foreground leading-relaxed pb-6 group-hover:text-foreground/80 transition-colors duration-300 data-[state=open]:text-black data-[state=open]:font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;

