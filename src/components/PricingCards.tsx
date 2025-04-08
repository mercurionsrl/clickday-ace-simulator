
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingFeature {
  title: string;
  available: boolean;
}

interface PricingTier {
  name: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  description: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
}

const PricingCards = () => {
  const [annual, setAnnual] = useState(false);
  
  const tiers: PricingTier[] = [
    {
      name: 'Base',
      monthlyPrice: 'Gratis',
      annualPrice: 'Gratis',
      description: 'Inizia ad allenarti con il piano gratuito.',
      features: [
        { title: '40 simulazioni gratuite', available: true },
        { title: 'Misura del tempo di risposta', available: true },
        { title: 'Statistiche di base', available: true },
        { title: 'Interfaccia clickday simulata', available: true },
        { title: 'Training personalizzato', available: false },
        { title: 'Supporto prioritario', available: false },
      ],
      cta: 'Inizia Gratis'
    },
    {
      name: 'Pro',
      monthlyPrice: 79,
      annualPrice: 790,
      description: 'Il piano ideale per prepararsi al clickday.',
      features: [
        { title: 'Simulazioni illimitate', available: true },
        { title: 'Misura del tempo di risposta', available: true },
        { title: 'Statistiche avanzate', available: true },
        { title: 'Interfaccia clickday simulata', available: true },
        { title: 'Training personalizzato', available: true },
        { title: 'Supporto prioritario', available: false },
      ],
      cta: 'Sottoscrivi Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 129,
      annualPrice: 1290,
      description: 'Soluzione completa per professionisti.',
      features: [
        { title: 'Simulazioni illimitate', available: true },
        { title: 'Misura del tempo di risposta', available: true },
        { title: 'Statistiche avanzate', available: true },
        { title: 'Interfaccia clickday simulata', available: true },
        { title: 'Training personalizzato', available: true },
        { title: 'Supporto prioritario', available: true },
      ],
      cta: 'Contattaci'
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-4">
            PIANI E PREZZI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scegli il piano <span className="heading-gradient">più adatto</span> alle tue esigenze
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Abbiamo creato piani di allenamento diversi per soddisfare ogni necessità di preparazione al clickday.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={cn("mr-3", !annual && "font-medium text-clickblue-600")}>Mensile</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition",
                  annual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("ml-3", annual && "font-medium text-clickblue-600")}>Annuale <span className="text-xs text-green-600 font-medium">(risparmia 20%)</span></span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={cn(
                "rounded-2xl border overflow-hidden transition-all duration-300",
                tier.popular ? 
                  "border-clickblue-500 shadow-xl shadow-clickblue-100 scale-105 z-10 my-4 md:my-0" : 
                  "border-gray-200 shadow-lg"
              )}
            >
              {tier.popular && (
                <div className="bg-clickblue-500 py-1 text-white text-center text-sm font-medium">
                  Più popolare
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-500 mb-6">{tier.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {typeof (annual ? tier.annualPrice : tier.monthlyPrice) === 'number' ? 
                      `€${(annual ? tier.annualPrice : tier.monthlyPrice)}` : 
                      (annual ? tier.annualPrice : tier.monthlyPrice)}
                  </span>
                  {typeof (annual ? tier.annualPrice : tier.monthlyPrice) === 'number' && (
                    <span className="text-gray-500 ml-1">/{annual ? 'anno' : 'mese'}</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      {feature.available ? (
                        <Check className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={cn(
                        "text-sm",
                        feature.available ? "text-gray-700" : "text-gray-400"
                      )}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={cn(
                    "w-full py-6",
                    tier.popular ? 
                      "bg-clickblue-500 hover:bg-clickblue-600 text-white" : 
                      "bg-white hover:bg-gray-50 text-clickblue-600 border border-clickblue-500"
                  )}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
