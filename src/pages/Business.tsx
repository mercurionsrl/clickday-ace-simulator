import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building2, FileText, CheckCircle, HandCoins, HandHelping, Info, Users, Briefcase, Wallet, HelpingHand } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <span className="font-semibold text-clickblue-700"> Ricorda: paghi solo se il tuo progetto viene approvato!</span>
              </p>
              <div className="mt-8">
                <Link to="/supporto">
                  <Button className="bg-clickblue-500 hover:bg-clickblue-600 text-white">
                    Richiedi consulenza gratuita
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Cos'è il bando ISI-INAIL?</h2>
                  <p className="mb-4 text-gray-700">
                    Il bando ISI-INAIL è un'iniziativa di finanziamento che mette a disposizione delle aziende <span className="font-semibold">600 milioni di euro</span> per investimenti che migliorino le condizioni di salute e sicurezza nei luoghi di lavoro.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Attraverso questo bando, l'INAIL eroga <span className="font-semibold">contributi a fondo perduto fino al 65%</span> alle imprese che investono in progetti di miglioramento delle condizioni di sicurezza sul lavoro, per un massimo di <span className="font-semibold">130.000 euro</span>.
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
                        <span>Rinnovamento delle attrezzature aziendali (presse, centri di lavoro, robot, muletti)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                        <span>Importo massimo finanziabile di 130.000 euro</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Link to="/supporto">
                    <Button 
                      className="bg-clickblue-500 hover:bg-clickblue-600 text-white"
                    >
                      Contattaci per consulenza gratuita
                    </Button>
                  </Link>
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
                      <li className="flex items-start">
                        <HelpingHand className="h-5 w-5 text-clickblue-600 mr-2 flex-shrink-0" />
                        <span><Link to="/supporto" className="text-clickblue-600 hover:underline">Assistenza dedicata</Link> durante tutto il processo</span>
                      </li>
                    </ul>
                    
                    <div className="bg-clickgreen-100 p-4 rounded-lg mb-4">
                      <p className="text-clickgreen-800 font-medium text-sm">
                        Ricorda: la consulenza iniziale è completamente gratuita e paghi solo se il tuo progetto viene approvato!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chi può partecipare section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Chi può partecipare al bando ISI-INAIL</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-clickblue-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-clickblue-100 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-clickblue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Chi può richiedere i fondi</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>TUTTE le imprese, anche individuali iscritte alla Camera di commercio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Enti del terzo settore (per alcuni interventi specifici)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Imprese agricole e giovani agricoltori</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <Info className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Esclusioni</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-600 font-medium mr-2">•</span>
                      <span>Chi ha già ricevuto l'incentivo ISI Inail negli ultimi anni (con alcune eccezioni)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-medium mr-2">•</span>
                      <span>Aziende con condanne per omicidio colposo o lesioni personali colpose legate alla violazione delle norme sulla sicurezza</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-700">
                  Non sei sicuro se la tua azienda è idonea? Contattaci per una valutazione gratuita!
                </p>
                <Link to="/supporto">
                  <Button className="bg-clickblue-500 hover:bg-clickblue-600 text-white">
                    Richiedi consulenza
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Percentuali di finanziamento section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Percentuali di finanziamento</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-clickblue-50 to-white p-6 rounded-xl border border-clickblue-100 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-clickblue-100 flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-clickblue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Aziende generiche</h3>
                  <p className="text-3xl font-bold text-center text-clickblue-600 mb-3">65%</p>
                  <p className="text-center text-gray-600 mb-2">a fondo perduto</p>
                  <div className="border-t border-clickblue-100 pt-3 mt-3">
                    <p className="text-center font-medium">Minimo: 5.000,00 €</p>
                    <p className="text-center font-medium">Massimo: 130.000,00 €</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <HandHelping className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Sistemi di gestione</h3>
                  <p className="text-3xl font-bold text-center text-green-600 mb-3">80%</p>
                  <p className="text-center text-gray-600 mb-2">a fondo perduto</p>
                  <div className="border-t border-green-100 pt-3 mt-3">
                    <p className="text-center font-medium">Massimo: 130.000,00 €</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                      <HandCoins className="h-8 w-8 text-yellow-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Settore agricoltura</h3>
                  <div className="mb-1">
                    <p className="text-2xl font-bold text-center text-yellow-600">80%</p>
                    <p className="text-center text-gray-600 text-sm">giovani agricoltori</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-2xl font-bold text-center text-yellow-600">65%</p>
                    <p className="text-center text-gray-600 text-sm">imprese agricole</p>
                  </div>
                  <div className="border-t border-yellow-100 pt-3 mt-1">
                    <p className="text-center font-medium">Minimo: 5.000,00 €</p>
                    <p className="text-center font-medium">Massimo: 130.000,00 €</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-gray-700">
                  <span className="font-semibold">Non paghi nulla in anticipo!</span> La nostra consulenza iniziale è gratuita e le nostre commissioni si applicano solo se il tuo progetto viene finanziato.
                </p>
                <Link to="/supporto">
                  <Button className="bg-clickblue-500 hover:bg-clickblue-600 text-white">
                    Richiedi informazioni
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Interventi finanziabili section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Interventi finanziabili</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-clickblue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Progetti ammissibili</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Progetti di riduzione dei rischi tecnopatici</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Adozione di modelli organizzativi e di responsabilità sociale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Progetti per la riduzione dei rischi infortunistici</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Progetti di bonifica da materiali contenenti amianto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Progetti per micro e piccole imprese con specifici codici ATECO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Progetti per imprese operanti in agricoltura</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 p-3 bg-white rounded-lg border border-clickblue-100">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Nota:</span> Le imprese possono presentare un solo progetto per una sola unità produttiva e per una sola tipologia di progetto in una sola Regione o Provincia Autonoma.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-green-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-semibold mb-4">Spese ammissibili</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Spese direttamente necessarie alla realizzazione del progetto</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Spese accessorie o strumentali funzionali alla realizzazione del progetto</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Eventuali spese tecniche, entro i limiti precisati negli appositi allegati</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Spese non ammissibili</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-600 font-medium mr-2">•</span>
                        <span>Acquisizioni tramite locazione finanziaria (leasing)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-medium mr-2">•</span>
                        <span>Acquisto di beni usati</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-medium mr-2">•</span>
                        <span>Altre spese specificatamente indicate nel bando</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 font-medium mr-2">•</span>
                        <span>Progetti già realizzati o in corso alla data di chiusura dello sportello telematico</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-clickblue-100 p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-3">Hai domande sui requisiti o sulle spese ammissibili?</h3>
                <p className="mb-4">
                  Il nostro team di consulenti è disponibile per una consulenza gratuita e senza impegno. 
                  Ricorda che paghi solo se il tuo progetto viene approvato!
                </p>
                <Link to="/supporto">
                  <Button className="bg-clickblue-600 hover:bg-clickblue-700 text-white">
                    Richiedi consulenza gratuita
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Anticipazione e realizzazione section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-clickblue-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mr-4">
                      <Wallet className="h-6 w-6 text-clickblue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Anticipazione</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Per agevolazioni ≥ 30.000,00 €: anticipazione fino al 50% dell'importo (con fidejussione)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Per micro e piccole aziende (assi 4 e 5): anticipazione fino al 70%</span>
                    </li>
                  </ul>
                  
                  <div className="bg-white p-4 rounded-lg border border-clickblue-200 text-gray-700 text-sm">
                    <p>
                      Ti aiutiamo a valutare se richiedere un'anticipazione è conveniente per la tua azienda e a preparare tutta la documentazione necessaria.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-clickblue-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mr-4">
                      <Info className="h-6 w-6 text-clickblue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Realizzazione e tempistiche</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Realizzazione del progetto entro un anno dall'approvazione</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Assistenza durante tutto il processo di implementazione</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Supporto per eventuali richieste di proroghe o modifiche</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Il clickday section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">La fase cruciale: il clickday</h2>
              
              <div className="bg-yellow-50 p-6 rounded-xl mb-8 border border-yellow-200">
                <p className="text-center text-gray-700 mb-4">
                  Per ottenere il finanziamento, oltre ad avere tutti i requisiti, è fondamentale essere <span className="font-bold">rapidi durante la procedura di clickday</span>, che determina l'ordine cronologico delle domande.
                </p>
                <div className="flex items-center justify-center">
                  <div className="p-3 bg-white rounded-lg border border-yellow-300">
                    <p className="font-semibold text-center">
                      ClickAce e ATS ti mettono a disposizione i migliori esperti in ambito clickday e la procedura è inclusa nel costo che <span className="text-clickblue-600">paghi solo se passi!</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="md:w-1/2 text-center md:text-right">
                  <h3 className="text-xl font-semibold mb-4">Ti aiutiamo a vincere il clickday!</h3>
                  <p className="text-gray-700 mb-6">
                    La nostra esperienza e tecnologia ti danno un vantaggio competitivo decisivo nella fase di clickday, aumentando significativamente le tue possibilità di ottenere il finanziamento.
                  </p>
                  <Link to="/supporto">
                    <Button className="bg-clickblue-500 hover:bg-clickblue-600 text-white">
                      Contattaci subito
                    </Button>
                  </Link>
                </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="bg-clickblue-50 p-6 rounded-xl">
                    <p className="text-gray-700 mb-4">
                      ClickAce e ATS offrono un supporto completo durante tutto il processo del clickday per garantire le massime probabilità di successo.
                    </p>
                    <p className="font-medium text-clickblue-700">
                      Ricorda: paghi solo se il tuo progetto viene approvato!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Final Section */}
            <div className="bg-gradient-to-r from-clickblue-500 to-clickblue-600 rounded-2xl shadow-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Pronto a ottenere fino a 130.000€ per la tua azienda?</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti a ottenere i fondi ISI-INAIL. Ricorda: <span className="font-bold">paghi solo se il tuo progetto viene approvato!</span>
              </p>
              <Link to="/supporto">
                <Button className="bg-white hover:bg-gray-100 text-clickblue-600 font-bold px-8 py-3 text-lg">
                  Richiedi consulenza gratuita
                </Button>
              </Link>
              <p className="mt-4 text-sm">
                Il team di ClickAce e ATS è al tuo servizio per supportarti durante tutto il processo
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Business;
