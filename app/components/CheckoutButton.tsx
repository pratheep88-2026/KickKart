"use client";
import { useState } from 'react';

export default function CheckoutButton({ product }: { product: any }) {
  const [loading, setLoading] = useState(false);

  async function loadRazorpay() {
    if (typeof window === 'undefined') return false;
    if ((window as any).Razorpay) return true;
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  async function handleCheckout() {
    setLoading(true);
    try {
      const ok = await loadRazorpay();
      if (!ok) {
        alert('Unable to load payment gateway');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: product.price, receipt: `order_${product.id}` }),
      });
      const data = await res.json();
      if (!data?.success) {
        alert('Failed to create order');
        setLoading(false);
        return;
      }

      const order = data.order;
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: order.amount,
        currency: order.currency,
        name: 'Kick Kart',
        description: product.name,
        order_id: order.id,
        handler: async function (response: any) {
          // send verification to server
          await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...response, orderId: order.id }),
          });
          window.location.href = `/order/success/${order.id}`;
        },
        prefill: {
          name: '',
          email: '',
        },
        theme: { color: '#dc2626' },
      } as any;

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (e) {
      console.error(e);
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button className="btn" onClick={handleCheckout} disabled={loading}>
      {loading ? 'Processing...' : `Buy Now — ₹${product.price.toLocaleString()}`}
    </button>
  );
}
