// src/pages/api/contact-service.ts
import { Resend } from "resend";
import type { APIRoute } from "astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, phone, project_type, message } = body;

    const html = `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
      <p><strong>Tipo de proyecto:</strong> ${project_type}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `;

    const data = await resend.emails.send({
      from: "Juan desde Portfolio <juan@resend.dev>",
      to: "juantandil123@gmail.com",
      subject: `Nuevo proyecto de ${name} (${project_type || "Sin especificar"})`,
      replyTo: email,
      html,
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
