
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            ¿Listo para Transformar tu Negocio?
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed animate-slide-up">
            Únete a más de 500 empresas que ya confían en MyTec para sus soluciones tecnológicas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Contáctanos Hoy Mismo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="text-sm opacity-90">
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Respuesta en menos de 24 horas
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-sm font-medium">✓ Consulta Gratuita</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="text-sm font-medium">✓ Sin Compromiso</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-sm font-medium">✓ Presupuesto Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
