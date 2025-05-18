import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/field.jpg')",
            transform: 'scale(1.1)' // Reduced scale for better coverage
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#1F3F2D]/60" />
        </div>
      </Parallax>

      {/* Content */}
      <Parallax speed={10} className="relative z-10">
        <div className="text-center max-w-4xl px-4">
          <h1 className="font-playfair text-5xl md:text-7xl text-white mb-8 leading-tight">
            Cultivating Harmony<br/>With Nature
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="/products"
              className="bg-white text-[#1F3F2D] px-8 py-3 rounded-full font-semibold hover:bg-[#C1D8C3] transition-all transform hover:-translate-y-1"
            >
              Explore Produce
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1F3F2D] transition-all transform hover:-translate-y-1">
              Farm Tour
            </button>
          </div>
        </div>
      </Parallax>
    </section>
  );
}