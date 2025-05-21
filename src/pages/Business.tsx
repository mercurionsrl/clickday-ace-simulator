
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building2, FileText, CheckCircle } from 'lucide-react';

const Business = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-20 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-4">
                SERVIZI PER AZIENDE
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Bando <span className="heading-gradient">ISI-INAIL</span> per le aziende
              </h1>
              <p className="text-lg text-gray-600">
                Scopri come la tua azienda può ottenere fondi attraverso il bando ISI-INAIL e come possiamo aiutarti a partecipare con successo.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Cos'è il bando ISI-INAIL?</h2>
                  <p className="mb-4 text-gray-700">
                    Il bando ISI-INAIL è un'iniziativa di finanziamento che mira a incentivare le imprese a realizzare progetti per il miglioramento delle condizioni di salute e sicurezza nei luoghi di lavoro.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Attraverso questo bando, l'INAIL eroga contributi a fondo perduto alle imprese che investono in progetti di miglioramento delle condizioni di sicurezza sul lavoro.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Vantaggi principali:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                        <span>Contributi a fondo perduto fino al 65% dell'investimento</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                        <span>Miglioramento della sicurezza dei lavoratori</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                        <span>Rinnovamento delle attrezzature aziendali</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="bg-clickblue-500 hover:bg-clickblue-600 text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contattaci per informazioni
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-clickblue-50 rounded-xl p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mr-4">
                        <Building2 className="h-6 w-6 text-clickblue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Come possiamo aiutarti?</h3>
                    </div>
                    
                    <p className="mb-6 text-gray-700">
                      La partecipazione al bando ISI-INAIL richiede competenze specifiche e un'accurata preparazione, soprattutto durante la fase di clickday che determina l'ordine cronologico delle domande.
                    </p>
                    
                    <h4 className="font-semibold mb-2">I nostri servizi includono:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-clickblue-600 mr-2 flex-shrink-0" />
                        <span>Preparazione e verifica della documentazione</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-clickblue-600 mr-2 flex-shrink-0" />
                        <span>Formazione intensiva per il clickday</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-clickblue-600 mr-2 flex-shrink-0" />
                        <span>Supporto tecnico durante tutte le fasi</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-clickblue-600 mr-2 flex-shrink-0" />
                        <span>Consulenza personalizzata per massimizzare le possibilità di successo</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
