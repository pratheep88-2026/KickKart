import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div style={{ borderRadius: '0.75rem', overflow: 'hidden', marginBottom: '0.75rem' }}>
        {product.image_url ? <img src={encodeURI(product.image_url)} alt={product.name} className="product-image" /> : <div style={{ height: 180, background: '#ffe8e8' }} />}
      </div>
      <h3 style={{ margin: '0 0 0.4rem' }}>{product.name}</h3>
      <p style={{ margin: '0 0 0.6rem', color: '#666' }}>{product.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>₹{product.price.toLocaleString()}</strong>
        <Link href={`/products/${product.slug}`} className="btn">View</Link>
      </div>
    </div>
  );
}
