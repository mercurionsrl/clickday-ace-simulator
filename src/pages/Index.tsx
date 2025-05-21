
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingCards from '@/components/PricingCards';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ATSPartnerBanner } from '@/components/ATSPartnerBanner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="bg-clickblue-50 py-8 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg mb-4">
              Sei interessato a partecipare come azienda al bando ISI-INAIL per ottenere fondi?
            </p>
            <Link to="/business">
              <Button className="bg-clickblue-500 hover:bg-clickblue-600">
                Clicca qui
              </Button>
            </Link>
          </div>
        </div>
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
