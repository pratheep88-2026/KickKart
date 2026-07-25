import Link from 'next/link';

export default function OrdersPage() {
  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/" style={{ color: '#dc2626' }}>← Back home</Link>
      <h1 style={{ margin: '1rem 0' }}>Order history</h1>
      <div className="card" style={{ padding: '1.25rem' }}>
        <p style={{ color: '#666' }}>You have no orders yet. Once you place one, it will appear here.</p>
      </div>
    </main>
  );
}
