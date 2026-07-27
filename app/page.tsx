import Link from 'next/link';
import { mockCategories, mockProducts } from '@/lib/data';
import ProductCard from './components/ProductCard';

export default function Home() {
  const featured = mockProducts.filter((product) => product.featured);

  return (
    <main>
      <section style={{ background: '#fff5f5', padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: '1.2fr 0.8fr' }}>
          <div>
            <p style={{ color: '#dc2626', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Kickd</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0.5rem 0' }}>Minimal shoes for modern movement.</h1>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: 1.7 }}>A simple storefront for sneakers, running shoes, and boots with a clean white-and-red experience.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Link href="/shop/sneakers" className="btn">Shop Sneakers</Link>
              <Link href="/cart" className="btn" style={{ background: '#111' }}>View Cart</Link>
            </div>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ background: '#ffe8e8', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 0.5rem' }}>Featured Drop</h2>
              <p style={{ margin: 0, color: '#666' }}>Fresh styles for daily wear and training.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '3rem 0' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Browse by category</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {mockCategories.map((category) => (
            <Link key={category.slug} href={`/shop/${category.slug}`} className="card" style={{ padding: '1rem' }}>
              <div style={{ height: '140px', background: '#fff2f2', borderRadius: '0.75rem', marginBottom: '0.75rem' }} />
              <strong>{category.name}</strong>
              <p style={{ color: '#666', marginBottom: 0 }}>{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Featured shoes</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {featured.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
