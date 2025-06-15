
import { useEffect, useState } from 'react';
import { CheckCircle, Clock, Award, Shield, Zap, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Experiencia Certificada',
    description: 'Más de 5 años desarrollando soluciones tecnológicas exitosas',
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Clock,
    title: 'Atención 24/7',
    description: 'Soporte continuo para mantener tu negocio siempre operativo',
    gradient: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
  {
    icon: Zap,
    title: 'Soluciones Personalizadas',
    description: 'Cada proyecto adaptado específicamente a tus necesidades',
    gradient: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Rigurosos procesos de testing y control de calidad',
    gradient: 'from-green-400 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Heart,
    title: 'Enfoque Humano',
    description: 'Tecnología diseñada pensando en las personas que la usarán',
    gradient: 'from-red-400 to-rose-500',
    bgGradient: 'from-red-50 to-rose-50'
  },
  {
    icon: CheckCircle,
    title: 'Entrega Puntual',
    description: 'Cumplimos plazos sin comprometer la calidad del resultado',
    gradient: 'from-cyan-400 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50'
  }
];

const BenefitsSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.benefit-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-in-bottom">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Por Qué 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Elegirnos?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ventajas competitivas que nos convierten en tu mejor aliado tecnológico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-item group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer border border-white/50 card-3d ${
                visibleItems.includes(index) 
                  ? 'animate-rotate-in' 
                  : 'opacity-0 transform scale-95'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon Container with enhanced 3D effect */}
              <div className="relative mb-6">
                <div className={`flex items-center justify-center w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-full mx-auto shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 icon-3d`}>
                  <benefit.icon className="h-12 w-12 text-white" />
                </div>
                
                {/* Animated rings around icon */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute inset-2 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300" style={{ animationDelay: '0.2s' }}></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-3d transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-3d transition-opacity duration-300" style={{ animationDelay: '0.3s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
