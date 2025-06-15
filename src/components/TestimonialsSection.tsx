
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'TechStart',
    content: 'MyTec transformó completamente nuestra presencia digital. El equipo es excepcional y los resultados superaron nuestras expectativas.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Director de Marketing',
    company: 'Innovate Co.',
    content: 'La atención al detalle y la calidad del trabajo de MyTec es impresionante. Recomiendo sus servicios sin dudarlo.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Creative Studio',
    content: 'Profesionales, puntuales y con una comunicación excelente. MyTec hizo realidad nuestra visión digital.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

const companyLogos = [
  'TechStart', 'Innovate Co.', 'Creative Studio', 'Digital Pro', 'Future Labs'
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % companyLogos.length);
    }, 2000);

    return () => clearInterval(logoInterval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios reales de empresas que confiaron en nosotros
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="text-center animate-fade-in" key={currentTestimonial}>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Empresas que Confían en Nosotros
          </h3>
          
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className={`text-2xl font-bold text-gray-400 transition-all duration-500 ${
                  index === logoIndex ? 'text-primary scale-110' : 'hover:text-gray-600'
                }`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
