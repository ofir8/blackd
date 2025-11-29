import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
            מדיניות פרטיות
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 font-light">
            בלק דיימונד | סוויטה אקסלוסיבית בגליל
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-white/90 leading-relaxed">
            <p>
              חברת "בלק דיימונד – סוויטה אקסלוסיבית בגליל" (להלן: "החברה") מכבדת את פרטיות המשתמשים באתר שהיא מפעילה ומנהלת. מטרת התנאים הבאים היא להסביר את מדיניות הפרטיות הנהוגה באתר, וכיצד משתמשת החברה במידע הנמסר על־ידי המשתמשים או הנאסף במהלך השימוש באתר.
            </p>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">1. כללי</h2>
              <p>
                בעת השימוש באתר נאסף מידע עליך. חלק מהמידע מזהה אותך באופן אישי – כגון שמך, פרטי התקשרות, מוצרים ושירותים שרכשת, אמצעי תשלום ועוד. מידע זה נמסר על־ידך ביודעין, לדוגמה בעת רישום לשירותים באתר.
              </p>
              <p>
                חלק מהמידע אינו מזהה אותך אישית והוא סטטיסטי ומצטבר – כגון עמודים שבהם צפית, הצעות שעניינו אותך, כתובת IP ועוד.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">2. רישום לשירותים</h2>
              <p>
                כאשר יידרשו פרטים אישיים בעת רישום לשירותים או רכישת מוצרים באתר, החברה תבקש רק את הפרטים הנחוצים לצורך אספקת השירותים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">3. מאגר המידע</h2>
              <p>
                המידע שנאסף יישמר במאגר המידע של החברה ויהיה באחריותה.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">4. שימוש במידע</h2>
              <p>
                החברה תעשה שימוש במידע שנאסף רק בהתאם למדיניות פרטיות זו או לפי הוראות הדין, ובכלל זה לצורך:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>מתן אפשרות להשתמש בשירותי האתר.</li>
                <li>שיפור והעשרת השירותים והתכנים באתר.</li>
                <li>שינוי או ביטול שירותים ותכנים קיימים.</li>
                <li>ביצוע עסקאות ורכישת מוצרים ושירותים.</li>
                <li>התאמת תכנים והצגת מודעות בהתאם לתחומי העניין שלך.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">5. מסירת מידע לצד שלישי</h2>
              <p>
                החברה לא תעביר מידע אישי לצדדים שלישיים, אלא במקרים הבאים:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>במקרה של מחלוקת משפטית המחייבת חשיפת פרטים.</li>
                <li>במקרה של ביצוע פעולות בניגוד לדין.</li>
                <li>אם יתקבל צו שיפוטי המחייב מסירת מידע.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">6. Cookies</h2>
              <p>
                האתר משתמש בקבצי Cookies לצורך תפעול תקין, איסוף נתונים סטטיסטיים, התאמה אישית ואבטחת מידע.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-light mb-4 mt-12">7. אבטחת מידע</h2>
              <p>
                החברה מפעילה אמצעי אבטחת מידע מתקדמים. עם זאת, אין אפשרות להבטיח הגנה מוחלטת מפני גישה בלתי־מורשית.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

