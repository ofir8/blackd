import { useState } from "react";
import { X, ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

// Import images - חצר ובריכה (Yard and Pool)
import pool1 from "@/assets/DSC08148.jpg";
import pool2 from "@/assets/DSC08152.jpg";
import pool3 from "@/assets/DSC08156.jpg";
import pool4 from "@/assets/DSC08177.jpg";
import pool5 from "@/assets/DSC08060.jpg";
import pool6 from "@/assets/DSC08052.jpg";

// Import images - סאונה (Sauna)
import sauna1 from "@/assets/DSC05631.jpg";
import sauna2 from "@/assets/DSC05634.jpg";
import sauna3 from "@/assets/DSC05637.jpg";
import sauna4 from "@/assets/DSC05628.jpg";

// Import images - פנים הסוויטה (Suite Interior) - כל השאר
import suite1 from "@/assets/DSC07918.jpg";
import suite2 from "@/assets/DSC07922.jpg";
import suite3 from "@/assets/DSC07928.jpg";
import suite4 from "@/assets/DSC07930.jpg";
import suite5 from "@/assets/DSC07934.jpg";
import suite6 from "@/assets/DSC07951.jpg";
import suite7 from "@/assets/DSC07961.jpg";
import suite8 from "@/assets/DSC07965.jpg";
import suite9 from "@/assets/DSC07976.jpg";
import suite10 from "@/assets/DSC07982.jpg";
import suite11 from "@/assets/DSC07984.jpg";
import suite12 from "@/assets/DSC07991.jpg";
import suite13 from "@/assets/DSC08004.jpg";
import suite14 from "@/assets/DSC08010.jpg";
import suite15 from "@/assets/DSC08025.jpg";
import suite16 from "@/assets/DSC08027.jpg";
import suite17 from "@/assets/DSC08030.jpg";
import suite18 from "@/assets/DSC08032.jpg";
import suite19 from "@/assets/DSC08038.jpg";
import suite20 from "@/assets/DSC08079.jpg";
import suite21 from "@/assets/DSC08083.jpg";
import suite22 from "@/assets/DSC08087.jpg";
import suite23 from "@/assets/DSC08157.jpg";
import suite24 from "@/assets/DSC08164.jpg";
import suite25 from "@/assets/DSC08167.jpg";

const allImages = [
  // חצר ובריכה (Yard and Pool) - Suite
  { src: pool1, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  { src: pool2, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  { src: pool3, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  { src: pool4, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  { src: pool5, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  { src: pool6, alt: "חצר ובריכה", category: "outdoor", type: "suite" },
  
  // סאונה (Sauna) - Suite
  { src: sauna1, alt: "סאונה", category: "sauna", type: "suite" },
  { src: sauna2, alt: "סאונה", category: "sauna", type: "suite" },
  { src: sauna3, alt: "סאונה", category: "sauna", type: "suite" },
  { src: sauna4, alt: "סאונה", category: "sauna", type: "suite" },
  
  // פנים הסוויטה (Suite Interior)
  { src: suite1, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite2, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite3, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite4, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite5, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite6, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite7, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite8, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite9, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite10, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite11, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite12, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite13, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite14, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite15, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite16, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite17, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite18, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite19, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite20, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite21, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite22, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite23, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite24, alt: "פנים הסוויטה", category: "interior", type: "suite" },
  { src: suite25, alt: "פנים הסוויטה", category: "interior", type: "suite" },
];

interface ImageGalleryProps {
  type?: "zimmer" | "suite";
}

const ImageGallery = ({ type }: ImageGalleryProps = { type: undefined }) => {
  const images = type ? allImages.filter(img => img.type === type) : allImages;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all"
    ? images
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-background relative overflow-x-hidden">
      <Reveal direction="fade-up" delay={0.1} width="100%">
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4 sm:mb-6">
            {type === "zimmer" ? (
              <>גלריית <span className="text-gradient">הצימר</span></>
            ) : type === "suite" ? (
              <>גלריית <span className="text-gradient">הסוויטה</span></>
            ) : (
              <>גלריית <span className="text-gradient">התמונות</span></>
            )}
          </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-6 sm:mb-12 px-4">
          הצצה לחווית האירוח היוקרתית שמחכה לכם
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {["all", "interior", "outdoor", "sauna"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 border",
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-primary/50 hover:text-primary"
              )}
            >
              {cat === "all" ? "הכל" :
                cat === "interior" ? "פנים הסוויטה" :
                  cat === "outdoor" ? "חצר ובריכה" : "סאונה"}
            </button>
          ))}
        </div>
      </div>
      </Reveal>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-1">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in overflow-hidden"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 text-white/70 hover:text-white transition-colors p-2 sm:p-4 hover:bg-white/10 rounded-full z-50"
          >
            <ChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>

          <div
            className="relative max-w-full sm:max-w-7xl max-h-[90vh] w-full px-4 sm:px-6 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="w-full h-full object-contain max-h-[75vh] sm:max-h-[85vh] rounded-sm shadow-2xl"
            />
            <p className="text-center text-white/80 mt-2 sm:mt-4 text-sm sm:text-lg font-light tracking-wide">
              {filteredImages[selectedImage].alt}
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-2 sm:p-4 hover:bg-white/10 rounded-full z-50"
          >
            <ChevronRight className="w-6 h-6 sm:w-10 sm:h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
