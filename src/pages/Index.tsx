import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Suite from "@/components/Suite";
import Cabin from "@/components/Cabin";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Suite />
      <Cabin />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
