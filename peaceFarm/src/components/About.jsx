import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1F3F2D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl mb-8">
            Cultivating Sustainability Since 2010
          </h1>
          <p className="text-xl text-[#C1D8C3] max-w-3xl mx-auto">
            Pioneering organic farming practices that harmonize with nature while delivering 
            nutritious produce to our community.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Parallax speed={-5}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449" 
                alt="Farm History" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1F3F2D]/30" />
            </div>
          </Parallax>
          
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl text-[#1F3F2D] mb-6">
              How We Started
            </h2>
            <p className="text-lg text-gray-600">
              What began as a small family garden has blossomed into a 200-acre organic 
              sanctuary. Founded by agricultural engineers Maria and John Doe, Peace Farm 
              emerged from a simple vision: reconnect people with nature's true bounty.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 bg-[#1F3F2D] rounded-full flex items-center justify-center">
                <i className="fas fa-seedling text-2xl text-white"></i>
              </div>
              <p className="font-semibold text-[#1F3F2D]">
                Certified Organic Since 2012
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-4xl text-[#1F3F2D] mb-16">
            Our Farming Philosophy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#F8FAF9] hover:bg-[#1F3F2D] group transition-all">
              <div className="w-16 h-16 bg-[#1F3F2D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                <i className="fas fa-earth-americas text-2xl text-white group-hover:text-[#1F3F2D]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Sustainable Practices</h3>
              <p className="text-gray-600 group-hover:text-[#C1D8C3]">
                Regenerative agriculture techniques that enrich soil biodiversity
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#F8FAF9] hover:bg-[#1F3F2D] group transition-all">
              <div className="w-16 h-16 bg-[#1F3F2D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                <i className="fas fa-hand-holding-heart text-2xl text-white group-hover:text-[#1F3F2D]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Ethical Production</h3>
              <p className="text-gray-600 group-hover:text-[#C1D8C3]">
                Fair labor practices and humane treatment of livestock
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#F8FAF9] hover:bg-[#1F3F2D] group transition-all">
              <div className="w-16 h-16 bg-[#1F3F2D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white">
                <i className="fas fa-truck-fast text-2xl text-white group-hover:text-[#1F3F2D]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white">Local Distribution</h3>
              <p className="text-gray-600 group-hover:text-[#C1D8C3]">
                Fresh produce delivered within 24 hours of harvest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Parallax speed={-10}>
        <section className="relative py-24 bg-[#1F3F2D] text-white text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449')] bg-cover bg-center opacity-20" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8 relative">
            <div className="p-6">
              <div className="text-4xl font-playfair font-bold mb-2">12+</div>
              <div className="text-[#C1D8C3]">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-playfair font-bold mb-2">200+</div>
              <div className="text-[#C1D8C3]">Acres Cultivated</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-playfair font-bold mb-2">50+</div>
              <div className="text-[#C1D8C3]">Organic Products</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-playfair font-bold mb-2">10k+</div>
              <div className="text-[#C1D8C3]">Happy Families</div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#F8FAF9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl text-[#1F3F2D] mb-8">
            Join Our Organic Journey
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover the difference of truly sustainable farming. Visit our fields or 
            explore our seasonal offerings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-[#1F3F2D] text-white px-8 py-4 rounded-full hover:bg-[#2D5540] transition-all"
            >
              Schedule a Farm Tour
            </Link>
            <Link 
              to="/products" 
              className="border-2 border-[#1F3F2D] text-[#1F3F2D] px-8 py-4 rounded-full hover:bg-[#1F3F2D] hover:text-white transition-all"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}