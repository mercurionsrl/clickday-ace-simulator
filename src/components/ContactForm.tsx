import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo al più presto."
      });

      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          package: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-4">
            CONTATTACI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto ad <span className="heading-gradient">iniziare l'allenamento?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Compila il modulo per iniziare il tuo percorso di preparazione al clickday INAIL. 
            Saremo felici di rispondere a tutte le tue domande.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {submitted ? <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-clickgreen-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-clickgreen-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Richiesta inviata con successo!</h3>
                <p className="text-gray-600 mb-6">
                  Grazie per averci contattato. Ti risponderemo al più presto.
                </p>
                <Button onClick={() => setSubmitted(false)} className="bg-clickblue-500 hover:bg-clickblue-600">
                  Invia un'altra richiesta
                </Button>
              </div> : <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Il tuo nome" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="La tua email" required />
                </div>
                
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                    Pacchetto interessato
                  </label>
                  <select id="package" name="package" value={formData.package} onChange={handleChange} className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-clickblue-500 focus:outline-none focus:ring-1 focus:ring-clickblue-500" required>
                    <option value="">Seleziona un pacchetto</option>
                    <option value="base">Base (Gratuito)</option>
                    <option value="pro">Pro</option>
                    <option value="azienda">Azienda</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Scrivi qui la tua richiesta..." rows={4} />
                </div>
                
                <Button type="submit" className="w-full bg-clickblue-500 hover:bg-clickblue-600 text-white py-6" disabled={isSubmitting}>
                  {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                </Button>
              </form>}
          </div>
          
          {/* Business CTA instead of address */}
          <div className="flex flex-col space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 card-hover">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-clickblue-100 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-clickblue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@clickace.it</p>
                  <p className="text-gray-600">support@clickace.it</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-clickblue-300 transition-all hover:shadow-xl">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-clickblue-100 flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-clickblue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Per Aziende</h4>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">Sei interessato a partecipare come azienda al bando ISI-INAIL per ottenere fondi? Scopri la nostra consulenza gratuita.</p>
              
              <Link to="/business">
                <Button className="w-full bg-clickblue-500 hover:bg-clickblue-600">
                  Scopri di più
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 p-6 bg-clickblue-50 rounded-xl border border-clickblue-100">
              <h4 className="text-lg font-semibold mb-4">Perché sceglierci</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Oltre 350 utenti hanno migliorato le loro prestazioni</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Assistenza tecnica sempre disponibile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Simulazioni aggiornate ad ogni nuova edizione INAIL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;