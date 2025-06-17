// src/pages/api/contact.ts
import { Resend } from "resend";
import type { APIRoute } from "astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Juan desde mi Portfolio <portfolio@onresend.com>",
      to: "juantandil123@gmail.com", // Cambiá por tu correo real
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong></p>
             <p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
};
