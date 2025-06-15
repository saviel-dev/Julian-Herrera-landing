import { ArrowRight, Play, CheckCircle2, Sparkles, Laptop, Code, Database, Cpu, Zap, Globe, Wifi, Monitor } from 'lucide-react';
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
          
          {/* Innovation & Tech Dashboard */}
          <div className="relative animate-slide-in-right perspective-container">
            <div className="relative transform-3d">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-[2rem] blur-3xl transform rotate-3 animate-float scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 rounded-[2rem] blur-2xl transform -rotate-2 animate-float scale-105" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Tech Dashboard Container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] shadow-2xl p-3 z-10 card-3d hover:scale-105 transition-all duration-700 border border-slate-700/50">
                {/* Dashboard Screen */}
                <div className="bg-black rounded-2xl p-1 shadow-inner relative overflow-hidden">
                  {/* Dashboard Content Area */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-xl relative aspect-video overflow-hidden p-6">
                    {/* Tech Dashboard Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900">
                      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    </div>
                    
                    {/* Dashboard Header */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <h3 className="text-white font-semibold text-lg">Innovation Dashboard</h3>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Content Grid */}
                    <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                      {/* Code Editor Section */}
                      <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="h-4 w-4 text-blue-400" />
                          <span className="text-white text-xs font-medium">Code Editor</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <div className="h-1 bg-purple-400/60 rounded flex-1"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="h-1 bg-green-400/60 rounded flex-1"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="h-1 bg-blue-400/60 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* System Monitor */}
                      <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Cpu className="h-4 w-4 text-green-400" />
                          <span className="text-white text-xs font-medium">Performance</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-400">CPU</span>
                            <span className="text-xs text-green-400">85%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-1">
                            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-1 rounded-full w-4/5"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Database Status */}
                      <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Database className="h-4 w-4 text-cyan-400" />
                          <span className="text-white text-xs font-medium">Database</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <div className="w-8 h-8 border-2 border-cyan-400/30 rounded-full"></div>
                            <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Network Status */}
                      <div className="bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="h-4 w-4 text-orange-400" />
                          <span className="text-white text-xs font-medium">Network</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Wifi className="h-6 w-6 text-orange-400" />
                          <div className="flex gap-1">
                            <div className="w-1 h-3 bg-orange-400 rounded"></div>
                            <div className="w-1 h-4 bg-orange-400 rounded"></div>
                            <div className="w-1 h-2 bg-orange-400/50 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute top-4 right-4">
                      <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Monitor className="h-5 w-5 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons around the dashboard */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce-3d shadow-xl flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-bounce-3d shadow-xl" style={{ animationDelay: '0.3s' }}>
                <Database className="h-3 w-3 text-white m-auto mt-1.5" />
              </div>
              <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full animate-bounce-3d shadow-xl flex items-center justify-center" style={{ animationDelay: '0.6s' }}>
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-4 w-7 h-7 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-bounce-3d shadow-xl flex items-center justify-center" style={{ animationDelay: '0.9s' }}>
                <Globe className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
