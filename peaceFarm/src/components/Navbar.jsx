// components/Navbar.jsx
import { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative block py-2 md:py-0 transition-colors hover:text-[#C1D8C3] group
      ${isActive ? 'text-[#C1D8C3]' : 'text-white'}`
    }
  >
    {children}
    <span
      className={`absolute -bottom-1 left-0 h-0.5  transition-all group-hover:w-full
        ${"w-full" /* Force underline always full width so active and hover maintains */}`}
    />
  </RouterNavLink>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#1F3F2D]/90 backdrop-blur-md text-white fixed w-full z-50 py-4 px-6 lg:px-12 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <RouterNavLink to="/" className="text-2xl font-playfair font-semibold flex items-center gap-4">
<img src="/peacelogo.png" alt="Peace Farm Logo" className="w-12 h-12 object-contain" />
          Peace Farms
        </RouterNavLink>

        {/* Mobile menu button */}
       <button
  className="md:hidden focus:outline-none"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  <i className={`w-6 h-6 ${menuOpen ? 'fas fa-times' : 'fas fa-bars'}`}></i>
</button>


        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1F3F2D]/95 backdrop-blur-md mt-2 rounded-lg py-4 px-6">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
