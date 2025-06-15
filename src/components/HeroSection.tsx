
import { ArrowRight, Play, CheckCircle2, Sparkles, Laptop, Video, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';
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
          
          {/* Video Player Screen */}
          <div className="relative animate-slide-in-right perspective-container">
            <div className="relative transform-3d">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-[2rem] blur-3xl transform rotate-3 animate-float scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-[2rem] blur-2xl transform -rotate-2 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Video Player Container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] shadow-2xl p-3 z-10 card-3d hover:scale-105 transition-all duration-700 border border-slate-700/50">
                {/* Video Screen */}
                <div className="bg-black rounded-2xl p-1 shadow-inner relative overflow-hidden">
                  {/* Video Content Area */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-xl relative aspect-video overflow-hidden">
                    {/* Video Background with thumbnail effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-slate-900">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.3)_80%)]"></div>
                      
                      {/* Simulated video thumbnail */}
                      <div className="absolute inset-4 bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg opacity-20"></div>
                        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full opacity-20"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded opacity-20"></div>
                      </div>
                    </div>
                    
                    {/* Central Play Button with enhanced design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity scale-150"></div>
                        <div className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="h-12 w-12 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Player Controls Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full w-1/3 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-white/70 mt-1">
                          <span>2:45</span>
                          <span>8:30</span>
                        </div>
                      </div>
                      
                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <SkipBack className="h-5 w-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer">
                            <Pause className="h-4 w-4 text-white" />
                          </div>
                          <SkipForward className="h-5 w-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Volume2 className="h-4 w-4 text-white/80" />
                            <div className="w-16 h-1 bg-white/20 rounded-full">
                              <div className="w-3/4 h-full bg-white rounded-full"></div>
                            </div>
                          </div>
                          <Maximize className="h-4 w-4 text-white/80 hover:text-white cursor-pointer transition-colors" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Title Overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-semibold text-sm">Demo de Desarrollo Web</h3>
                        <p className="text-white/70 text-xs">Soluciones tecnológicas profesionales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating UI elements around the video player */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-bounce-3d shadow-xl flex items-center justify-center">
                <Video className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce-3d shadow-xl" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-bounce-3d shadow-xl" style={{ animationDelay: '0.6s' }}></div>
              <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full animate-bounce-3d shadow-xl" style={{ animationDelay: '0.9s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
