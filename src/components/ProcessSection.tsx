
import { useEffect, useState } from 'react';
import { Search, FileText, Code, Rocket, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tus necesidades y objetivos específicos',
    detail: 'Evaluación completa de tu situación actual',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Propuesta',
    description: 'Diseñamos una solución personalizada para tu proyecto',
    detail: 'Estrategia detallada y plan de implementación',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Code,
    number: '03',
    title: 'Desarrollo',
    description: 'Implementamos la solución con las mejores prácticas',
    detail: 'Código limpio, escalable y optimizado',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lanzamiento',
    description: 'Desplegamos y optimizamos tu solución digital',
    detail: 'Deploy seguro y monitoreo continuo',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    icon: CheckCircle,
    number: '05',
    title: 'Soporte',
    description: 'Mantenimiento continuo y mejoras constantes',
    detail: 'Acompañamiento post-lanzamiento garantizado',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  }
];

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
            }, index * 200);
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
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Cpath d='M50 50l25-25v50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200/50 shadow-lg">
            <Target className="h-5 w-5" />
            <span>Metodología Probada</span>
            <Zap className="h-4 w-4 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Nuestro Proceso de
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Trabajo
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un enfoque estructurado y transparente que garantiza 
            <span className="text-purple-600 font-semibold"> resultados excepcionales</span> en cada proyecto
          </p>
        </div>

        <div className="relative">
          {/* Enhanced connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 transform -translate-y-1/2 z-0 rounded-full shadow-lg"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 transform -translate-y-1/2 z-10 rounded-full animate-pulse"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-20">
            {steps.map((step, index) => (
              <div
                key={index}
                data-index={index}
                className={`process-step group cursor-pointer ${
                  visibleSteps.includes(index) 
                    ? 'animate-slide-up' 
                    : 'opacity-0 transform translate-y-10'
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`relative transition-all duration-500 ${
                  hoveredStep === index ? 'transform -translate-y-4' : ''
                }`}>
                  {/* Enhanced card container */}
                  <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:scale-105`}>
                    {/* Background pattern */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-700 shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    {/* Icon container */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <step.icon className="h-10 w-10 text-white" />
                      
                      {/* Floating particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/50 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                        {step.description}
                      </p>
                      
                      <p className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                        {step.detail}
                      </p>
                    </div>
                    
                    {/* Hover effect arrow */}
                    <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                      <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-purple-300 to-blue-300 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para Comenzar tu Proyecto?
            </h3>
            <p className="text-gray-600 mb-6">
              Cada paso está diseñado para maximizar el éxito de tu inversión tecnológica
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Sin costo inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
