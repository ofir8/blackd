import { Link } from "react-router-dom";
import logo from "@/assets/icons/Logo_v1.webp";
import { contactInfo } from "@/config/contact";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo - Centered */}
          <div className="flex items-center justify-center">
            <img 
              src={logo} 
              alt="Black Diamond Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto" 
            />
          </div>
          
          {/* Details - Below Logo */}
          <div className="text-center text-sm text-secondary-foreground/70 space-y-2">
            <p>{contactInfo.address.hebrew}</p>
            <p>© {new Date().getFullYear()} Black Diamond. כל הזכויות שמורות.</p>
            
            {/* Links */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-secondary-foreground/20">
              <Link 
                to="/privacy-policy" 
                className="hover:text-primary transition-colors duration-300"
              >
                מדיניות פרטיות
              </Link>
              <span className="text-secondary-foreground/40">|</span>
              <Link 
                to="/accessibility-statement" 
                className="hover:text-primary transition-colors duration-300"
              >
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
