import { Parallax } from 'react-scroll-parallax';

export default function Contact() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#1F3F2D] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="font-playfair text-4xl mb-8">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <i className="fas fa-map-marker-alt text-2xl text-[#C1D8C3]"></i>
              <div>
                <h3 className="font-semibold">Our Farm</h3>
                <p>123 Organic Lane<br/>Green Valley, CA 90210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-phone text-2xl text-[#C1D8C3]"></i>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-2xl text-[#C1D8C3]"></i>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>contact@peacefarm.com</p>
              </div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/+250786772354" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#1F3F2D] px-6 py-3 rounded-full hover:bg-[#C1D8C3] transition-all"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Chat on WhatsApp
          </a>
        </div>

        <Parallax speed={-5}>
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.02842723295!2d-122.46105899179686!3d37.75776231615085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689878157175!5m2!1sen!2sus" 
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Parallax>
      </div>
    </section>
  );
}