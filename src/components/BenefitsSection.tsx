
import { useEffect, useState } from 'react';
import { CheckCircle, Clock, Award, Shield, Zap, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Experiencia Certificada',
    description: 'Más de 5 años desarrollando soluciones tecnológicas exitosas'
  },
  {
    icon: Clock,
    title: 'Atención 24/7',
    description: 'Soporte continuo para mantener tu negocio siempre operativo'
  },
  {
    icon: Zap,
    title: 'Soluciones Personalizadas',
    description: 'Cada proyecto adaptado específicamente a tus necesidades'
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Rigurosos procesos de testing y control de calidad'
  },
  {
    icon: Heart,
    title: 'Enfoque Humano',
    description: 'Tecnología diseñada pensando en las personas que la usarán'
  },
  {
    icon: CheckCircle,
    title: 'Entrega Puntual',
    description: 'Cumplimos plazos sin comprometer la calidad del resultado'
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
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ventajas competitivas que nos convierten en tu mejor aliado tecnológico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-item text-center p-6 ${
                visibleItems.includes(index) 
                  ? 'animate-scale-in' 
                  : 'opacity-0 transform scale-95'
              }`}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 mx-auto animate-pulse-glow">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
