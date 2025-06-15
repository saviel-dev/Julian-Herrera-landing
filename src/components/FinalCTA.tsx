
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock, CheckCircle2, Zap, Award, TrendingUp, Users, Phone } from 'lucide-react';

const FinalCTA = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: CheckCircle2, text: 'Consulta Gratuita', color: 'text-emerald-400' },
    { icon: Shield, text: 'Sin Compromiso', color: 'text-blue-400' },
    { icon: Clock, text: 'Respuesta 24h', color: 'text-yellow-400' },
    { icon: Award, text: 'Garantía Total', color: 'text-purple-400' }
  ];

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Proyectos Exitosos', color: 'from-emerald-400 to-green-500' },
    { icon: Users, value: '98%', label: 'Satisfacción Cliente', color: 'from-blue-400 to-cyan-500' },
    { icon: Zap, value: '24/7', label: 'Soporte Técnico', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M60 60l30-30v60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-left animate-slide-in-left">
            {/* Stars and rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-6 w-6 text-yellow-400 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }} 
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="font-semibold">4.9/5</span>
                <span>•</span>
                <span>500+ reseñas verificadas</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30 shadow-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Oferta Limitada - Solo Este Mes</span>
              <Zap className="h-4 w-4 text-yellow-400" />
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                ¿Listo para el
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Próximo Nivel?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
              Únete a más de <span className="text-cyan-400 font-semibold">500 empresas</span> que ya transformaron 
              su negocio con nuestras soluciones tecnológicas. 
              <span className="text-emerald-400 font-semibold"> Es tu momento de liderar el cambio.</span>
            </p>

            {/* Enhanced features grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <feature.icon className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 min-w-[280px] group"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-medium backdrop-blur-sm min-w-[280px] group border-2 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Agendar Llamada</span>
              </Button>
            </div>
            
            {/* Live status */}
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Equipo disponible ahora mismo</span>
              </div>
              <span>•</span>
              <span>Respuesta garantizada en menos de 1 hora</span>
            </div>
          </div>

          {/* Right side - Enhanced dashboard */}
          <div className="relative animate-slide-in-right">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-[2rem] blur-3xl transform rotate-3 animate-float scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl transform -rotate-2 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main dashboard container */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 z-10 border border-slate-700/50 hover:scale-105 transition-all duration-700">
              
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  <h3 className="text-white font-semibold text-xl">Panel de Resultados</h3>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats grid */}
              <div className="grid grid-cols-1 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white text-sm font-medium">{stat.label}</span>
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${stat.color} h-2 rounded-full animate-pulse`} 
                        style={{ width: '95%', animationDelay: `${index * 0.3}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Special offer banner */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl p-6 border border-emerald-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Award className="h-6 w-6 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-lg">Oferta Especial</span>
                  <Award className="h-6 w-6 text-emerald-400" />
                </div>
                <p className="text-white text-sm mb-3">
                  <span className="font-semibold">50% de descuento</span> en tu primer proyecto
                </p>
                <div className="text-xs text-emerald-300">
                  Válido solo durante este mes • Cupos limitados
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce-3d shadow-xl flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-bounce-3d shadow-xl" style={{ animationDelay: '0.5s' }}>
                <CheckCircle2 className="h-3 w-3 text-white m-auto mt-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
