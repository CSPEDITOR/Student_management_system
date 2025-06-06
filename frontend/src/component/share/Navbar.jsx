import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Student Portal</div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:underline">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:underline">About</button>
          <button onClick={() => scrollToSection('contact')} className="hover:underline">Contact Us</button>
          <Link to="/student/view" className="hover:underline ">Profile</Link>
          <Link to="/student/" className="hover:underline">Login</Link>
          <Link to="/student/form" className="hover:underline">Signup</Link>
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
          <button onClick={() => scrollToSection('home')} className="block hover:underline w-full text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="block hover:underline w-full text-left">About</button>
          <button onClick={() => scrollToSection('contact')} className="block hover:underline w-full text-left">Contact Us</button>
          <Link to="/student/view" onClick={toggleMenu} className="block hover:underline">Profile</Link>
          <Link to="/student/" onClick={toggleMenu} className="block hover:underline">Login</Link>
          <Link to="/student/form" onClick={toggleMenu} className="block hover:underline">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
