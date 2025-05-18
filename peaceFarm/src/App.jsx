// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import Products from './components/products';

export default function App() {
  return (
    <ParallaxProvider>
    <Router>
      <div className="font-inter bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ParallaxProvider>

  );
}