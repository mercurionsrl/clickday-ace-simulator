
import { MousePointer, Clock, BarChart3, MessageSquare, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon: Icon, title, description, button }: { icon: any, title: string, description: string, button?: React.ReactNode }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 card-hover">
    <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-clickblue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {button && button}
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
      icon: MessageSquare,
      title: 'Domande Dinamiche',
      description: 'Le domande variano per numero, modalità e contenuto ad ogni simulazione.'
    },
    {
      icon: Users,
      title: 'Gruppo Telegram',
      description: 'Resta aggiornato su tutte le date e gli orari del Clickday tramite il canale Telegram di clickace.',
      button: (
        <Button
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => window.open("https://t.me/clickace", "_blank")}
        >
          Entra nel gruppo
        </Button>
      )
    },
    {
      icon: Award,
      title: 'Possibilità di essere selezionati',
      description: 'Il team di ClickAce potrebbe selezionarti per diventare un proprio cliccatore se i tuoi risultati sono molto positivi.'
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

        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
            <img src="/lovable-uploads/5129b4b6-db28-4e06-99a2-3c6a636cee0d.png" alt="ATS Logo" className="h-12 w-auto" />
            <p className="text-gray-700 font-medium">Progetto in collaborazione con <span className="font-semibold">ATS - Consulenti Associati</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
