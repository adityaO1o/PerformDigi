
import React from 'react';
import { Building } from 'lucide-react';

const DelhiSection: React.FC = () => {
  return (
    <section id="delhi" className="bg-white py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left slide-up">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Digital Marketing Services in <span className="text-primary">Delhi</span>
            </h2>
            
            <p className="text-lg text-slate-foreground">
              As a leading digital marketing agency based in Delhi NCR, we understand the unique needs of local businesses. Our tailored strategies help you stand out in Delhi's competitive market.
            </p>
            
            <ul className="space-y-4 py-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <Building className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Local SEO Specialists</h3>
                  <p className="text-slate-foreground">Dominate local search results and attract nearby customers</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <Building className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Delhi-Focused Campaigns</h3>
                  <p className="text-slate-foreground">Marketing strategies tailored to Delhi's unique consumer behavior</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <Building className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Local Business Network</h3>
                  <p className="text-slate-foreground">Connect with other Delhi businesses and build valuable partnerships</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 fade-in">
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <p className="font-medium">Delhi Businesses Served</p>
            </div>
            
            <div className="bg-secondary/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="font-medium">Increase in Local Search Visibility</p>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="font-medium">Years in Delhi Market</p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="font-medium">Average ROI for Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DelhiSection;
