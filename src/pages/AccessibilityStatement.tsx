import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/config/contact";

const AccessibilityStatement = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/">
            <Button
              variant="outline"
              className="mb-8 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              חזרה לאתר
            </Button>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            הצהרת נגישות
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 font-light">
            בלק דיימונד | סוויטה אקסלוסיבית בגליל
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-white/90 leading-relaxed">
            <p>
              אנו ב<strong>"בלק דיימונד – סוויטה אקסלוסיבית בגליל"</strong> רואים חשיבות עליונה במתן שירות שוויוני לכלל הלקוחות ובשיפור הנגישות לאנשים עם מוגבלות. אנו משקיעים משאבים רבים בהנגשת האתר והפיכתו לנוח וידידותי לשימוש עבור כולם.
            </p>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">רמת הנגישות</h2>
              <p>
                האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג–2013. ההתאמות בוצעו לפי התקן הישראלי ת"י 5568 ברמת AA ובהתאם להנחיות WCAG 2.0.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">תיקונים והתאמות שבוצעו באתר</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>התאמה לדפדפנים נפוצים.</li>
                <li>תוכן ברור, מסודר והיררכי.</li>
                <li>התאמה לכל סוגי המסכים והרזולוציות.</li>
                <li>ניווט פשוט וברור.</li>
                <li>אפשרות להגדלת טקסט באמצעות Ctrl + גלגלת העכבר.</li>
                <li>ללא טקסט נע או מהבהב.</li>
                <li>טקסט חלופי (Alt) לתמונות.</li>
                <li>טפסים נגישים לקוראי מסך.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">רכיב נגישות באתר</h2>
              <p>
                באתר מוטמע תוסף נגישות (כגון UserWay), המאפשר:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>הגדלת טקסט</li>
                <li>שינוי ניגודיות</li>
                <li>הדגשת קישורים</li>
                <li>פונט קריא</li>
                <li>ועוד...</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">יצירת קשר בנושא נגישות</h2>
              <p>
                אנו פועלים באופן מתמיד לשיפור הנגישות. אם נתקלתם בבעיית נגישות או תרצו למסור הערה, נשמח לעמוד לרשותכם:
              </p>
              <ul className="list-none space-y-2 mr-4 mt-4">
                <li>טלפון: <a href={`tel:${contactInfo.phoneLink}`} className="text-primary hover:underline">{contactInfo.phoneDisplay}</a></li>
                <li>אימייל: <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">{contactInfo.email}</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;

