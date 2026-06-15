import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, cognome, email, messaggio } = await request.json();

    const { error } = await resend.emails.send({
      from: "Sito Davide <onboarding@resend.dev>",
      to: ["stella.davide.psi@gmail.com"],
      subject: `Nuovo messaggio da ${nome} ${cognome}`,
      replyTo: email,
      text: `
Nome: ${nome}
Cognome: ${cognome}
Email: ${email}

Messaggio:
${messaggio}
      `,
    });

    if (error) {
      console.log("Errore nell'invio dell'email:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}