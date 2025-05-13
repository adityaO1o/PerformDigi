
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate pt-16 pb-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Perform Digi</h3>
            <p className="mb-6 text-slate-foreground/90">
              Your partner for digital success. We help businesses grow through strategic digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-foreground/90">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#webdev" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#appdev" className="hover:text-primary transition-colors">App Development</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-slate-foreground/90">
              <li><a href="#services" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#webdev" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#appdev" className="hover:text-primary transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Social Media Marketing</a></li>
              <li><a href="#creative" className="hover:text-primary transition-colors">Creative Services</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Performance Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-slate-foreground/90">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span>123 Rohini, Delhi NCR - 201301</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-primary" />
                <span>info@performdigi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-foreground/90 text-sm mb-4 md:mb-0">
              © {currentYear} Perform Digi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-foreground/90">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
