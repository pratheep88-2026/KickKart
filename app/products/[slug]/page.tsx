import Link from 'next/link';
import { mockProducts } from '@/lib/data';
import CheckoutButton from '../../components/CheckoutButton';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = mockProducts.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <main className="container" style={{ padding: '3rem 0' }}>
        <p>Product not found.</p>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/" style={{ color: '#dc2626' }}>← Back home</Link>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr', marginTop: '1.5rem' }}>
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ height: '280px', borderRadius: '0.75rem', overflow: 'hidden', background: '#ffe8e8' }}>
            {product.image_url ? (
              <img src={encodeURI(product.image_url)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : null}
          </div>
        </div>
        <div>
          <p style={{ color: '#dc2626', margin: 0, fontWeight: 700 }}>Featured</p>
          <h1 style={{ margin: '0.3rem 0 0.8rem' }}>{product.name}</h1>
          <p style={{ color: '#666', lineHeight: 1.7 }}>{product.description}</p>
          <h2 style={{ marginTop: '1rem' }}>₹{product.price.toLocaleString()}</h2>
          <div style={{ marginTop: '1rem' }}>
            <strong>Available sizes</strong>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
              {product.sizes.map((size) => (
                <span key={size} style={{ border: '1px solid #ddd', padding: '0.4rem 0.7rem', borderRadius: '999px' }}>{size}</span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
           <CheckoutButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
