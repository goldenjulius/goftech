
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-goftech-600">
            Gof<span className="text-cloud-400">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/#home" className="text-goftech-600 hover:text-goftech-400 font-medium">
            Home
          </a>
          <a href="/#services" className="text-goftech-600 hover:text-goftech-400 font-medium">
            Services
          </a>
          <a href="/#about" className="text-goftech-600 hover:text-goftech-400 font-medium">
            About
          </a>
          <Link to="/careers" className="text-goftech-600 hover:text-goftech-400 font-medium">
            Careers
          </Link>
          <a href="/#contact" className="text-goftech-600 hover:text-goftech-400 font-medium">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-goftech-600" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="/#home" 
              className="text-goftech-600 hover:text-goftech-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/#services" 
              className="text-goftech-600 hover:text-goftech-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/#about" 
              className="text-goftech-600 hover:text-goftech-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <Link 
              to="/careers" 
              className="text-goftech-600 hover:text-goftech-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <a 
              href="/#contact" 
              className="text-goftech-600 hover:text-goftech-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
