
import { MousePointer, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block px-4 py-1 bg-clickblue-100 text-clickblue-800 rounded-full text-sm font-medium mb-6">
                INAIL Clickday Training System
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                <span className="heading-gradient">Allena la tua velocità </span>
                <span>per vincere il </span>
                <span className="heading-gradient">Clickday INAIL!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Preparati alla competizione con il sistema avanzato di simulazione per clickday. 
                Addestra i tuoi riflessi, migliora la tecnica e aumenta le tue probabilità di successo.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-clickblue-500 hover:bg-clickblue-600 text-white font-medium"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Inizia Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-clickblue-600 border-clickblue-500 hover:bg-clickblue-50"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contattaci
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="animate-fade-in-up opacity-0 relative" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="w-full h-64 bg-clickblue-50 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MousePointer className="h-12 w-12 text-clickblue-500 animate-bounce-light mx-auto mb-4" />
                      <span className="font-bold text-lg text-gray-800">Simulazione Clickday</span>
                    </div>
                  </div>
                  
                  {/* Fake clickday interface elements */}
                  <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded flex items-center px-3">
                    <div className="w-4 h-4 rounded-full bg-clickblue-400 mr-2"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button className="bg-clickblue-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                      Premi per inviare
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-clickblue-500 mr-2" />
                    <span className="text-sm text-gray-700">Simulazioni realistiche</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-clickgreen-500 mr-2" />
                    <span className="text-sm text-gray-700">Statistiche dettagliate</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-clickgreen-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-12 animate-pulse-light">
              NEW
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 card-hover">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={350} duration={2} />+
            </h3>
            <p className="text-gray-600">Utenti allenati</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 card-hover">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={100} duration={2} />%
            </h3>
            <p className="text-gray-600">Tasso di miglioramento</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 card-hover">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              <AnimatedCounter end={18} duration={2} /> s
            </h3>
            <p className="text-gray-600">Tempo medio di reazione migliorato</p>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 20L60 26.7C120 33.3 240 46.7 360 53.3C480 60 600 60 720 53.3C840 46.7 960 33.3 1080 26.7C1200 20 1320 20 1380 20H1440V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V20Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
