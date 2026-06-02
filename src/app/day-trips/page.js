import React from 'react';
import Link from 'next/link';
import { tourDatabase } from '@/data/tour-database';

export const metadata = {
  title: 'Best Marrakech Day Trips & Private Excursions | Sahara Star Tours',
  description:
    'Book the best private day trips from Marrakech. Visit Essaouira coast, hike the High Atlas valleys, dine in Agafay desert, or see Ouzoud waterfalls. Settle in for a custom day trip.',
};

export default function DayTrips() {
  const dayTrips = Object.keys(tourDatabase)
    .filter(key => tourDatabase[key].category === 'Day Trips')
    .map(key => ({
      key,
      ...tourDatabase[key]
    }));

  return (
    <div id="category-page">
      {/* --- CATEGORY HERO SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/atlas_mountains_valley.png" alt="High Atlas Mountains Valley - Sahara Star Tours" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Marrakech Day Escapes</span>
          <h1>Marrakech Day Trips & Private Excursions</h1>
          <p>Short on time? Escape the bustling Marrakech medina for a private day excursion to the Atlantic coast, the spectacular waterfalls, or the close-by stone deserts of Agafay.</p>
        </div>
      </section>

      {/* --- SEO COPYWRITING & INTRO SECTION --- */}
      <section className="agency-seo-showcase reveal active" id="seo-intro" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="seo-text-block">
            <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
              The Perfect Day Excursion
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'var(--font-serif)', marginTop: '10px' }}>
              Escape Marrakech in Absolute Comfort: Premium Private Day Trips
            </h2>
            <p style={{ marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Marrakech sits at the crossroads of some of Morocco's most spectacular and diverse landscapes. At <strong>Sahara Star Tours</strong>, we offer highly curated private <strong>day trips from Marrakech</strong> that let you experience coastal towns, mountain valleys, and stone deserts in a single day. Settle into your private, leather-seated Mercedes minivan and let our professional drivers navigate the scenic roads in comfort.
            </p>
            <p style={{ marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
              Choose your perfect escape: wander the quiet, whitewashed medina and historic harbor of windswept <strong>Essaouira Mogador</strong>, hike the green terraces and waterfalls of the <strong>Ourika Valley</strong>, play with wild Barbary apes at the giant <strong>Ouzoud Cascades</strong>, or cross anti-Atlas peaks to the UNESCO mud-brick fortress of <strong>Kasbah Ait Benhaddou</strong>. If you seek a magical desert experience without the long drive to Merzouga, our private sunset camel trek and candle-lit glamping dinner in the close-by <strong>Agafay Desert</strong> is the ultimate choice.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              All day tours include private airport or Riad transfers, local certified guiding fees, and can be fully tailored to your group size and wishes. Check out our 6 signature day excursions below and begin your adventure today.
            </p>
          </div>
        </div>
      </section>

      {/* --- TOURS LIST SECTION --- */}
      <section className="tours-section" id="category-tours" style={{ paddingTop: '40px' }}>
        <div className="section-header reveal active">
          <span className="tag">Explore Our Programs</span>
          <h2>SIGNATURE DAY TRIPS & EXCURSIONS</h2>
          <p>Select your perfect Moroccan itinerary. Every program below includes premium accommodations, VIP transport, and expert native guides, and can be fully customized to your travel pace.</p>
        </div>

        <div className="category-tours-wrapper">
          <div className="category-tour-grid" id="category-tour-grid" style={{ display: 'grid' }}>
            {dayTrips.map(tour => (
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
