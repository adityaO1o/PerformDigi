
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WebDevSection from '@/components/WebDevSection';
import AppDevSection from '@/components/AppDevSection';
import CreativeSection from '@/components/CreativeSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import DelhiSection from '@/components/DelhiSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add slide-in animations when elements come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cast to HTMLElement to access style property
          const element = entry.target as HTMLElement;
          
          if (element.classList.contains('slide-up')) {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
          } else if (element.classList.contains('fade-in')) {
            element.style.animation = 'fadeIn 0.8s ease-out forwards';
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WebDevSection />
        <AppDevSection />
        <CreativeSection />
        <ClientsSection />
        <TestimonialsSection />
        <FaqSection />
        <DelhiSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
