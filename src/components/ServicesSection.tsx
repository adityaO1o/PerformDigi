
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Smartphone, 
  Globe, 
  Briefcase, 
  Image, 
  MessageSquare, 
  BarChart, 
  Mail 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <CardContent className="p-6 text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const services = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "SEO Optimization",
    description: "Boost your website's visibility with our expert SEO strategies tailored for Delhi businesses."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Custom websites designed to convert visitors into customers with modern UX/UI principles."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android and iOS devices."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable results and ROI for your business."
  },
  {
    icon: <Image className="w-8 h-8 text-primary" />,
    title: "Creative Design",
    description: "Eye-catching visuals and branding that make your business stand out from competitors."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Social Media",
    description: "Strategic social media management to build community and drive engagement."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Business Strategy",
    description: "Comprehensive digital transformation and marketing strategy consulting."
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture leads and retain customers effectively."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow online and reach new customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
