import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodations from "@/components/Accommodations";
import ImageGallery from "@/components/ImageGallery";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Accommodations />
      <ImageGallery />
      <Amenities />
      <Testimonials />
      <Location />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
