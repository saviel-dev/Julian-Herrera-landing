
import React from 'react';

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Tecnología con Enfoque Humano
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-slide-up">
            Eficiente, escalable y a tu medida. Transformamos ideas en soluciones digitales 
            que realmente marcan la diferencia en tu negocio.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Proyectos Exitosos</div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfacción Cliente</div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
