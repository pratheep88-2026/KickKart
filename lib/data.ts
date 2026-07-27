export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  sizes: string[];
  image_url?: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
};

export const mockCategories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', slug: 'sneakers', description: 'Everyday comfort and laid-back styling.' },
  { id: 'running-shoes', name: 'Running Shoes', slug: 'running-shoes', description: 'Light and responsive picks for movement.' },
  { id: 'boots', name: 'Boots', slug: 'boots', description: 'Durable designs with a strong finish.' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'City Runner',
    slug: 'city-runner',
    description: 'Lightweight cushioning and a clean profile for daily wear.',
    price: 4999,
    compare_at_price: 5999,
    category: 'sneakers',
    sizes: ['7', '8', '9', '10'],
    image_url: '/images/sneakers/img-1.avif',
    featured: true,
  },
  {
    id: '2',
    name: 'Tempo Lite',
    slug: 'tempo-lite',
    description: 'Responsive support made for smoother runs and weekend miles.',
    price: 5499,
    category: 'running-shoes',
    sizes: ['6', '7', '8', '9'],
    image_url: '/images/running-shoes/img-1.jpg',
    featured: true,
  },
  {
    id: '3',
    name: 'Summit Boot',
    slug: 'summit-boot',
    description: 'A polished boot with durable grip and minimalist styling.',
    price: 6299,
    category: 'boots',
    sizes: ['8', '9', '10', '11'],
    image_url: '/images/boots/img-1.webp',
    featured: true,
  },
];
