import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contacto } from "@/data/contacto";

const destinatario = process.env.CONTACT_TO || contacto.email;

function texto(valor: unknown) {
  return typeof valor === "string" ? valor.trim() : "";
}

function htmlSeguro(valor: string) {
  return valor
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (texto(body.empresa)) {
      return NextResponse.json({ ok: true });
    }

    const nombre = texto(body.nombre);
    const correo = texto(body.correo);
    const telefono = texto(body.telefono);
    const asunto = texto(body.asunto);
    const tienda = texto(body.tienda);
    const mensaje = texto(body.mensaje);

    if (!nombre || !correo || !telefono || !asunto || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Completa todos los campos." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      return NextResponse.json(
        { ok: false, error: "El correo no es válido." },
        { status: 400 }
      );
    }

    const usuario = process.env.SMTP_USER || contacto.email;
    const clave = process.env.SMTP_PASS;
    if (!clave) {
      return NextResponse.json(
        { ok: false, error: "El correo aún no está configurado." },
        { status: 500 }
      );
    }

    const puerto = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: puerto,
      secure: puerto === 465,
      auth: {
        user: usuario,
        pass: clave,
      },
    });

    const cuerpoTexto = [
      `Hola,`,
      ``,
      `Llegó un mensaje desde el formulario de Contáctanos.`,
      ``,
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      `Asunto: ${asunto}`,
      tienda ? `Tienda física: ${tienda}` : null,
      ``,
      `Mensaje:`,
      mensaje,
      ``,
      `Puedes responder este correo para escribirle directo a ${correo}.`,
    ]
      .filter((linea) => linea !== null)
      .join("\n");

    await transporter.sendMail({
      from: `"Crédito al Instante" <${usuario}>`,
      to: destinatario,
      replyTo: `${nombre} <${correo}>`,
      subject: `${asunto}: ${nombre}`,
      text: cuerpoTexto,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#1e293b">
          <p>Hola,</p>
          <p>Llegó un mensaje desde el formulario de Contáctanos.</p>
          <p>
            <strong>Nombre:</strong> ${htmlSeguro(nombre)}<br/>
            <strong>Correo:</strong> ${htmlSeguro(correo)}<br/>
            <strong>Teléfono:</strong> ${htmlSeguro(telefono)}<br/>
            <strong>Asunto:</strong> ${htmlSeguro(asunto)}
            ${tienda ? `<br/><strong>Tienda física:</strong> ${htmlSeguro(tienda)}` : ""}
          </p>
          <p><strong>Mensaje:</strong><br/>${htmlSeguro(mensaje).replaceAll("\n", "<br/>")}</p>
          <p>Puedes responder este correo para escribirle directo a ${htmlSeguro(correo)}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando contacto:", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
