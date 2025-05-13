
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Code, Layout, FileCode, Database } from 'lucide-react';

const WebDevSection: React.FC = () => {
  const features = [
    { icon: <Layout className="h-5 w-5 text-primary" />, text: "Responsive Design for All Devices" },
    { icon: <Code className="h-5 w-5 text-primary" />, text: "Clean, Modern Code Architecture" },
    { icon: <FileCode className="h-5 w-5 text-primary" />, text: "SEO-Optimized Structure" },
    { icon: <Database className="h-5 w-5 text-primary" />, text: "Scalable & Secure Solutions" },
  ];

  return (
    <section id="webdev" className="bg-gradient-to-br from-slate/5 to-secondary/10 py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="h-48 bg-gradient-to-r from-primary to-primary/70"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Custom Solutions</h3>
                  <p className="text-slate-foreground text-sm">Tailored websites for your specific business needs</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-white row-span-2 sm:translate-y-4">
                <div className="h-72 bg-gradient-to-r from-secondary to-accent/50"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">E-commerce Development</h3>
                  <p className="text-slate-foreground text-sm">Powerful online stores with seamless checkout experience</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <div className="h-48 bg-gradient-to-r from-accent to-accent/60"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">CMS Integration</h3>
                  <p className="text-slate-foreground text-sm">Easy-to-manage content systems</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-white sm:-translate-y-4">
                <div className="h-48 bg-gradient-to-r from-primary/90 to-secondary"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Fast Performance</h3>
                  <p className="text-slate-foreground text-sm">Speed-optimized websites for better user experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Website Development <span className="text-primary">Expertise</span>
            </h2>
            
            <p className="text-lg text-slate-foreground">
              We build stunning, high-performance websites that represent your brand perfectly and convert visitors into customers. Our development team creates custom solutions for businesses of all sizes.
            </p>
            
            <ul className="space-y-4 py-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-white">
              See Our Web Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevSection;
