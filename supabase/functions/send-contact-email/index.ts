
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const { nombre, email, telefono, mensaje }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { nombre, email });

    // Send email to the business owner
    const emailResponse = await resend.emails.send({
      from: "Contacto Web <onboarding@resend.dev>",
      to: ["tu-email@ejemplo.com"], // Cambia esto por tu email real
      subject: `Nuevo mensaje de contacto - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto desde tu web
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #333;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Responder:</strong> Puedes responder directamente a ${email} o llamar al ${telefono}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Tu Empresa <onboarding@resend.dev>",
      to: [email],
      subject: "¡Hemos recibido tu mensaje!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
            ¡Gracias por contactarnos, ${nombre}!
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #495057; line-height: 1.6;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>
            
            <div style="background: white; padding: 15px; border-radius: 6px; margin: 15px 0;">
              <h4 style="color: #333; margin-top: 0;">Tu mensaje:</h4>
              <p style="color: #666; font-style: italic;">"${mensaje}"</p>
            </div>
            
            <p style="color: #495057;">
              Normalmente respondemos en un plazo de 24 horas durante días laborables.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px;">
            <p style="color: #28a745; font-weight: bold; margin: 0;">
              ¡Esperamos poder ayudarte pronto!
            </p>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">
              El equipo de desarrollo web
            </p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails enviados correctamente" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending contact emails:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Error interno del servidor" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
