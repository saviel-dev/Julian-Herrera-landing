
import { useEffect, useState } from 'react';
import { Monitor, Smartphone, Globe, Palette, Headphones, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión',
    features: ['React & Next.js', 'SEO optimizado', 'Analytics integrado'],
    gradient: 'from-blue-500 to-purple-600',
    iconColor: 'text-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Software a Medida',
    description: 'Aplicaciones personalizadas que resuelven problemas específicos',
    features: ['Arquitectura escalable', 'APIs robustas', 'Integración cloud'],
    gradient: 'from-green-500 to-teal-600',
    iconColor: 'text-green-500'
  },
  {
    icon: Globe,
    title: 'Marketing Digital',
    description: 'Estrategias digitales que aumentan tu visibilidad y ventas',
    features: ['SEO/SEM', 'Social Media', 'Email Marketing'],
    gradient: 'from-purple-500 to-pink-600',
    iconColor: 'text-purple-500'
  },
  {
    icon: Palette,
    title: 'Diseño UX/UI',
    description: 'Experiencias digitales intuitivas y atractivas',
    features: ['Design System', 'Prototipado', 'Testing usuario'],
    gradient: 'from-orange-500 to-red-600',
    iconColor: 'text-orange-500'
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico',
    description: 'Atención especializada para mantener tu tecnología funcionando',
    features: ['Monitoreo 24/7', 'Backup automático', 'Updates seguros'],
    gradient: 'from-cyan-500 to-blue-600',
    iconColor: 'text-cyan-500'
  },
  {
    icon: Users,
    title: 'Consultoría',
    description: 'Asesoramiento estratégico para optimizar tus procesos digitales',
    features: ['Auditoría técnica', 'Roadmap digital', 'Capacitación'],
    gradient: 'from-indigo-500 to-purple-600',
    iconColor: 'text-indigo-500'
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
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
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
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-in-bottom">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200/50 backdrop-blur-sm">
            <Monitor className="h-5 w-5 text-blue-500" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Soluciones Tecnológicas
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Integrales
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Desde la conceptualización hasta la implementación, ofrecemos servicios completos 
            para digitalizar y potenciar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-item group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer border border-white/50 card-3d ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon Container with 3D Effect */}
              <div className="relative">
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg icon-3d`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-3d transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-3d transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-500">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                Conocer más
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
