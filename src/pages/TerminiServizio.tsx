
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TerminiServizio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Termini e Condizioni d'Uso</h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-sm text-gray-500 text-right">Ultimo aggiornamento: 21 maggio 2025</p>
              
              <p>
                Benvenuto su Clickace.it, un servizio offerto da:
              </p>
              
              <div className="pl-4 border-l-2 border-blue-100">
                <p>Mercurion Srl</p>
                <p>Via Cannicelle 79A</p>
                <p>84039 Teggiano (SA)</p>
                <p>P. IVA: 06161870651</p>
                <p>Email: mercurion.logistica@gmail.com</p>
                <p>Supporto Telegram (gruppo indicato sul canale): t.me/clickace</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. Oggetto del servizio</h2>
                <p>
                  Clickace.it è una piattaforma web progettata per aiutare gli utenti a migliorare la propria velocità e prontezza 
                  in vista del clickday del bando ISI INAIL, mediante l'utilizzo di simulazioni realistiche dell'ambiente e della procedura di invio.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. Accesso e registrazione</h2>
                <p>
                  L'accesso alla piattaforma può richiedere la registrazione con credenziali personali. L'utente è responsabile della veridicità 
                  dei dati forniti e della custodia delle proprie credenziali di accesso.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. Caratteristiche e costi del servizio</h2>
                <p>
                  Salvo ove diversamente specificato, le simulazioni offerte su Clickace.it sono a pagamento. I costi e le modalità di accesso ai 
                  diversi pacchetti o funzionalità sono di volta in volta comunicati per iscritto via mail direttamente con il contraente.
                </p>
                <p className="mt-2">
                  Eventuali funzionalità gratuite saranno segnalate come tali, ma l'utente accetta che la maggior parte delle simulazioni avanzate sono a pagamento.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. Modalità di pagamento</h2>
                <p>
                  I pagamenti possono essere effettuati tramite bonifico via mail con il supporto contattabile dall'apposita sezione del sito. 
                  Non è previsto alcun rimborso per l'accesso ai contenuti digitali acquistati, salvo nei casi previsti dalla legge.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">5. Limitazioni di responsabilità</h2>
                <p>
                  Clickace.it non è affiliato, sponsorizzato o approvato da INAIL. Il servizio ha scopo puramente simulativo e formativo. 
                  Nessun risultato è garantito, e l'uso della piattaforma non assicura l'ottenimento del contributo INAIL.
                </p>
                <p className="mt-2">
                  Mercurion Srl non è responsabile per eventuali malfunzionamenti del sito web o per danni diretti o indiretti derivanti dall'uso della piattaforma.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">6. Supporto e assistenza</h2>
                <p>
                  Per supporto tecnico o informazioni, gli utenti possono contattare l'azienda all'indirizzo email mercurion.logistica@gmail.com 
                  o tramite i gruppi indicati sul canale Telegram https://t.me/clickace.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">7. Proprietà intellettuale</h2>
                <p>
                  Tutti i contenuti presenti su Clickace.it (software, testi, grafiche, loghi) sono di proprietà di Mercurion Srl e non possono 
                  essere copiati, distribuiti o riprodotti senza autorizzazione scritta.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">8. Modifiche ai Termini</h2>
                <p>
                  Mercurion Srl si riserva il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni, pubblicando la versione 
                  aggiornata sul sito. L'uso continuato del servizio dopo la pubblicazione delle modifiche equivale all'accettazione delle stesse.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">9. Legge applicabile e foro competente</h2>
                <p>
                  I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il foro di Salerno, salvo quanto 
                  previsto dalla normativa a tutela dei consumatori.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TerminiServizio;
