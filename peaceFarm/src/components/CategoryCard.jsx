import { Link } from 'react-router-dom';

export default function CategoryCard({ id, title, icon: Icon, count }) {
  return (
    <Link 
      to={`/products?category=${id}`}
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
    >
      <div className="w-20 h-20 bg-[#1F3F2D] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-seedling text-2xl text-white"></i>
      </div>
      <h3 className="font-playfair text-2xl mb-2">{title}</h3>
      <p className="text-[#C1D8C3] font-medium">{count} Products</p>
    </Link>
  );
}