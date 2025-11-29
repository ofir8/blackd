import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ImageGallery from "@/components/ImageGallery";
import { Reveal } from "@/components/Reveal";
import {
    Users, Maximize, Bed, Bath, Utensils, Wind, Tv, Wifi, Coffee, Flame, Sun, Waves,
    Armchair, Refrigerator, Microwave, ChefHat, Droplets, Shirt, Footprints,
    Trees, Sofa, Thermometer
} from "lucide-react";
import suiteHero from "@/assets/DSC08032.jpg";
import suiteInterior from "@/assets/DSC07930.jpg";
import saunaImage from "@/assets/DSC08030.jpg";

// Amenities Section - Minimalistic Blocks
const AmenitiesSection = ({ amenities }: { amenities: any }) => {
    const sections = [
        { title: "חדר שינה", icon: Bed, items: amenities.bedroom },
        { title: "חדר רחצה", icon: Bath, items: amenities.bathroom },
        { title: "מטבח", icon: Utensils, items: amenities.kitchen },
        { title: "סלון", icon: Tv, items: amenities.living },
        { title: "מתחם חוץ צמוד", icon: Sun, items: amenities.outdoor }
    ];

    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
                {/* Sections - Minimalistic blocks */}
                <div className="space-y-8 max-w-6xl mx-auto">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-white border border-black/10 rounded-lg p-6 md:p-8 hover:border-black/20 transition-colors">
                            {/* Icon and Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 rounded-lg bg-black/5">
                                    <section.icon className="w-5 h-5 text-black" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-light text-black">
                                    {section.title}
                                </h3>
                            </div>
                            
                            {/* Items - Clean grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {section.items.map((item: any, i: number) => (
                                    <div 
                                        key={i} 
                                        className="flex items-center gap-2 text-black/70 text-sm py-1.5"
                                    >
                                        <item.icon className="w-4 h-4 flex-shrink-0 text-black/50" />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DiamondSuite = () => {
    const amenities = {
        bedroom: [
            { icon: Bed, label: "מיטה זוגית קווין סייז (160)" },
            { icon: Bed, label: "מזרן אורטופדי memory foam" },
            { icon: Shirt, label: "ארון בגדים + תליה" },
            { icon: Bath, label: "אמבטיה stand alone בנישה ייעודית" },
            { icon: Wind, label: "מזגן" },
        ],
        bathroom: [
            { icon: Droplets, label: "מקלחון" },
            { icon: Shirt, label: "חלוקי רחצה" },
            { icon: Droplets, label: "תמרוקים" },
            { icon: Footprints, label: "נעלי ספא" },
            { icon: Bath, label: "שירותי אורחים" },
            { icon: Shirt, label: "מגבות רחצה" },
        ],
        kitchen: [
            { icon: Coffee, label: "מכונת קפה (טוחנת, מקציף חלב)" },
            { icon: ChefHat, label: "כלי בישול" },
            { icon: Microwave, label: "מיקרוגל" },
            { icon: Utensils, label: "מטבחון ללא בישול" },
            { icon: Coffee, label: "קומקום חשמלי" },
            { icon: Flame, label: "פלטת שבת + מייחם" },
            { icon: Refrigerator, label: "מקרר בינוני" },
            { icon: Utensils, label: "בר ישיבה / סעידה" },
        ],
        living: [
            { icon: Tv, label: 'טלויזיה חכמה 65 אינץ\'' },
            { icon: Sofa, label: "ספה" },
            { icon: Flame, label: "קמין חשמלי" },
            { icon: Wifi, label: "Hot + Netflix" },
            { icon: Wind, label: "מזגן" },
        ],
        outdoor: [
            { icon: Utensils, label: "פינת אוכל" },
            { icon: Thermometer, label: "סאונה יבשה" },
            { icon: Waves, label: "בריכה מחוממת (עד 34 מעלות, 5.5/2.5)" },
            { icon: Flame, label: "בר-בי-קיו גז" },
            { icon: Droplets, label: "מקלחת חוץ" },
            { icon: Armchair, label: "פינת ישיבה" },
            { icon: ChefHat, label: "מטבח חיצוני עם שיש וכיור" },
            { icon: Sun, label: "ערסל נדנדה" },
            { icon: Sun, label: "מיטות שיזוף" },
            { icon: Trees, label: "מדשאה" },
        ],
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 parallax"
                    style={{
                        backgroundImage: `url(${suiteHero})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
                </div>

                <div className="relative z-10 text-center text-white p-4 w-full flex flex-col items-center justify-center">
                    <Reveal delay={0.2}>
                        <h1 className="luxury-heading mb-6 drop-shadow-2xl">
                            סוויטה <span className="text-gradient font-normal">דיימונד</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="luxury-subheading max-w-2xl mx-auto drop-shadow-lg">
                            יוקרה, פרטיות ועיצוב מוקפד
                        </p>
                    </Reveal>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-gentle-bounce text-white/50">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto mb-2" />
                    <span className="text-xs tracking-[0.2em] uppercase">גלה עוד</span>
                </div>
            </section>

            {/* Description */}
            <section className="section-padding container mx-auto">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-light mb-6">קצת על <span className="text-gradient">הסוויטה</span></h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                בלאק דיימונד היא סוויטה זוגית שמחולקת לחלל מרכזי שבו סלון ומטבחון, ואזור שינה ורחצה.
                                באזור השינה יש מיטה זוגית רחבה עם מזרן אורטופדי ייחודי, באזור הרחצה אמבט וינטג' יפהפה,
                                ולהשלמת החוויה דאגו לכם כאן לחלוקים ממותגים ונעלי ספא.
                                יש כאן טלוויזיה גדולה, קמין גז לחורף, ומטבחון עם מכונת קפה מקצועית שטוחנת פולים במקום.
                            </p>
                        </Reveal>
                    </div>

                    <div className="pt-12 border-t border-white/5">
                        <Reveal>
                            <h3 className="text-3xl font-light mb-6 text-primary">מתחם החוץ</h3>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                מתחם החוץ של הסוויטה הוא פרטי ורחב. בכניסה תחכה לכם מקלחת חוץ, סאונה יבשה מפנקת
                                ולא רחוק ממנה תמצאו בריכה מחוממת שקועה בתוך במת דק ובתוכה ספסל זרמים מובנה.
                                באזור המטבח החיצוני מחכה לכם עמדת מנגל גז איכותית עם משטח שיש רחב וכיור.
                                מגוון פינות ישיבה, פופים, ופינות אוכל פזורות ברחבי החצר.
                                התחושה כאן היא פסטורלית, עם נוף לעצים ולחורש שמייצר אינטימיות, וקונטרסט מעניין לעיצוב הפנים המוקפד.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <ImageGallery type="suite" />

            {/* Amenities Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-black">מה <span className="text-black">בסוויטה</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 border border-black/10">
                                <Users className="w-4 h-4 text-black" />
                                <span className="text-base font-medium text-black">מתאים ל-2 אורחים</span>
                            </div>
                        </div>
                    </Reveal>

                    <AmenitiesSection amenities={amenities} />
                </div>
            </section>

            {/* Contact */}
            <Contact />

            <Footer />
        </div>
    );
};

export default DiamondSuite;
