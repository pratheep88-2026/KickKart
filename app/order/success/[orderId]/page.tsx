import Link from 'next/link';

export default function OrderSuccessPage() {
  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <div className="card" style={{ padding: '1.5rem' }}>
        <h1 style={{ marginTop: 0 }}>Order confirmed</h1>
        <p style={{ color: '#666', lineHeight: 1.7 }}>Your payment was successful and your order is on the way.</p>
        <Link href="/account/orders" className="btn">View order history</Link>
      </div>
    </main>
  );
}
