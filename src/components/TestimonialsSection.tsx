
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{
  content: string;
  name: string;
  role: string;
  rating: number;
}> = ({ content, name, role, rating }) => {
  return (
    <Card className="bg-white shadow-lg border-none overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <Quote className="w-8 h-8 text-primary/20" />
        </div>
        <p className="text-slate mb-6">{content}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <span className="text-primary font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-slate-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const testimonials = [
  {
    content: "Perform Digi completely transformed our online presence. Their SEO expertise helped us reach the top of Google search results for our key industry terms.",
    name: "Rajiv Kumar",
    role: "CEO, TechSolutions India",
    rating: 5
  },
  {
    content: "The website they designed for us has significantly improved our conversion rates. Their team was responsive and delivered beyond our expectations.",
    name: "Priya Sharma",
    role: "Marketing Director, StyleHub",
    rating: 5
  },
  {
    content: "Their app development team built exactly what we needed. The app is user-friendly, stable, and has helped us connect better with our customers.",
    name: "Akash Singh",
    role: "Founder, QuickServe",
    rating: 4
  },
  {
    content: "Perform Digi's social media marketing strategies doubled our engagement and increased our sales by 40%. Extremely happy with their service!",
    name: "Neha Patel",
    role: "Owner, OrganicLiving",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-slate/5 to-secondary/10 py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-slate-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              content={item.content}
              name={item.name}
              role={item.role}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
