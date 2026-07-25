import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/" style={{ color: '#dc2626' }}>← Back home</Link>
      <h1 style={{ margin: '1rem 0' }}>Cart</h1>
      <div className="card" style={{ padding: '1.25rem' }}>
        <p style={{ color: '#666' }}>Your cart is currently empty. Start shopping to add shoes.</p>
        <Link href="/shop/sneakers" className="btn">Continue shopping</Link>
      </div>
    </main>
  );
}
