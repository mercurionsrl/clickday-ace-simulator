
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingCards from '@/components/PricingCards';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ATSPartnerBanner } from '@/components/ATSPartnerBanner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ATSPartnerBanner />
        <Features />
        <PricingCards />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
