
import React from 'react';
import { CheckCircle2, Shield, Zap, Clock, Users, TrendingUp } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <div className="text-left animate-slide-in-left">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-emerald-400/30 shadow-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Tecnología de Vanguardia</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Tecnología con
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-in-left mt-2" style={{ animationDelay: '0.2s' }}>
                Enfoque Humano
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed animate-slide-in-left mb-12 max-w-2xl" style={{ animationDelay: '0.4s' }}>
              Cada línea de código, cada pixel de diseño, cada estrategia digital está 
              pensada para generar un <span className="text-cyan-400 font-semibold">impacto real</span> en tu negocio 
              y en las personas que lo usan.
            </p>

            {/* Enhanced Statistics Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              <div className="text-center lg:text-left group">
                <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-white font-semibold mb-1">Proyectos Exitosos</div>
                <div className="text-sm text-slate-400">En los últimos 5 años</div>
              </div>
              
              <div className="text-center lg:text-left group">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-white font-semibold mb-1">Satisfacción Cliente</div>
                <div className="text-sm text-slate-400">Según encuestas NPS</div>
              </div>
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                <span className="text-white font-medium">Resultados Garantizados</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-white font-medium">Seguridad Empresarial</span>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Section */}
          <div className="relative animate-slide-in-right">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-[2rem] blur-3xl transform rotate-3 animate-float scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-[2rem] blur-2xl transform -rotate-2 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main Dashboard Container */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 z-10 border border-slate-700/50 hover:scale-105 transition-all duration-700">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  <h3 className="text-white font-semibold text-lg">Sistema de Innovación</h3>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Enhanced Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Performance Metric */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl p-4 border border-emerald-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                    <span className="text-white text-sm font-medium">Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 mb-2">+247%</div>
                  <div className="text-xs text-emerald-300">Mejora promedio</div>
                </div>
                
                {/* Response Time */}
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">Respuesta</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">12m</div>
                  <div className="text-xs text-blue-300">Tiempo promedio</div>
                </div>
                
                {/* Security */}
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <span className="text-white text-sm font-medium">Seguridad</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-xs text-purple-300">Uptime garantizado</div>
                </div>
                
                {/* Team */}
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-5 w-5 text-orange-400" />
                    <span className="text-white text-sm font-medium">Equipo</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-xs text-orange-300">Soporte técnico</div>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Desarrollo en Progreso</span>
                  <span className="text-emerald-400 font-semibold">87%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full w-[87%] animate-pulse"></div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Optimización IA</span>
                  <span className="text-blue-400 font-semibold">94%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[94%] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
              
              {/* Floating Tech Elements */}
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

export default ValueProposition;
