import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/cart" style={{ color: '#dc2626' }}>← Back to cart</Link>
      <h1 style={{ margin: '1rem 0' }}>Checkout</h1>
      <div className="card" style={{ padding: '1.25rem' }}>
        <p style={{ color: '#666' }}>Checkout UI is ready for Razorpay integration in the next step.</p>
        <Link href="/order/success/sample" className="btn">Simulate success</Link>
      </div>
    </main>
  );
}
