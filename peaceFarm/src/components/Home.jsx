import Hero from './Hero';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
    </main>
  );
}