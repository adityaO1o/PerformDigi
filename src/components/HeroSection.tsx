
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-secondary/10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate">
              Digital Marketing <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-foreground max-w-2xl mx-auto lg:mx-0">
              Elevate your brand's online presence with our comprehensive digital marketing solutions tailored for businesses in Delhi and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 font-montserrat text-white py-6 px-6 rounded-md">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 px-6 rounded-md">
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img 
                  src="/marketinghero.jpg" 
                  alt="Digital Marketing Services" 
                  className="relative rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,74.7C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
