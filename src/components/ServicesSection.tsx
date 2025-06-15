
import { useEffect, useState } from 'react';
import { Monitor, Smartphone, Globe, Palette, Headphones, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión',
    features: ['React & Next.js', 'SEO optimizado', 'Analytics integrado']
  },
  {
    icon: Smartphone,
    title: 'Software a Medida',
    description: 'Aplicaciones personalizadas que resuelven problemas específicos',
    features: ['Arquitectura escalable', 'APIs robustas', 'Integración cloud']
  },
  {
    icon: Globe,
    title: 'Marketing Digital',
    description: 'Estrategias digitales que aumentan tu visibilidad y ventas',
    features: ['SEO/SEM', 'Social Media', 'Email Marketing']
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description: 'Experiencias digitales intuitivas y atractivas',
    features: ['Design System', 'Prototipado', 'Testing usuario']
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    description: 'Atención especializada para mantener tu tecnología funcionando',
    features: ['Monitoreo 24/7', 'Backup automático', 'Updates seguros']
  },
  {
    icon: Users,
    title: 'Consultoría',
    description: 'Asesoramiento estratégico para optimizar tus procesos digitales',
    features: ['Auditoría técnica', 'Roadmap digital', 'Capacitación']
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
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Monitor className="h-4 w-4" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Soluciones Tecnológicas
            <span className="block text-primary">Integrales</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desde la conceptualización hasta la implementación, ofrecemos servicios completos 
            para digitalizar y potenciar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-item group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-slate-100 ${
                visibleItems.includes(index) ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                Conocer más
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
