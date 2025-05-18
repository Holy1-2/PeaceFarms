import { categories } from './data';
import CategoryCard from './CategoryCard';

export default function ProductCategories() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl text-center mb-16">Our Organic Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
