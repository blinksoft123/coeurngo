import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez renseigner votre nom, email et message.' },
        { status: 400 }
      );
    }

    // Validation format email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Veuillez renseigner une adresse email valide.' },
        { status: 400 }
      );
    }

    // En environnement de production, vous pouvez connecter un service d'envoi d'email (ex: Resend, Sendgrid ou Nodemailer)
    // Ici on simule une réception réussie et sécurisée
    return NextResponse.json({
      success: true,
      message: 'Votre message a bien été transmis à la permanence de Cœurs Sans Frontières. Nous vous répondrons dans les plus brefs délais.',
      receivedAt: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la transmission du message.' },
      { status: 500 }
    );
  }
}
