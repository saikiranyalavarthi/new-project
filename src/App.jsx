import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";
import HowItWorks from "./Components/HowItWorks";
import Reviews from "./Components/Reviews";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <HowItWorks/>
      <Reviews/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;
