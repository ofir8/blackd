import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "בית" },
    { href: "#suite", label: "סוויטת Black Diamond" },
    { href: "#cabin", label: "הצימר" },
    { href: "#amenities", label: "שירותים" },
    { href: "#location", label: "מיקום" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-morphism shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
          >
            <Sparkles className="w-6 h-6 text-primary transition-transform group-hover:rotate-12" />
            <span className={`text-xl md:text-2xl font-light tracking-wider transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Black Diamond
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light transition-all duration-300 relative
                  after:content-[''] after:absolute after:w-full after:scale-x-0 
                  after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                  after:origin-bottom-right after:transition-transform after:duration-300 
                  hover:after:scale-x-100 hover:after:origin-bottom-left
                  ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}
                `}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              הזמן עכשיו
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 glass-morphism rounded-lg p-6 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              הזמן עכשיו
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
