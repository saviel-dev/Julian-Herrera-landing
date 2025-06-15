
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">MyTec</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-primary transition-colors duration-200">Servicios</a>
              <a href="#beneficios" className="text-gray-700 hover:text-primary transition-colors duration-200">Beneficios</a>
              <a href="#testimonios" className="text-gray-700 hover:text-primary transition-colors duration-200">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary transition-colors duration-200">Contacto</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-primary">Servicios</a>
            <a href="#beneficios" className="block px-3 py-2 text-gray-700 hover:text-primary">Beneficios</a>
            <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-primary">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-primary">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
