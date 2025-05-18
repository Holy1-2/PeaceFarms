import { Parallax } from 'react-scroll-parallax';

export function HarvestTime() {
  return (
    <Parallax speed={-5}>
      <section className="relative py-24 bg-[#1F3F2D] text-white text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        
        <div className="relative max-w-4xl mx-auto px-4">
          <i className="fas fa-seedling text-4xl mb-6 text-[#C1D8C3]"></i>
          <h2 className="font-playfair text-4xl mb-4">Harvest Time</h2>
          <p className="text-xl mb-8">Our produce is hand-picked at peak ripeness for maximum flavor and nutrition</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">Spring Harvest</h3>
              <p className="text-[#C1D8C3]">March - May</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">Summer Harvest</h3>
              <p className="text-[#C1D8C3]">June - August</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-2">Fall Harvest</h3>
              <p className="text-[#C1D8C3]">September - November</p>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}