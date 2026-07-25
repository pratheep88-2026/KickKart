import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid #f4dada', background: 'white' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <Link href="/" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#dc2626' }}>Kickd</Link>
        <nav style={{ display: 'flex', gap: '1rem', color: '#333' }}>
          <Link href="/shop/sneakers">Sneakers</Link>
          <Link href="/shop/running-shoes">Running</Link>
          <Link href="/shop/boots">Boots</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/auth/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
