
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'nombre':
        return value.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Ingresa un email válido' : '';
      case 'telefono':
        const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
        return !phoneRegex.test(value) ? 'Ingresa un teléfono válido' : '';
      case 'mensaje':
        return value.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar todos los campos
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Limpiar formulario
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">contacto@mytec.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Ubicación</div>
                    <div className="text-gray-600">Madrid, España</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos de confianza */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Garantías</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700">Garantía de Calidad</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700">Datos Protegidos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-700">Certificación ISO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={`mt-1 ${errors.nombre ? 'border-red-500' : ''}`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.nombre}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={`mt-1 ${errors.telefono ? 'border-red-500' : ''}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.telefono}</p>
                )}
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className={`mt-1 ${errors.mensaje ? 'border-red-500' : ''}`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1 animate-fade-in">{errors.mensaje}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Consulta
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
