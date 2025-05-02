
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Mail, CheckCircle } from 'lucide-react';

const Supporto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Richiesta di supporto inviata!",
        description: "Ti risponderemo al più presto.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nome: '',
          email: '',
          oggetto: '',
          messaggio: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="heading-gradient">Supporto</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hai bisogno di aiuto con la piattaforma ClickAce? Compilando il form sottostante il nostro team di supporto ti risponderà al più presto.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-clickgreen-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-clickgreen-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Richiesta inviata con successo!</h3>
                <p className="text-gray-600 mb-6">
                  Grazie per averci contattato. Ti risponderemo al più presto all'indirizzo email fornito.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="bg-clickblue-500 hover:bg-clickblue-600"
                >
                  Invia un'altra richiesta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-clickblue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-clickblue-600" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Il tuo nome"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="La tua email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="oggetto" className="block text-sm font-medium text-gray-700 mb-1">
                    Oggetto
                  </label>
                  <Input
                    id="oggetto"
                    name="oggetto"
                    value={formData.oggetto}
                    onChange={handleChange}
                    placeholder="Oggetto del messaggio"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio
                  </label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivi il problema o la richiesta..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-clickblue-500 hover:bg-clickblue-600 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia richiesta di supporto'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Supporto;
