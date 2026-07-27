import Link from 'next/link';
import { mockProducts } from '@/lib/data';
import ProductCard from '../../components/ProductCard';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const title = params.category.replace(/-/g, ' ');
  const products = mockProducts.filter((product) => product.category === params.category);

  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <Link href="/" style={{ color: '#dc2626' }}>← Back home</Link>
      <h1 style={{ textTransform: 'capitalize', margin: '1rem 0' }}>{title}</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
