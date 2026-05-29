import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ success: false, error: "API key nao configurada" }, { status: 500 });
  }
  const resend = new Resend(apiKey);
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    await resend.emails.send({
      from: "Contato Site <onboarding@resend.dev>",
      to: "tesseratocontabilidade@gmail.com",
      subject: `Novo contato de ${name}`,
      html: `
        <h2>CONTATO SITE TESSERATO</h2>

        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>

        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
