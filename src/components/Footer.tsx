
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Link rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Caratteristiche</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Piani</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contatti</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" onClick={() => window.alert('Area Privata sarà disponibile presto!')}>Area Privata</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Risorse</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Guide e Tutorial</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Supporto</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Calendario Clickday</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legale</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
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
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ClickAce. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
