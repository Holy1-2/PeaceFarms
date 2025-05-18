import { Link } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-playfair text-4xl">Featured Produce</h2>
          <Link 
            to="/products" 
            className="text-[#1F3F2D] hover:text-[#2D5540] font-semibold flex items-center gap-2"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <Parallax speed={-10}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1F3F2D]/80">
                    <h3 className="text-2xl text-white font-semibold">{product.title}</h3>
                  </div>
                </div>
              </Parallax>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#C1D8C3] text-sm">
                    <i className="fas fa-clock mr-2"></i>
                    {product.duration}
                  </div>
                  <span className="bg-[#1F3F2D] text-white px-3 py-1 rounded-full text-sm">
                    {product.fertilizer}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-[#1F3F2D]">{product.price}</p>
                    <p className="text-sm text-gray-500">Per kilogram</p>
                  </div>
                  <Link 
                    to={`/products`}
                    className="bg-[#C1D8C3] text-[#1F3F2D] px-4 py-2 rounded-full hover:bg-[#1F3F2D] hover:text-white transition-all flex items-center gap-2 text-sm"
                  >
                    <i className="fas fa-comment-dots"></i>
                    Inquiry
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    id: 1,
    title: 'Heirloom Tomatoes',
    price: '$4.99',
    duration: '90 Days Growth',
    fertilizer: 'Organic Compost',
    image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924'
  },
  {
    id: 2,
    title: 'Organic Kale',
    price: '$3.49',
    duration: '60 Days Growth',
    fertilizer: 'Seaweed Extract',
    image: '/veg.jpg'
  },
  {
    id: 3,
    title: 'Rainbow Carrots',
    price: '$2.99',
    duration: '75 Days Growth',
    fertilizer: 'Vermicompost',
    image: '/veg.jpg'
  },
];