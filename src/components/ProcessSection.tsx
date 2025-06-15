
import { useEffect, useState } from 'react';
import { Search, FileText, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tus necesidades y objetivos específicos'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Propuesta',
    description: 'Diseñamos una solución personalizada para tu proyecto'
  },
  {
    icon: Code,
    number: '03',
    title: 'Desarrollo',
    description: 'Implementamos la solución con las mejores prácticas'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lanzamiento',
    description: 'Desplegamos y optimizamos tu solución digital'
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Soporte',
    description: 'Mantenimiento continuo y mejoras constantes'
  }
];

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.process-step');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un enfoque estructurado que garantiza resultados excepcionales
          </p>
        </div>

        <div className="relative">
          {/* Línea de conexión */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                data-index={index}
                className={`process-step text-center ${
                  visibleSteps.includes(index) 
                    ? 'animate-slide-up' 
                    : 'opacity-0 transform translate-y-10'
                }`}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
