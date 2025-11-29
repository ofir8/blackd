import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/config/contact";

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-[9998] w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="צור קשר ב-WhatsApp"
      style={{ position: 'fixed' }}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;

