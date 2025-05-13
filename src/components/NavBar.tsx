
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Perform Digi</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li><a href="#services" className="font-medium hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="font-medium hover:text-primary transition-colors">About</a></li>
            <li><a href="#portfolio" className="font-medium hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#testimonials" className="font-medium hover:text-primary transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="font-medium hover:text-primary transition-colors">FAQ</a></li>
          </ul>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 flex items-center gap-1">
              <Phone size={16} />
              <span>Contact Us</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-slate p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-3">
            <li><a href="#services" className="block font-medium py-2 hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="block font-medium py-2 hover:text-primary transition-colors">About</a></li>
            <li><a href="#portfolio" className="block font-medium py-2 hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#testimonials" className="block font-medium py-2 hover:text-primary transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="block font-medium py-2 hover:text-primary transition-colors">FAQ</a></li>
          </ul>
          <div className="flex flex-col space-y-2 p-6 pt-0">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
