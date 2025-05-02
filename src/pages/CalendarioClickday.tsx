
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Calendar } from '@/components/ui/calendar';
import { CalendarCheck, Calendar as CalendarIcon } from 'lucide-react';

const CalendarioClickday = () => {
  // Data for the roadmap
  const roadmapSteps = [
    {
      id: 1,
      title: "Chiusura domande",
      date: "30 maggio 2025",
      confirmed: true,
      description: "Data ultima per la presentazione delle domande di accesso al contributo."
    },
    {
      id: 2,
      title: "Pubblicazione \"Regole tecniche\" Clickday",
      date: "Data non ancora rilasciata",
      confirmed: false,
      description: "INAIL pubblicherà le regole tecniche per la partecipazione al clickday."
    },
    {
      id: 3,
      title: "Inizio periodo acquisizione codici identificativi",
      date: "Data non ancora rilasciata",
      confirmed: false,
      description: "Periodo durante il quale sarà possibile ottenere i codici identificativi necessari per la partecipazione al clickday."
    },
    {
      id: 4,
      title: "Giorno del clickday",
      date: "Data non ancora rilasciata",
      confirmed: false,
      description: "Il giorno in cui avverrà il clickday ufficiale. Preparati ad essere il più veloce!"
    },
    {
      id: 5,
      title: "Pubblicazione graduatorie provvisorie",
      date: "Data non ancora rilasciata",
      confirmed: false,
      description: "INAIL pubblicherà le graduatorie provvisorie dei beneficiari."
    },
    {
      id: 6,
      title: "Pubblicazione graduatorie definitive",
      date: "Data non ancora rilasciata",
      confirmed: false,
      description: "Pubblicazione delle graduatorie definitive dopo l'esame di eventuali ricorsi."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="heading-gradient">Calendario Clickday</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consulta le date importanti relative al clickday INAIL e prepara la tua strategia per essere pronto al momento giusto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-3 bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CalendarIcon className="mr-2 h-6 w-6 text-clickblue-500" />
                Calendario
              </h2>
              <Calendar 
                mode="single"
                showOutsideDays={true}
                className="rounded-md border w-full"
              />
            </div>
            <div className="md:col-span-2 bg-clickblue-50 p-6 rounded-xl shadow-md border border-clickblue-100">
              <h3 className="text-xl font-semibold mb-4">Promemoria</h3>
              <p className="text-gray-700 mb-4">
                Ricordati di preparare tutti i documenti necessari con anticipo e di esercitarti con la nostra piattaforma per migliorare la tua velocità.
              </p>
              <div className="bg-white p-4 rounded-lg border border-clickblue-200">
                <p className="font-medium text-clickblue-700">Prossima data importante:</p>
                <p className="text-lg font-bold text-clickblue-800">30 maggio 2025 - Chiusura domande</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <CalendarCheck className="h-8 w-8 text-clickblue-500 mr-3" />
              <h2 className="text-2xl font-bold">Roadmap Clickday INAIL</h2>
            </div>
            
            <div className="relative">
              {roadmapSteps.map((step, index) => (
                <div key={step.id} className="mb-12 relative">
                  {/* Timeline connector */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-0.5 bg-gray-200"></div>
                  )}
                  
                  {/* Step */}
                  <div className="flex">
                    {/* Step indicator */}
                    <div className={`relative flex items-center justify-center w-10 h-10 rounded-full shrink-0 
                      ${step.confirmed ? 'bg-clickgreen-500' : 'bg-clickblue-200'}`}>
                      <span className="text-white font-bold">{step.id}</span>
                    </div>
                    
                    {/* Step content */}
                    <div className="ml-6 flex-1">
                      <div className={`text-lg font-semibold 
                        ${step.confirmed ? 'text-clickgreen-700' : 'text-clickblue-800'}`}>
                        {step.title}
                      </div>
                      
                      <div className={`mt-1 text-base font-medium 
                        ${step.confirmed ? 'text-clickgreen-600' : 'text-gray-500'}`}>
                        {step.date}
                      </div>
                      
                      <div className="mt-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarioClickday;
