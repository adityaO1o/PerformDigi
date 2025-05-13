
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-slate-foreground">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive range of digital marketing services including SEO, website development, app development, social media marketing, content creation, PPC advertising, email marketing, and more. We tailor our services to meet the specific needs of each client."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy that typically shows initial results within 3-6 months. However, the exact timeline depends on various factors such as your website's current state, competition in your industry, and the specific keywords you're targeting."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer ongoing website maintenance services to keep your site secure, updated, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support."
    },
    {
      question: "How much does a typical digital marketing campaign cost?",
      answer: "The cost varies depending on your business goals, target audience, and the scope of services required. We create customized packages based on your specific needs and budget. We're happy to provide a detailed quote after understanding your requirements."
    },
    {
      question: "Do you work with businesses outside of Delhi?",
      answer: "Yes, while we're based in Delhi, we work with clients across India and internationally. Our digital nature allows us to collaborate effectively with businesses anywhere in the world."
    },
    {
      question: "How long does it take to develop a website or app?",
      answer: "Website development typically takes 4-8 weeks depending on complexity, while app development can range from 8-16 weeks. We'll provide you with a specific timeline based on your project requirements during our initial consultation."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-foreground max-w-2xl mx-auto">
            Find answers to common questions about our digital marketing services.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 fade-in">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
