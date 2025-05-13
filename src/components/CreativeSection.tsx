
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Image, VideoIcon, PenTool } from 'lucide-react';

const CreativeSection: React.FC = () => {
  const services = [
    {
      icon: <Image className="h-8 w-8 text-primary" />,
      title: "Graphic Design",
      description: "Eye-catching visuals that reflect your brand identity and connect with your audience."
    },
    {
      icon: <VideoIcon className="h-8 w-8 text-primary" />,
      title: "Video Production",
      description: "Engaging videos that tell your brand story and showcase your products or services."
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Branding & Identity",
      description: "Comprehensive branding solutions that make your business memorable and distinctive."
    }
  ];

  return (
    <section id="creative" className="bg-gradient-to-br from-white to-secondary/10 py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creative Services</h2>
          <p className="text-slate-foreground max-w-2xl mx-auto">
            Stand out from the competition with our professional creative solutions that elevate your brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-40 bg-gradient-to-r from-primary/80 to-secondary flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in">
          <p className="text-lg font-medium text-primary">
            Let's bring your creative vision to life
          </p>
          <h3 className="text-2xl font-bold mt-2 mb-6">
            High-quality creative work that captures attention and drives results
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-semibold">Logos</span>
            </div>
            <div className="w-24 h-24 bg-secondary/20 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-semibold">Flyers</span>
            </div>
            <div className="w-24 h-24 bg-accent/20 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-semibold">Social</span>
            </div>
            <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-semibold">Banners</span>
            </div>
            <div className="w-24 h-24 bg-secondary/20 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-semibold">Videos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
