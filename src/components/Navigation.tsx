
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">My</span>
              <span className="text-slate-900">Tec</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#servicios" 
                className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Servicios
              </a>
              <a 
                href="#beneficios" 
                className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Beneficios
              </a>
              <a 
                href="#testimonios" 
                className="text-slate-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                Testimonios
              </a>
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-medium"
              >
                Contacto
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a 
              href="#servicios" 
              className="block py-2 text-slate-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#beneficios" 
              className="block py-2 text-slate-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonios" 
              className="block py-2 text-slate-700 hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </a>
            <Button
              onClick={scrollToContact}
              className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
            >
              Contacto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
