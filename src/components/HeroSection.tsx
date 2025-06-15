
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Soluciones Tecnológicas que
            <span className="text-primary block">Impulsan tu Negocio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Desarrollamos software, webs y estrategias digitales a medida para potenciar tu marca
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              Contáctanos Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-slide-up">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3" 
              alt="Equipo trabajando en tecnología"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
