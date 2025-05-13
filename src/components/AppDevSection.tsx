
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Tablet 
} from 'lucide-react';

const AppDevSection: React.FC = () => {
  return (
    <section id="appdev" className="bg-white py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left slide-up">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              App Development for <span className="text-primary">Android & iOS</span>
            </h2>
            
            <p className="text-lg text-slate-foreground">
              Turn your app idea into reality with our expert mobile development team. We create native and cross-platform applications that deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Android Apps</h3>
                  <p className="text-sm text-slate-foreground">Native Android development</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Tablet className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">iOS Apps</h3>
                  <p className="text-sm text-slate-foreground">Custom iOS development</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-white">
                Explore App Development
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center fade-in">
            <div className="relative max-w-sm">
              {/* Phone mockup */}
              <div className="relative z-10 border-8 border-slate rounded-[3rem] overflow-hidden shadow-xl">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate rounded-t-lg"></div>
                <div className="h-[500px] w-[250px] bg-gradient-to-b from-primary/90 to-primary"></div>
                <div className="absolute bottom-3 inset-x-0 flex justify-center">
                  <div className="w-24 h-1 bg-white/80 rounded-full"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-accent rounded-lg rotate-12 z-0"></div>
              <div className="absolute bottom-20 -right-10 w-24 h-24 bg-secondary rounded-full z-0"></div>
              <div className="absolute -bottom-10 left-10 w-16 h-16 bg-primary/20 rounded-lg -rotate-12 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevSection;
