
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Business = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-6">
              INAIL ISI per Aziende
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Aumenta le tue possibilità di successo nel Clickday INAIL
            </h1>
            <p className="text-xl text-gray-600">
              Soluzioni personalizzate per aziende che partecipano al bando ISI-INAIL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Perché scegliere ClickAce per la tua azienda?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-clickblue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-clickblue-600 font-bold">✓</span>
                  </div>
                  <p>Simulazioni personalizzate in base al bando specifico</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-clickblue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-clickblue-600 font-bold">✓</span>
                  </div>
                  <p>Formazione dedicata per il personale che parteciperà al clickday</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-clickblue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-clickblue-600 font-bold">✓</span>
                  </div>
                  <p>Assistenza tecnica per ottimizzare la configurazione hardware e software</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-clickblue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-clickblue-600 font-bold">✓</span>
                  </div>
                  <p>Report dettagliati sulle performance e suggerimenti di miglioramento</p>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Contattaci per un preventivo personalizzato</h3>
              <p className="text-gray-600 mb-6">
                Compila il modulo di contatto per ricevere informazioni sui nostri servizi per aziende
                e un preventivo personalizzato in base alle tue esigenze.
              </p>
              <Link to="/supporto">
                <Button className="w-full bg-clickblue-500 hover:bg-clickblue-600">
                  Richiedi informazioni <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">FAQ per aziende</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">Quanto tempo prima del clickday dovremmo iniziare la preparazione?</h3>
                <p className="text-gray-700">Consigliamo di iniziare almeno un mese prima per garantire un'adeguata formazione del personale e familiarità con il sistema.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">È possibile effettuare simulazioni personalizzate in base al nostro bando specifico?</h3>
                <p className="text-gray-700">Sì, offriamo simulazioni personalizzate basate sui requisiti specifici del bando a cui intendete partecipare.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Quali sono i costi per le aziende?</h3>
                <p className="text-gray-700">I costi variano in base alle esigenze specifiche. Contattateci per un preventivo personalizzato.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Business;
