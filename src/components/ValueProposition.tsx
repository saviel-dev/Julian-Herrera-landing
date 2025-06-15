
import React from 'react';

const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-primary to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              ✨ Tecnología de Vanguardia
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight">
              Tecnología con
              <span className="block text-accent">Enfoque Humano</span>
            </h2>
            
            <p className="text-xl opacity-90 leading-relaxed animate-slide-up mb-12 max-w-2xl">
              Cada línea de código, cada pixel de diseño, cada estrategia digital está 
              pensada para generar un impacto real en tu negocio y en las personas que lo usan.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/80 font-medium">Proyectos Exitosos</div>
                <div className="text-sm text-white/60 mt-1">En los últimos 5 años</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="text-5xl font-bold text-accent mb-2">98%</div>
                <div className="text-white/80 font-medium">Satisfacción Cliente</div>
                <div className="text-sm text-white/60 mt-1">Según encuestas NPS</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 font-medium">Soporte 24/7 disponible</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-white/90 font-medium">Actualizaciones automáticas</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-white/90 font-medium">Seguridad empresarial</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="text-white/90 font-medium">Escalabilidad garantizada</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="text-sm text-white/60 mb-2">Tiempo promedio de respuesta</div>
                <div className="text-3xl font-bold text-white">
                  <span className="text-accent">12</span> minutos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
