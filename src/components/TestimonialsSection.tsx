
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Award, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'TechStart',
    content: 'MyTec transformó completamente nuestra presencia digital. El equipo es excepcional y los resultados superaron nuestras expectativas.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    improvement: '+250% en ventas',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Director de Marketing',
    company: 'Innovate Co.',
    content: 'La atención al detalle y la calidad del trabajo de MyTec es impresionante. Recomiendo sus servicios sin dudarlo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    improvement: '+180% conversiones',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Creative Studio',
    content: 'Profesionales, puntuales y con una comunicación excelente. MyTec hizo realidad nuestra visión digital.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    improvement: '+95% satisfacción',
    color: 'from-purple-500 to-pink-600'
  }
];

const companyLogos = [
  { name: 'TechStart', icon: TrendingUp, color: 'text-emerald-500' },
  { name: 'Innovate Co.', icon: Award, color: 'text-blue-500' },
  { name: 'Creative Studio', icon: Star, color: 'text-purple-500' },
  { name: 'Digital Pro', icon: Users, color: 'text-orange-500' },
  { name: 'Future Labs', icon: TrendingUp, color: 'text-cyan-500' }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % companyLogos.length);
    }, 2500);

    return () => clearInterval(logoInterval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg">
            <Quote className="h-5 w-5" />
            <span>Testimonios Verificados</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Lo Que Dicen Nuestros
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mt-2">
              Clientes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimonios reales de empresas que transformaron su negocio con nuestras 
            <span className="text-blue-600 font-semibold"> soluciones tecnológicas</span>
          </p>
        </div>

        {/* Enhanced testimonial card */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-5`}></div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </button>

            <div className="relative text-center animate-fade-in" key={currentTestimonial}>
              {/* Quote icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current mx-1 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-2xl md:text-3xl text-gray-700 mb-10 italic leading-relaxed font-light max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mr-6 shadow-xl border-4 border-white"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${testimonials[currentTestimonial].color} bg-clip-text text-transparent`}>
                    {testimonials[currentTestimonial].improvement}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced companies section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm text-emerald-600 px-6 py-3 rounded-full text-sm font-semibold mb-12 border border-emerald-200/50 shadow-lg">
            <Award className="h-5 w-5" />
            <span>Empresas que Confían en Nosotros</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Más de <span className="text-blue-600">500+ Empresas</span> Exitosas
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Desde startups innovadoras hasta corporaciones establecidas, confiaron en nosotros para transformar su futuro digital
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {companyLogos.map((company, index) => {
                const IconComponent = company.icon;
                return (
                  <div
                    key={index}
                    className={`group text-center transition-all duration-500 cursor-pointer ${
                      index === logoIndex 
                        ? 'scale-110 transform' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${
                      index === logoIndex ? 'shadow-xl bg-gradient-to-br from-blue-50 to-purple-50' : ''
                    }`}>
                      <IconComponent className={`h-8 w-8 ${company.color} transition-all duration-300`} />
                    </div>
                    <div className={`text-sm font-semibold transition-all duration-300 ${
                      index === logoIndex ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-800'
                    }`}>
                      {company.name}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
