
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ValueProposition from '@/components/ValueProposition';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-roboto">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ValueProposition />
      <TestimonialsSection />
      <ProcessSection />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
