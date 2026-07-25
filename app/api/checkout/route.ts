import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const keyId = process.env.RAZORPAY_KEY_ID || '';
const keySecret = process.env.RAZORPAY_KEY_SECRET || '';

const razorpay = keyId && keySecret ? new Razorpay({ key_id: keyId, key_secret: keySecret }) : null;

export async function POST(request: Request) {
  try {
    if (!razorpay) {
      return NextResponse.json({ success: false, error: 'Razorpay credentials not configured' }, { status: 500 });
    }

    const { amount, currency = 'INR', receipt } = await request.json();

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency,
      receipt,
      payment_capture: true,
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Unable to create order' }, { status: 500 });
  }
}
