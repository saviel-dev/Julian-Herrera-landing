
import { useEffect, useState } from 'react';
import { Monitor, Smartphone, Globe, Palette, Headphones, Users } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión'
  },
  {
    icon: Smartphone,
    title: 'Software a Medida',
    description: 'Aplicaciones personalizadas que resuelven problemas específicos'
  },
  {
    icon: Globe,
    title: 'Marketing Digital',
    description: 'Estrategias digitales que aumentan tu visibilidad y ventas'
  },
  {
    icon: Palette,
    title: 'Diseño Gráfico',
    description: 'Identidad visual profesional que destaca tu marca'
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    description: 'Atención 24/7 para mantener tu tecnología funcionando'
  },
  {
    icon: Users,
    title: 'Consultoría',
    description: 'Asesoramiento experto para optimizar tus procesos digitales'
  }
];

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.service-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para todas tus necesidades tecnológicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-item bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group ${
                visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
