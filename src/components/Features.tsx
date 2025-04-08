
import { MousePointer, Clock, BarChart3, Brain, Bell, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 card-hover">
    <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-clickblue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: MousePointer,
      title: 'Simulazioni Realistiche',
      description: 'Interfaccia identica al sistema reale INAIL per un allenamento autentico.'
    },
    {
      icon: Clock,
      title: 'Misura del Tempo',
      description: 'Monitora con precisione millimetrica i tuoi tempi di risposta e reazione.'
    },
    {
      icon: BarChart3,
      title: 'Statistiche Dettagliate',
      description: 'Analisi approfondite per tracciare i tuoi progressi nel tempo.'
    },
    {
      icon: Brain,
      title: 'Training Personalizzato',
      description: 'Esercizi mirati per migliorare i tempi di risposta e la precisione.'
    },
    {
      icon: Bell,
      title: 'Notifiche Clickday',
      description: 'Resta aggiornato su date e orari dei prossimi clickday INAIL.'
    },
    {
      icon: Award,
      title: 'Certificati di Progresso',
      description: 'Riconoscimenti per i tuoi miglioramenti e progressi nel training.'
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-4">
            CARATTERISTICHE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia avanzata al servizio del tuo <span className="heading-gradient">successo</span>
          </h2>
          <p className="text-lg text-gray-600">
            Il nostro sistema offre strumenti professionali per prepararti al meglio alla competizione del clickday INAIL.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
