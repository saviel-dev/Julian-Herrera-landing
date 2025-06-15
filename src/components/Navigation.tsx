
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-white">My</span>
              <span className="text-blue-400">Tec</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <a 
                href="#servicios" 
                className="text-slate-200 hover:text-white hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm tracking-wide"
              >
                Servicios
              </a>
              <a 
                href="#beneficios" 
                className="text-slate-200 hover:text-white hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm tracking-wide"
              >
                Beneficios
              </a>
              <a 
                href="#testimonios" 
                className="text-slate-200 hover:text-white hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm tracking-wide"
              >
                Testimonios
              </a>
              
              {/* Separator */}
              <div className="w-px h-6 bg-slate-700 mx-2"></div>
              
              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium text-sm shadow-lg border border-blue-500/20 transition-all duration-200 hover:shadow-blue-500/25 hover:shadow-xl"
              >
                Contacto
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white hover:bg-slate-800/50 p-2 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a 
              href="#servicios" 
              className="block py-3 px-4 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#beneficios" 
              className="block py-3 px-4 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonios" 
              className="block py-3 px-4 text-slate-200 hover:text-white hover:bg-slate-800/50 font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg border border-blue-500/20"
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
