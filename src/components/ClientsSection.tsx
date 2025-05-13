
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Placeholder for client logos
const ClientLogo: React.FC = () => (
  <div className="h-16 bg-white rounded-lg shadow-md flex items-center justify-center px-6 opacity-80 hover:opacity-100 transition-opacity">
    <div className="w-full h-8 bg-slate-foreground/10 rounded"></div>
  </div>
);

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="bg-white py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-slate-foreground max-w-2xl mx-auto">
            Trusted by businesses across Delhi and beyond for our digital marketing expertise.
          </p>
        </div>
        
        <div className="relative fade-in">
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="w-24 md:w-32">
                  <ClientLogo />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12 space-x-4">
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
