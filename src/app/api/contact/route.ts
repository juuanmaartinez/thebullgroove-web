import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, message, captchaToken } = body;

    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Verificación CAPTCHA fallida.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"THEBULLGROOVE Web" <${process.env.GMAIL_USER}>`,
      to: 'thebullgroove@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #fff; border: 1px solid #222;">
          <h2 style="font-size: 20px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 24px;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; width: 100px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px 12px 0; color: #888; vertical-align: top;">Mensaje</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] error:', err);
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
