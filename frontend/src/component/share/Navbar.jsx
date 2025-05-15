import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Student Portal</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-green-700 text-white px-6 py-4 space-y-3 transition-all duration-300">
          <a href="#home" onClick={toggleMenu} className="block hover:underline">Home</a>
          <a href="#about" onClick={toggleMenu} className="block hover:underline">About</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:underline">Contact Us</a>
          <Link to="/profile" onClick={toggleMenu} className="block hover:underline">Profile</Link>
          <Link to="/login" onClick={toggleMenu} className="block hover:underline">Login</Link>
          <Link to="/signup" onClick={toggleMenu} className="block hover:underline">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
