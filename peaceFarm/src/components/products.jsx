import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <main className="bg-[#F8FAF9]">
      {/* Products Header */}
      <section className="relative bg-[#1F3F2D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl mb-8">
            Seasonal Organic Produce
          </h1>
          <p className="text-xl text-[#C1D8C3] max-w-3xl mx-auto">
            Fresh from our fields to your table - harvested at peak ripeness for maximum flavor and nutrition
          </p>
        </div>
      </section>

      {/* Harvest Timing */}
      <Parallax speed={-5}>
        <section className="py-16 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8 text-[#1F3F2D]">
            <div className="text-center p-6">
              <i className="fas fa-calendar-day text-3xl mb-4 text-[#C1D8C3]"></i>
              <h3 className="text-xl font-semibold mb-2">Harvest Schedule</h3>
              <p className="text-gray-600">Monday - Saturday</p>
              <p className="text-sm text-[#C1D8C3]">6:00 AM - 11:00 AM</p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-clock text-3xl mb-4 text-[#C1D8C3]"></i>
              <h3 className="text-xl font-semibold mb-2">Freshness Guarantee</h3>
              <p className="text-gray-600">Delivered within</p>
              <p className="text-sm text-[#C1D8C3]">24 Hours of Harvest</p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-tractor text-3xl mb-4 text-[#C1D8C3]"></i>
              <h3 className="text-xl font-semibold mb-2">Growing Method</h3>
              <p className="text-gray-600">100% Organic</p>
              <p className="text-sm text-[#C1D8C3]">No Chemical Pesticides</p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-box text-3xl mb-4 text-[#C1D8C3]"></i>
              <h3 className="text-xl font-semibold mb-2">Packaging</h3>
              <p className="text-gray-600">Eco-Friendly</p>
              <p className="text-sm text-[#C1D8C3]">Biodegradable Materials</p>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Product Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all group overflow-hidden">
              <Parallax speed={-10}>
                <div className="relative h-80 overflow-hidden">
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
                  <div className="text-[#C1D8C3]">
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
                    to={`/contact?product=${encodeURIComponent(product.title)}`}
                    className="bg-[#C1D8C3] text-[#1F3F2D] px-6 py-2 rounded-full hover:bg-[#1F3F2D] hover:text-white transition-all flex items-center gap-2"
                  >
                    <i className="fas fa-comment-dots"></i>
                    Inquiry Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Order Section */}
      <section className="bg-[#1F3F2D] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-playfair text-4xl mb-8">Bulk Orders & Wholesale</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-[#C1D8C3]">
              Looking for larger quantities? Get special pricing for orders over 50kg.
              Our team will help you with custom harvesting schedules and delivery arrangements.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#1F3F2D] px-8 py-3 rounded-full font-semibold hover:bg-[#C1D8C3] transition-all"
          >
            <i className="fas fa-boxes-packing"></i>
            Request Wholesale Pricing
          </Link>
        </div>
      </section>
    </main>
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