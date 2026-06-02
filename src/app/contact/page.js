import React, { Suspense } from 'react';
import ContactFormWrapper from '@/components/ContactFormWrapper';
import ContactFaq from '@/components/ContactFaq';

export const metadata = {
  title: 'Contact Sahara Star Tours | Premium Marrakech Travel Agency',
  description:
    'Get in touch with Sahara Star Tours in Marrakech. Request a custom Moroccan holiday itinerary draft, chat on WhatsApp, or read our trip planning FAQs.',
};

export default function Contact() {
  return (
    <div id="contact-page">
      {/* --- CONTACT HERO SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/tangier_coast.png" alt="Scenic Moroccan Atlantic Coastline in Tangier - Sahara Star Tours" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Bespoke Inquiry Center</span>
          <h1>Connect With Our Travel Designers</h1>
          <p>Let's plan your dream vacation. Drop us a message, email our design studio directly, or start an instant chat on WhatsApp with our local team in Marrakech.</p>
        </div>
      </section>

      {/* --- MAIN CONTACT CONTAINER --- */}
      <section className="contact-section" style={{ paddingTop: '80px', paddingBottom: '80px' }} id="contact">
        <div className="calculator-container reveal active" style={{ gridTemplateColumns: '1.1fr 1.3fr', gap: '4px', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left Column: Agency Info */}
          <div className="calc-inputs" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
                Office Coordinates
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '12px', fontFamily: 'var(--font-serif)', marginTop: '8px' }}>
                Sahara Star Tours Office
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Our travel designers are based in the heart of Marrakech medina. We specialize in curating comfortable, native Saharan expeditions and custom imperial city road tours.
              </p>
            </div>

            <hr style={{ border: 0, borderTop: '1px solid var(--glass-border)', margin: '6px 0' }} />

            {/* Contact Cards list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* 1. WhatsApp Instant Chat */}
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '16px', 
                  background: 'rgba(37, 211, 102, 0.05)', 
                  border: '1px dashed rgba(37, 211, 102, 0.3)', 
                  borderRadius: 'var(--radius-sm)', 
                  padding: '18px', 
                  transition: 'var(--transition-smooth)',
                  textDecoration: 'none'
                }}
                className="whatsapp-contact-card"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '2rem', color: '#25d366', marginTop: '2px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '4px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Instant WhatsApp Chat
                  </h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--text-muted)' }}>
                    Chat with our experts instantly. Quick advice on itinerary drafts, stays, and transfers.<br />
                    <strong style={{ color: '#25d366' }}>+212 600 000 000</strong>
                  </p>
                </div>
              </a>

              {/* 2. Email Studio */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '6px' }}>
                <i className="fa-regular fa-envelope" style={{ fontSize: '1.5rem', color: 'var(--sand-gold)', marginTop: '4px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Direct Design Studio Email
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Send your attachments, flights details or itineraries:<br />
                    <strong style={{ color: 'var(--sand-gold)' }}>designers@saharastartours.com</strong>
                  </p>
                </div>
              </div>

              {/* 3. Physical Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '6px' }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: '1.5rem', color: 'var(--terracotta)', marginTop: '4px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Bespoke Headquarters
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Office 14, Rue Riad Zitoun el Kedim,<br />
                    Medina Center, Marrakech 40000, Morocco
                  </p>
                </div>
              </div>

              {/* 4. Operating Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '6px' }}>
                <i className="fa-regular fa-clock" style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginTop: '4px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '2px', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Opening Hours
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Monday - Sunday: 8:00 AM - 10:00 PM<br />
                    (Marrakech local time - GMT+1)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Inquiry Form */}
          <div className="calc-summary-wrapper" style={{ padding: '0' }}>
            <div className="calc-summary" style={{ background: 'rgba(30, 26, 24, 0.9)', border: '1px solid var(--glass-border)', padding: '35px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--sand-gold)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                Request a Custom Proposal
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '25px' }}>
                Settle in for an outstanding, tailormade draft itinerary prepared and delivered under 24 hours.
              </p>

              <Suspense fallback={<div style={{ color: 'var(--text-muted)' }}>Loading form specifications...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </div>

        </div>
      </section>

      {/* --- ACCORDION FAQ SECTION --- */}
      <section className="pillars-section" style={{ paddingTop: '60px', paddingBottom: '80px', background: 'rgba(18, 14, 12, 0.5)' }}>
        <div className="section-header reveal active">
          <span className="tag">Trip Planner FAQs</span>
          <h2>Planning Your Morocco Tour</h2>
          <p>Have questions about bookings, customizations, or payments? Find swift local answers here.</p>
        </div>

        <ContactFaq />
      </section>
    </div>
  );
}
