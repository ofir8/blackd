import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-light tracking-wider">Black Diamond</span>
          </div>
          
          <div className="text-center md:text-right text-sm text-secondary-foreground/70">
            <p>כפר ורדים, גליל מערבי</p>
            <p className="mt-2">© {new Date().getFullYear()} Black Diamond. כל הזכויות שמורות.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
