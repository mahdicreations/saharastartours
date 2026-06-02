'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "How early should we book our custom Morocco tour?",
    answer: "We recommend booking your premium tour <strong>3 to 6 months in advance</strong>, especially if you are traveling during high season (Spring and Autumn) or Christmas holidays. This guarantees availability inside the finest boutique Riads in Fes/Marrakech and the premium desert glamping camp suites."
  },
  {
    question: "Can we fully customize the day-by-day itineraries?",
    answer: "<strong>Absolutely!</strong> Every single tour and day trip shown on our website serves as a benchmark framework. Our Marrakech travel designers customize every single circuit point-by-point. We can adjust the pacing, accommodation types, local guides, dietary configurations, and starting/ending hubs to align perfectly with your wishes."
  },
  {
    question: "What accommodations are included in the boutique/palace packages?",
    answer: "We offer three distinct tiers of luxury. The <strong>Authentic Riad</strong> tier features highly reviewed, character-rich traditional guesthouses. The <strong>Boutique Luxury</strong> tier includes upscale Riads with courtyard pools, premium amenities, and gorgeous en-suite design. The <strong>Royal Palace</strong> tier features premium 5-star palatial retreats and absolute VIP Saharan suites."
  },
  {
    question: "What is your secure booking and cancellation policy?",
    answer: "To secure your bespoke Moroccan circuit booking, a <strong>20% security deposit</strong> is registered via our safe online booking portal. The remaining 80% balance is settled upon landing at your arrival gateway. Cancellations registered more than 30 days prior to departure receive a complete refund of deposit fees."
  }
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }} className="reveal active">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            className="faq-item" 
            style={{ 
              background: 'var(--night-surface)', 
              border: isOpen ? '1px solid rgba(217, 107, 67, 0.3)' : '1px solid var(--glass-border)', 
              borderRadius: 'var(--radius-sm)', 
              overflow: 'hidden', 
              transition: 'var(--transition-smooth)' 
            }}
            key={idx}
          >
            <button 
              className="faq-trigger" 
              onClick={() => toggleFaq(idx)}
              style={{ 
                width: '100%', 
                padding: '20px', 
                background: 'none', 
                border: 'none', 
                outline: 'none', 
                textAlign: 'left', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                cursor: 'pointer', 
                color: 'var(--text-main)', 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.1rem', 
                fontWeight: '500' 
              }}
            >
              <span>{faq.question}</span>
              <i 
                className="fa-solid fa-chevron-down" 
                style={{ 
                  fontSize: '0.9rem', 
                  color: isOpen ? 'var(--terracotta)' : 'var(--sand-gold)', 
                  transform: isOpen ? 'rotate(180deg)' : '', 
                  transition: 'var(--transition-smooth)' 
                }}
              ></i>
            </button>
            <div 
              className="faq-answer" 
              style={{ 
                maxHeight: isOpen ? '500px' : '0px', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
            >
              <p 
                style={{ padding: '0 20px 20px 20px', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)', fontWeight: '300' }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
