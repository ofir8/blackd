import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ImageGallery from "@/components/ImageGallery";
import { Reveal } from "@/components/Reveal";
import {
    Users, Maximize, Bed, Bath, Utensils, Wind, Tv, Wifi, Coffee, Flame, Sun, Waves,
    Armchair, Refrigerator, Microwave, ChefHat, Droplets, Shirt, Footprints,
    Trees, Sofa
} from "lucide-react";
import heroImage from "@/assets/DSC08152.jpg";
import zimmerExterior from "@/assets/DSC05631.jpg";

// Amenities Section - Minimalistic Blocks
const AmenitiesSection = ({ amenities }: { amenities: any }) => {
    const sections = [
        { title: "מתחם חוץ פרטי", icon: Sun, items: amenities.outdoor },
        { title: "סלון", icon: Tv, items: amenities.living },
        { title: "מטבחון", icon: Utensils, items: amenities.kitchen },
        { title: "חדר רחצה", icon: Bath, items: amenities.bathroom },
        { title: "אזור שינה זוגי", icon: Bed, items: amenities.bedroom }
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

const DiamondZimmer = () => {
    const amenities = {
        outdoor: [
            { icon: Waves, label: "ג'קוזי-ספא סופט טאב" },
            { icon: Flame, label: "בר-בי-קיו פחמים" },
            { icon: Armchair, label: "פינת ישיבה מקורה" },
            { icon: Sun, label: "ערסל נדנדה" },
            { icon: Trees, label: "מתחם חוץ פרטי" },
        ],
        living: [
            { icon: Tv, label: 'טלויזיה חכמה 45 אינץ\'' },
            { icon: Sofa, label: "ספה" },
            { icon: Sun, label: "מרפסת צמודה" },
            { icon: Wifi, label: "Yes" },
            { icon: Wind, label: "מזגן" },
        ],
        kitchen: [
            { icon: Flame, label: "כיריים חשמליות (בישול קל)" },
            { icon: Refrigerator, label: "מקרר קטן" },
            { icon: Coffee, label: "מכונת קפה ומקציף חלב" },
            { icon: ChefHat, label: "כלי בישול" },
            { icon: Microwave, label: "מיקרוגל" },
            { icon: Coffee, label: "פינת קפה ותה" },
            { icon: Utensils, label: "פינת אוכל" },
            { icon: Coffee, label: "קומקום חשמלי" },
        ],
        bathroom: [
            { icon: Droplets, label: "מקלחון" },
            { icon: Droplets, label: "תמרוקים" },
            { icon: Bath, label: "שירותי אורחים" },
            { icon: Shirt, label: "מגבות רחצה" },
        ],
        bedroom: [
            { icon: Bed, label: "מיטה זוגית קווין סייז (160)" },
            { icon: Bed, label: "מזרן אורטופדי" },
            { icon: Shirt, label: "ארון בגדים + תליה" },
            { icon: Wind, label: "מזגן" },
            { icon: Armchair, label: "2 כורסאות נפתחות למיטת יחיד" },
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
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
                </div>

                <div className="relative z-10 text-center text-white p-4 w-full flex flex-col items-center justify-center">
                    <Reveal delay={0.2}>
                        <h1 className="luxury-heading mb-6 drop-shadow-2xl">
                            דיימונד <span className="text-gradient font-normal">צימר</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="luxury-subheading max-w-2xl mx-auto drop-shadow-lg">
                            חופשה כפרית פסטורלית בעיצוב מודרני
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
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-light mb-8">קצת על <span className="text-gradient">הצימר</span></h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-muted-foreground leading-relaxed font-light">
                            צימר לזוג או משפחה קטנה, באווירה כפרית פסטורלית, ובעיצוב מודרני ביתי.
                            בצימר יש אזור שינה להורים, ושתי כורסאות יחיד שנפתחות למיטות יחיד.
                            יש כאן מטבחון לבישול קל עם פינת אוכל, וחדר רחצה מעוצב ומאובזר.
                            מתחם החוץ מאוד נעים, וכולל פרגולה עם ג'קוזי סופט טאב מפנק, ערסל נדנדה, פינת ישיבה, ועמדת מנגל גז.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="inline-block glass-card px-8 py-4 rounded-full mt-8 text-primary border-primary/20 hover:bg-primary/10 transition-colors cursor-default">
                            ארוחת בוקר בתוספת תשלום
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Gallery */}
            <ImageGallery type="zimmer" />

            {/* Amenities Grid */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-black">מה <span className="text-black">בצימר</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 border border-black/10">
                                <Users className="w-4 h-4 text-black" />
                                <span className="text-base font-medium text-black">מתאים ל-4 אורחים</span>
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

export default DiamondZimmer;
