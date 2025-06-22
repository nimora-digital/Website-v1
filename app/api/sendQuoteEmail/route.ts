import { Client } from '@microsoft/microsoft-graph-client';
import { ClientSecretCredential } from '@azure/identity';
import { NextRequest, NextResponse } from 'next/server';
import 'isomorphic-fetch';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, notes, ...details } = body;

    const credential = new ClientSecretCredential(
      process.env.OUTLOOK_TENANT_ID!,
      process.env.OUTLOOK_CLIENT_ID!,
      process.env.OUTLOOK_CLIENT_SECRET!
    );

    const accessToken = await credential.getToken('https://graph.microsoft.com/.default');

    const client = Client.init({
      authProvider: (done) => done(null, accessToken?.token || '')
    });

    const messageBody = `
Name: ${name}
Email: ${email}
Message: ${notes}

Details:
${JSON.stringify(details, null, 2)}
    `;

    const message = {
      subject: `New Quote Request from ${name}`,
      body: {
        contentType: 'Text',
        content: messageBody,
      },
      toRecipients: [
        { emailAddress: { address: process.env.OUTLOOK_SENDER! } },
        { emailAddress: { address: email } },
      ],
    };

    await client.api(`/users/${process.env.OUTLOOK_SENDER}/sendMail`).post({ message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return new NextResponse('Failed to send email', { status: 500 });
  }
}
