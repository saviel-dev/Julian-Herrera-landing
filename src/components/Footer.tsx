
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">MyTec</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos ideas en soluciones digitales excepcionales. 
              Tu socio tecnológico de confianza para el crecimiento empresarial.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                { Icon: Twitter, href: '#', color: 'hover:text-blue-400' },
                { Icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                { Icon: Instagram, href: '#', color: 'hover:text-pink-500' }
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-gray-400 ${color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { text: 'Servicios', href: '#servicios' },
                { text: 'Beneficios', href: '#beneficios' },
                { text: 'Testimonios', href: '#testimonios' },
                { text: 'Contacto', href: '#contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-primary" />
                <span>contacto@mytec.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3 text-primary" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MyTec. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Aviso de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
