import Link from 'next/link';
import { mockProducts } from '@/lib/data';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const title = params.category.replace(/-/g, ' ');
  const products = mockProducts.filter((product) => product.category === params.category);

  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/" style={{ color: '#dc2626' }}>← Back home</Link>
      <h1 style={{ textTransform: 'capitalize', margin: '1rem 0' }}>{title}</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {products.map((product) => (
          <div key={product.name} className="card" style={{ padding: '1rem' }}>
            <div style={{ position: 'relative', height: '140px', borderRadius: '0.75rem', marginBottom: '0.75rem', overflow: 'hidden', background: '#ffe8e8' }}>
              {product.image_url ? (
                <img src={encodeURI(product.image_url)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : null}
            </div>
            <h3 style={{ margin: '0 0 0.4rem' }}>{product.name}</h3>
            <p style={{ color: '#666', marginBottom: '0.75rem' }}>{product.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>₹{product.price.toLocaleString()}</strong>
              <Link href={`/products/${product.slug}`} className="btn">View</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
