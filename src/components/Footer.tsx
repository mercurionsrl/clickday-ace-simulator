
import { Link } from 'react-router-dom';
import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">
              ClickAce
            </Link>
            <p className="text-sm">
              La piattaforma di allenamento per i clickday INAIL che ti permette di migliorare 
              le tue prestazioni e aumentare le probabilità di successo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <span className="font-bold text-blue-400 hover:text-blue-300" style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "-0.5px" }}>
                  Telegram
                </span>
                <span className="sr-only">Telegram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Risorse */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Risorse</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guide" className="hover:text-white transition-colors">Guide e tutorial</Link>
              </li>
              <li>
                <Link to="/supporto" className="hover:text-white transition-colors">Supporto</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/calendario-clickday" className="hover:text-white transition-colors">Calendario Clickday</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legale */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legale</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy e Policy</Link>
              </li>
              <li>
                <Link to="/termini-servizio" className="hover:text-white transition-colors">Termini di Servizio</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 flex items-center text-sm font-medium hover:text-white transition-colors"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Torna su
            </button>
          </div>
          
          {/* Column 4 - Collaboration */}
          <div>
            <div className="flex items-center gap-2">
              <span>Progetto in collaborazione con</span>
              <img 
                src="/lovable-uploads/5129b4b6-db28-4e06-99a2-3c6a636cee0d.png" 
                alt="ATS Logo" 
                className="h-8 w-auto" 
              />
              <span className="font-medium">ATS - Consulenti Associati</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <p>&copy; {new Date().getFullYear()} ClickAce. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
