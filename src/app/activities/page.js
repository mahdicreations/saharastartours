import React from 'react';
import Link from 'next/link';
import { tourDatabase } from '@/data/tour-database';

export const metadata = {
  title: 'Best Marrakech Adventure Activities & Guided Tours | Sahara Star Tours',
  description:
    'Book the best Marrakech activities. Guided quad biking, buggy safaris, desert camel rides, horse riding palm groves, and hot air balloon flights. Book online today.',
};

export default function Activities() {
  const activities = Object.keys(tourDatabase)
    .filter(key => tourDatabase[key].category === 'Activities')
    .map(key => ({
      key,
      ...tourDatabase[key]
    }));

  return (
    <div id="category-page">
      {/* --- CATEGORY HERO SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/casablanca_gateway.png" alt="Marrakech Palm Groves - Sahara Star Tours" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Marrakech Adventures</span>
          <h1>Marrakech Adventure Activities & Safaris</h1>
          <p>Inject thrill into your Marrakech stay. Settle into high-speed quad biking trails, Polaris buggy desert raids, horse riding at sunset, or float high above the Jbilet desert in a hot air balloon.</p>
        </div>
      </section>

      {/* --- SEO COPYWRITING & INTRO SECTION --- */}
      <section className="agency-seo-showcase reveal active" id="seo-intro" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="seo-text-block">
            <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
              The Ultimate Thrill
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'var(--font-serif)', marginTop: '10px' }}>
              Action-Packed Experiences & Desert Safaris in Marrakech
            </h2>
            <p style={{ marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Marrakech’s Jbilet stone desert and historic Palm Groves are the perfect playgrounds for high-adrenaline outdoor sports. At <strong>Sahara Star Tours</strong>, we offer premium, guided <strong>Marrakech activities</strong> that add excitement, speed, and unforgettable perspectives to your Moroccan holiday.
            </p>
            <p style={{ marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
              Settle into your choice of adventure: race through dry riverbeds and mud trails on high-power <strong>Yamaha Quads</strong> or <strong>Polar Polaris Buggies</strong>, ride beautiful Arabian stallions past historic palm orchards, or take a peaceful <strong>camel caravan walk</strong> dressed in traditional Tuareg blue robes. For a truly magical sunrise view, float 1,000 meters high above anti-Atlas ranges inside a private <strong>hot air balloon basket</strong>, followed by a fresh Berber tent breakfast. In the evening, enjoy the spectacular <strong>Fantasia Chez Ali show</strong>, complete with Moroccan equestrian riders charging, fire dancers, and a royal palace feast.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              All activities include private, climate-controlled hotel pickup and drop-off, certified safety instructors, premium gear, and traditional mint tea breaks. Review our 6 signature adventure programs below and book your custom slots online.
            </p>
          </div>
        </div>
      </section>

      {/* --- TOURS LIST SECTION --- */}
      <section className="tours-section" id="category-tours" style={{ paddingTop: '40px' }}>
        <div className="section-header reveal active">
          <span className="tag">Explore Our Programs</span>
          <h2>SIGNATURE ADVENTURES & GUIDED ACTIVITIES</h2>
          <p>Select your perfect Moroccan itinerary. Every program below includes premium accommodations, VIP transport, and expert native guides, and can be fully customized to your travel pace.</p>
        </div>

        <div className="category-tours-wrapper">
          <div className="category-tour-grid" id="category-tour-grid" style={{ display: 'grid' }}>
            {activities.map(tour => (
              <div className="tour-card reveal active" key={tour.key}>
                <div className="tour-badge">{tour.category}</div>
                <div className="tour-img-wrapper">
                  <img src={tour.image} alt={tour.title} />
                </div>
                <div className="tour-info">
                  <div className="tour-meta">
                    <div><i className="fa-regular fa-clock"></i> {tour.duration}</div>
                    <div><i className="fa-solid fa-star"></i> {tour.rating.split(' ')[0]}</div>
                  </div>
                  <h3 className="tour-title">{tour.title}</h3>
                  <p className="tour-desc">
                    {tour.itinerary[0] ? tour.itinerary[0].desc : ''}
                  </p>
                  <div className="tour-footer">
                    <div className="tour-price">
                      From per person
                      <span>{tour.price}</span>
                    </div>
                    <Link href={`/tours/${tour.key}`} className="btn btn-secondary btn-sm">
                      View Itinerary
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
