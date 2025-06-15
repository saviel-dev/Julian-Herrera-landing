
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock, CheckCircle2 } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-slate-900 to-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50l25-25v50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-6 w-6 text-yellow-400 fill-current mx-1" 
                style={{ animationDelay: `${i * 100}ms` }} 
              />
            ))}
            <span className="ml-3 text-white/80 text-sm">4.9/5 en satisfacción cliente</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight">
            ¿Listo para el
            <span className="block text-accent">Próximo Nivel?</span>
          </h2>
          
          <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Únete a más de 500 empresas que ya transformaron su negocio con nuestras 
            soluciones tecnológicas. Es tu momento de liderar el cambio.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-medium">Consulta Gratuita</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Sin Compromiso</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">Respuesta 24h</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-accent/25 min-w-[250px]"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-medium backdrop-blur-sm min-w-[250px]"
            >
              Agendar Llamada
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Equipo disponible para atenderte ahora mismo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
