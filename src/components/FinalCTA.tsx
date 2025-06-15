
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Clock, CheckCircle2, Zap, Award, TrendingUp, Users, Phone, Sparkles, Rocket, Target } from 'lucide-react';

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
    <section className="py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-600/10"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Enhanced floating gradient orbs */}
      <div className="absolute top-20 right-32 w-40 h-40 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="text-left animate-slide-in-left">
            {/* Enhanced stars and rating */}
            <div className="flex items-center gap-6 mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-7 w-7 text-yellow-400 fill-current animate-pulse drop-shadow-lg" 
                    style={{ animationDelay: `${i * 150}ms` }} 
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 text-white/90 text-base font-medium">
                <span className="text-yellow-400 font-bold text-lg">4.9/5</span>
                <span className="text-white/50">•</span>
                <span>500+ reseñas verificadas</span>
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
            
            {/* Enhanced offer badge */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500/25 to-cyan-500/25 backdrop-blur-xl text-emerald-300 px-8 py-4 rounded-2xl text-base font-semibold mb-12 border border-emerald-400/40 shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="font-bold">Oferta Limitada - Solo Este Mes</span>
              <div className="flex items-center gap-1">
                <Zap className="h-5 w-5 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
                <Rocket className="h-4 w-4 text-cyan-400 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Enhanced main heading */}
            <div className="mb-12">
              <h2 className="text-6xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  ¿Listo para el
                </span>
              </h2>
              <div className="relative">
                <span className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-none block">
                  Próximo Nivel?
                </span>
                <div className="absolute -top-4 -right-8 animate-bounce-3d">
                  <Target className="h-12 w-12 text-yellow-400 drop-shadow-xl" />
                </div>
              </div>
            </div>
            
            {/* Enhanced description */}
            <div className="mb-14">
              <p className="text-2xl text-slate-200 leading-relaxed max-w-2xl font-light">
                Únete a más de <span className="text-cyan-400 font-bold text-3xl">500 empresas</span> que ya transformaron 
                su negocio con nuestras soluciones tecnológicas.
              </p>
              <p className="text-xl text-emerald-400 font-semibold mt-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Es tu momento de liderar el cambio.
              </p>
            </div>

            {/* Enhanced features grid */}
            <div className="grid grid-cols-2 gap-6 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-7 w-7 ${feature.color} drop-shadow-lg`} />
                  </div>
                  <span className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-8 mb-16">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-cyan-500/30 min-w-[320px] group rounded-2xl border-2 border-white/20"
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
                <span>Comenzar Ahora</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/15 px-12 py-6 text-xl font-semibold backdrop-blur-xl min-w-[320px] group hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 rounded-2xl shadow-xl"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Agendar Llamada</span>
              </Button>
            </div>
            
            {/* Enhanced live status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/80 text-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="font-medium">Equipo disponible ahora mismo</span>
              </div>
              <span className="text-white/40 hidden sm:block">•</span>
              <span className="font-medium">Respuesta garantizada en menos de 1 hora</span>
            </div>
          </div>

          {/* Enhanced right side dashboard */}
          <div className="relative animate-slide-in-right">
            {/* Enhanced background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-[3rem] blur-3xl transform rotate-3 animate-float scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-[3rem] blur-2xl transform -rotate-2 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[3rem] blur-xl transform rotate-1 animate-float scale-115" style={{ animationDelay: '1s' }}></div>
            
            {/* Enhanced main dashboard container */}
            <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-black/95 backdrop-blur-2xl rounded-[3rem] shadow-2xl p-10 z-10 border border-slate-600/50 hover:scale-105 transition-all duration-700 group">
              
              {/* Enhanced dashboard header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-5 h-5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    <div className="absolute inset-0 w-5 h-5 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
                  </div>
                  <h3 className="text-white font-bold text-2xl">Panel de Resultados</h3>
                  <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/50"></div>
                </div>
              </div>
              
              {/* Enhanced stats grid */}
              <div className="grid grid-cols-1 gap-8 mb-10">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 group/stat hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300 shadow-xl`}>
                          <stat.icon className="h-6 w-6 text-white drop-shadow-lg" />
                        </div>
                        <span className="text-white text-base font-semibold">{stat.label}</span>
                      </div>
                      <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-lg`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${stat.color} h-3 rounded-full animate-pulse shadow-lg`} 
                        style={{ 
                          width: '95%', 
                          animationDelay: `${index * 0.3}s`,
                          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced special offer banner */}
              <div className="bg-gradient-to-r from-emerald-500/25 to-cyan-500/25 rounded-2xl p-8 border border-emerald-500/40 text-center backdrop-blur-xl shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-bold text-2xl">Oferta Especial</span>
                  <Award className="h-8 w-8 text-emerald-400 animate-pulse" />
                </div>
                <p className="text-white text-lg mb-4 font-semibold">
                  <span className="text-2xl font-black text-emerald-400">50% de descuento</span> en tu primer proyecto
                </p>
                <div className="text-sm text-emerald-300 font-medium flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  Válido solo durante este mes • Cupos limitados
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl animate-bounce-3d shadow-2xl flex items-center justify-center">
                <Zap className="h-5 w-5 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl animate-bounce-3d shadow-2xl flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-float shadow-xl" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
