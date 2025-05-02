
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Cookie Policy</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 mb-6">
                Questa Cookie Policy descrive l'uso dei cookie da parte del sito web ClickAce gestito da Mercurion srl, 
                e fornisce informazioni su come l'utente può gestirli.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Cosa sono i cookie</h2>
              <p className="text-gray-600 mb-4">
                I cookie sono piccoli file di testo che un sito web invia al browser dell'utente per migliorare 
                l'esperienza di navigazione, fornire funzionalità avanzate, raccogliere dati statistici e, 
                in alcuni casi, offrire pubblicità mirata.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Tipologie di cookie utilizzati</h2>
              <p className="text-gray-600 mb-2">
                <strong>a) Cookie tecnici (necessari)</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Questi cookie sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente. 
                Permettono, ad esempio:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">la navigazione tra le pagine;</li>
                <li className="mb-2">l'accesso all'area riservata;</li>
                <li className="mb-2">l'utilizzo del simulatore per l'allenamento al click day INAIL.</li>
              </ul>
              
              <p className="text-gray-600 mb-2">
                <strong>b) Cookie analitici (statistici)</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Utilizziamo cookie analitici, anche di terze parti (es. Google Analytics), per raccogliere informazioni 
                aggregate e anonime sull'uso del sito (numero di visitatori, pagine visitate, durata delle sessioni, 
                uso del simulatore) al fine di migliorarne prestazioni e usabilità.
              </p>
              <p className="text-gray-600 mb-4">
                Richiedono il consenso dell'utente, a meno che non siano anonimizzati (es. IP mascherato e nessuna 
                condivisione con terze parti).
              </p>
              
              <p className="text-gray-600 mb-2">
                <strong>c) Cookie di profilazione e remarketing</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Questi cookie tracciano la navigazione dell'utente per creare profili e mostrare annunci pubblicitari 
                personalizzati, anche su altri siti web.
              </p>
              <p className="text-gray-600 mb-2">
                Utilizziamo, ad esempio:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">Google Ads Remarketing: per mostrare annunci su Google o siti partner in base alle visite precedenti dell'utente;</li>
                <li className="mb-2">Meta Pixel (Facebook/Instagram): per analizzare le azioni degli utenti e offrire pubblicità targettizzata sui social;</li>
                <li className="mb-2">Altri strumenti di tracciamento pubblicitario (es. LinkedIn Insight Tag).</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Vengono installati solo previo consenso esplicito dell'utente, tramite il banner di consenso.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Gestione del consenso</h2>
              <p className="text-gray-600 mb-4">
                Al primo accesso al sito, viene mostrato un banner che:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">informa della presenza di cookie;</li>
                <li className="mb-2">consente di accettare tutti i cookie;</li>
                <li className="mb-2">permette di rifiutare i cookie non necessari;</li>
                <li className="mb-2">consente la personalizzazione delle preferenze.</li>
              </ul>
              <p className="text-gray-600 mb-4">
                L'utente può in qualsiasi momento modificare o revocare il proprio consenso tramite il link "Gestisci cookie" 
                presente in fondo a ogni pagina.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Come disabilitare i cookie dal browser</h2>
              <p className="text-gray-600 mb-4">
                L'utente può anche gestire i cookie tramite le impostazioni del browser. Di seguito alcuni link utili:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-clickblue-600 hover:text-clickblue-800" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
                <li className="mb-2">Firefox: <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" className="text-clickblue-600 hover:text-clickblue-800" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a></li>
                <li className="mb-2">Edge: <a href="https://support.microsoft.com/it-it/help/4027947" className="text-clickblue-600 hover:text-clickblue-800" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/it-it/help/4027947</a></li>
                <li className="mb-2">Safari: <a href="https://support.apple.com/it-it/HT201265" className="text-clickblue-600 hover:text-clickblue-800" target="_blank" rel="noopener noreferrer">https://support.apple.com/it-it/HT201265</a></li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Trasferimento dati extra UE</h2>
              <p className="text-gray-600 mb-4">
                Alcuni cookie di terze parti (es. Google, Meta) potrebbero comportare il trasferimento dei dati verso 
                Paesi extra UE. In tal caso, il trattamento avverrà nel rispetto del GDPR e delle clausole contrattuali 
                standard approvate dalla Commissione Europea.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Contatti</h2>
              <p className="text-gray-600 mb-4">
                Per ogni informazione sul trattamento dei dati o sull'uso dei cookie, è possibile scrivere a: mercurion.logistica@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
