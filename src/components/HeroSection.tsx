import { ArrowRight, Play, CheckCircle2, Sparkles, Laptop, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce-3d"></div>
      <div className="absolute top-32 right-32 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce-3d" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-32 left-32 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce-3d" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left animate-slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium border border-emerald-200/50 backdrop-blur-sm shadow-lg">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span className="font-semibold">+500 proyectos exitosos</span>
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              <span className="animate-slide-in-left">Soluciones</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Tecnológicas
              </span>
              <span className="block text-2xl lg:text-3xl font-normal text-slate-600 mt-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                que impulsan tu negocio
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              Transformamos ideas en experiencias digitales excepcionales. 
              Desarrollo web, software personalizado y estrategias que generan resultados reales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 btn-microsoft rounded-2xl border-0"
              >
                <span className="flex items-center gap-3">
                  Comenzar proyecto
                  <ArrowRight className="h-6 w-6" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm bg-white/80"
              >
                <Play className="mr-3 h-6 w-6 text-blue-500" />
                Ver casos de éxito
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="flex items-center gap-8 text-sm text-slate-500 animate-slide-in-left" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">98% satisfacción cliente</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="font-medium">Soporte 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Premium Laptop Visual */}
          <div className="relative animate-slide-in-right perspective-container">
            <div className="relative transform-3d">
              {/* Multiple layered background gradients for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-[3rem] blur-3xl transform rotate-6 animate-float scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-[3rem] blur-2xl transform -rotate-3 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-[3rem] blur-xl transform rotate-12 animate-float scale-95" style={{ animationDelay: '1s' }}></div>
              
              {/* Premium laptop container with enhanced design */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] shadow-2xl p-6 z-10 card-3d hover:scale-105 transition-all duration-700 border border-slate-700/50">
                {/* Laptop lid with Apple-style design */}
                <div className="bg-gradient-to-br from-slate-800 to-black rounded-t-2xl p-1 mb-2 shadow-inner">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-t-xl p-6 relative overflow-hidden">
                    {/* Screen bezel */}
                    <div className="bg-black rounded-xl p-3 shadow-2xl relative">
                      {/* Screen content with enhanced video display */}
                      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-lg p-8 h-64 flex items-center justify-center relative overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(59,130,246,0.1)_70%)] animate-float"></div>
                        
                        {/* Central video icon with glow effect */}
                        <div className="relative z-30 group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity"></div>
                          <Video className="h-28 w-28 text-white relative z-10 animate-pulse drop-shadow-2xl" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl animate-float"></div>
                        </div>
                        
                        {/* Enhanced animated UI elements */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
                          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="absolute bottom-8 left-6 right-6">
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse w-3/4"></div>
                          </div>
                        </div>
                        
                        {/* Floating code particles */}
                        <div className="absolute top-16 left-8 w-2 h-2 bg-cyan-400 rounded-full animate-bounce-3d opacity-70"></div>
                        <div className="absolute top-24 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce-3d opacity-70" style={{ animationDelay: '0.4s' }}></div>
                        <div className="absolute bottom-16 left-12 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce-3d opacity-70" style={{ animationDelay: '0.8s' }}></div>
                        
                        {/* Subtle code lines overlay */}
                        <div className="absolute bottom-12 left-6 right-6 space-y-1 opacity-20">
                          <div className="h-0.5 bg-white rounded w-4/5 animate-pulse"></div>
                          <div className="h-0.5 bg-white rounded w-3/5 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-0.5 bg-white rounded w-5/6 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop base with keyboard and trackpad */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-b-2xl p-4 shadow-inner">
                  {/* Enhanced keyboard design */}
                  <div className="grid grid-cols-14 gap-0.5 mb-4 px-2">
                    {Array.from({ length: 70 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-2 bg-gradient-to-b from-slate-600 to-slate-700 rounded-sm shadow-sm hover:from-slate-500 hover:to-slate-600 transition-colors"
                        style={{ 
                          width: i % 14 === 0 || i % 14 === 13 ? '0.75rem' : '0.5rem',
                          animationDelay: `${i * 0.01}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Premium trackpad with subtle glow */}
                  <div className="w-24 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl mx-auto shadow-inner relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Large background laptop icon with better positioning */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0 scale-150">
                <Laptop className="h-96 w-96 text-slate-600 animate-float" style={{ animationDelay: '1.5s' }} />
              </div>
              
              {/* Enhanced floating elements with better gradients */}
              <div className="absolute -top-6 -left-6 w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full animate-bounce-3d shadow-2xl"></div>
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 rounded-full animate-bounce-3d shadow-2xl" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-6 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-400 to-cyan-400 rounded-full animate-bounce-3d shadow-2xl" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute -bottom-4 -right-6 w-9 h-9 bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-500 rounded-full animate-bounce-3d shadow-2xl" style={{ animationDelay: '0.9s' }}></div>
              
              {/* Additional ambient light effects */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
