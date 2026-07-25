import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = generatedSignature === razorpay_signature;

    return NextResponse.json({ success: isValid, message: isValid ? 'Payment verified' : 'Invalid signature' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Unable to verify payment' }, { status: 500 });
  }
}
