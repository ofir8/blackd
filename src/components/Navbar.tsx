import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import blackIcon from "@/assets/icons/black-icon.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const hash = href.substring(1);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { href: "/", label: "ראשי" },
    { href: "/diamond-suite", label: "סוויטה דיימונד" },
    { href: "/diamond-zimmer", label: "צימר דיימונד" },
    { href: "/#amenities", label: "החוויה" },
    { href: "/#location", label: "מיקום" },
    { href: "/#contact", label: "צור קשר" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass-morphism shadow-lg py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 z-10"
          >
            <img 
              src={blackIcon} 
              alt="Black Diamond Icon" 
              className="h-6 w-auto brightness-0 invert" 
            />
            <span className={`text-xl md:text-2xl font-light tracking-wider transition-colors ${isScrolled ? "text-foreground" : "text-white"
              }`}>
              Black Diamond
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
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
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-light transition-all duration-300 relative
                    after:content-[''] after:absolute after:w-full after:scale-x-0 
                    after:h-0.5 after:bottom-0 after:left-0 after:bg-primary 
                    after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left
                    ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}
                  `}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right side - Button */}
          <div className="hidden lg:flex items-center gap-8 z-10">
            <a href="/#contact" onClick={(e) => handleAnchorClick(e, "/#contact")}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                הזמן עכשיו
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"
              }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 glass-morphism rounded-lg p-6 animate-fade-in">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleAnchorClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            ))}
            <a href="/#contact" onClick={(e) => {
              handleAnchorClick(e, "/#contact");
              setIsMobileMenuOpen(false);
            }} className="w-full">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                הזמן עכשיו
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
