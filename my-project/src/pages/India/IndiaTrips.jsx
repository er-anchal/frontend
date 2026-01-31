import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/Trips/Hero/HeroSection';
import ExploreIndiaSection from '../../components/Trips/Sections/ExploreIndiaSection';
import WhyWanderOnSection from '../../components/Trips/Sections/WhyWanderOnSection';
import FAQSection from '../../components/Trips/Sections/FAQSection';
import TestimonialsSection from '../../components/Trips/Sections/TestimonialsSection';
import ContactSection from '../../components/Trips/Sections/ContactSection';
import Footer from '../../components/Footer/Footer';

/**
 * Main India Trips page component
 * Assembles all sections in a clean, readable structure
 */
const IndiaTrips = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <HeroSection />

      {/* Explore Destinations */}
      <ExploreIndiaSection />

      {/* Why Choose WanderOn */}
      <WhyWanderOnSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndiaTrips;
