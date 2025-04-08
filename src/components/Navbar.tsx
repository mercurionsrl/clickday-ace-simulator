
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold heading-gradient">
              ClickAce
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-clickblue-600 transition-colors">
                Home
              </Link>
              <a href="#features" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-clickblue-600 transition-colors">
                Caratteristiche
              </a>
              <a href="#pricing" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-clickblue-600 transition-colors">
                Piani
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-clickblue-600 transition-colors">
                Contatti
              </a>
              <Button
                variant="outline"
                className="ml-4 text-clickblue-600 border-clickblue-500 hover:bg-clickblue-500 hover:text-white transition-colors"
                onClick={() => window.alert('Area Privata sarà disponibile presto!')}
              >
                Area Privata
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-clickblue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-clickblue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-clickblue-600"
              onClick={() => setIsOpen(false)}
            >
              Caratteristiche
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-clickblue-600"
              onClick={() => setIsOpen(false)}
            >
              Piani
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-clickblue-600"
              onClick={() => setIsOpen(false)}
            >
              Contatti
            </a>
            <Button
              variant="default"
              className="w-full mt-2 bg-clickblue-500 hover:bg-clickblue-600"
              onClick={() => {
                window.alert('Area Privata sarà disponibile presto!');
                setIsOpen(false);
              }}
            >
              Area Privata
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
