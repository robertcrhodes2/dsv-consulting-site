import { NextRequest, NextResponse } from 'next/server';

// DocuSign webhook stub
// In production: verify signature, update nda_requests status, email materials link

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('DocuSign webhook received:', body);

    // Example: extract envelopeId and status
    // const envelopeId = body.data?.envelopeId;
    // const status = body.data?.status; // 'completed'

    // if (status === 'completed') {
    //   // Update nda_requests set status = 'completed', signed_at = now()
    //   // Look up investor and send materials email via Resend
    // }

    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
}
