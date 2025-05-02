
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-600 mb-6">
                La presente informativa è resa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 ("GDPR") 
                e descrive le modalità di trattamento dei dati personali degli utenti che accedono al sito e 
                utilizzano il simulatore di allenamento per il click day INAIL (di seguito, il "Servizio").
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Titolare del trattamento</h2>
              <p className="text-gray-600 mb-4">
                Il Titolare del trattamento è Mercurion srl, con sede in via cannicelle 79A, 
                contattabile all'indirizzo email mercurion.logistica@gmail.com
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Finalità del trattamento</h2>
              <p className="text-gray-600 mb-2">
                I dati personali dell'utente saranno trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">Navigazione sul presente sito internet e utilizzo del simulatore;</li>
                <li className="mb-2">Interazione con social network tramite eventuali plugin o collegamenti;</li>
                <li className="mb-2">Gestione delle richieste di contatto e invio di informazioni su richiesta dell'utente;</li>
                <li className="mb-2">Invio di comunicazioni promozionali via email (newsletter), previo consenso espresso;</li>
                <li className="mb-2">Adempimento di obblighi amministrativo-contabili e di legge;</li>
                <li className="mb-2">Selezionamento e contatto cliccatori;</li>
                <li className="mb-2">Rilevazione statistica anonima sull'utilizzo del simulatore per fini di miglioramento del servizio.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Tipi di dati trattati</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">
                  <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate e tempi di permanenza, 
                  raccolti in forma anonima tramite cookie tecnici e analitici.
                </li>
                <li className="mb-2">
                  <strong>Dati forniti volontariamente:</strong> nome, cognome, email, altri dati inseriti nel form di contatto o 
                  durante la registrazione al simulatore.
                </li>
                <li className="mb-2">
                  <strong>Dati relativi all'interazione con il simulatore:</strong> statistiche d'uso, tempi di reazione, 
                  performance nei test, raccolti in forma aggregata o pseudonimizzata.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Base giuridica del trattamento</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li className="mb-2">Esecuzione di un contratto o misure precontrattuali (es. richiesta di informazioni, utilizzo del simulatore).</li>
                <li className="mb-2">Adempimento di obblighi legali (es. contabilità).</li>
                <li className="mb-2">Consenso dell'interessato (per l'invio di newsletter).</li>
                <li className="mb-2">Legittimo interesse del Titolare (per finalità di sicurezza, miglioramento del servizio, statistica).</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Modalità del trattamento</h2>
              <p className="text-gray-600 mb-4">
                I dati sono trattati con strumenti elettronici e misure di sicurezza adeguate per garantirne la riservatezza, 
                l'integrità e la disponibilità. Non è previsto alcun processo decisionale automatizzato né profilazione individuale.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Destinatari dei dati</h2>
              <p className="text-gray-600 mb-4">
                I dati potranno essere comunicati a soggetti esterni incaricati (es. fornitori IT, servizi di hosting, consulenti), 
                nominati responsabili del trattamento ai sensi dell'art. 28 GDPR, e non saranno diffusi.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Trasferimento dati extra UE</h2>
              <p className="text-gray-600 mb-4">
                Se necessario, i dati potranno essere trasferiti verso Paesi extra UE solo in presenza di garanzie adeguate, 
                come clausole contrattuali standard approvate dalla Commissione Europea.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">8. Periodo di conservazione</h2>
              <p className="text-gray-600 mb-4">
                I dati saranno conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti e, 
                successivamente, secondo gli obblighi di legge. I dati raccolti per finalità di newsletter saranno conservati fino alla revoca del consenso.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">9. Diritti dell'interessato</h2>
              <p className="text-gray-600 mb-4">
                L'interessato può esercitare, in qualsiasi momento, i diritti previsti dagli articoli 15-22 del GDPR, tra cui: 
                accesso, rettifica, cancellazione, limitazione, opposizione al trattamento, portabilità dei dati, 
                e revoca del consenso, scrivendo a mercurion.logistica@gmail.com.
              </p>
              <p className="text-gray-600 mb-4">
                È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
