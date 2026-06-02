import React from 'react';
import Link from 'next/link';
import { tourDatabase } from '@/data/tour-database';

export const metadata = {
  title: 'Premium Morocco Desert Tours & Luxury Sahara Safaris | Sahara Star Tours',
  description:
    'Embark on the ultimate private Morocco desert tours. Luxury Sahara desert glamping in Erg Chebbi, sunset camel trekking, and High Atlas road trips. Book today!',
};

export default function DesertTours() {
  // Filter for Desert Tours (or 'Desert Expedition' category)
  const desertTours = Object.keys(tourDatabase)
    .filter(key => tourDatabase[key].category === 'Desert Tours' || tourDatabase[key].category === 'Desert Expedition')
    .map(key => ({
      key,
      ...tourDatabase[key]
    }));

  return (
    <div id="category-page">
      {/* --- CATEGORY HERO SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/hero_sahara_sunset.png" alt="Luxury Sahara Desert Glamping Camp Sunset - Sahara Star Tours" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Bespoke Sahara Adventures</span>
          <h1>Morocco Desert Tours & Luxury Sahara Safaris</h1>
          <p>Cross the monumental peaks of the High Atlas, wander ancient Kasbahs, and sleep inside luxurious, zellige-floored nomadic camps amidst the glowing golden dunes of Erg Chebbi.</p>
        </div>
      </section>

      {/* --- SEO COPYWRITING & INTRO SECTION --- */}
      <section className="agency-seo-showcase reveal active" id="seo-intro" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="seo-text-block">
            <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
              The Ultimate Saharan Expedition
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'var(--font-serif)', marginTop: '10px' }}>
              Discover the Majestic Magic of Sahara Desert Tours with Sahara Star Tours
            </h2>
            <p style={{ marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Nothing captures the imagination quite like the vast, whispering dunes of the Sahara Desert. At <strong>Sahara Star Tours</strong>, we specialize in turning this ancient desert dream into an absolute, luxurious reality. Our bespoke <strong>Morocco Sahara desert tours packages</strong> are carefully crafted point-by-point, taking you on scenic, private drives through spectacular anti-Atlas gorges, lush green palm oases, and UNESCO-listed clay fortresses like the iconic Kasbah Ait Benhaddou.
            </p>
            <p style={{ marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
              Whether you are looking to embark on an immediate <strong>Marrakech to Merzouga desert tour</strong> via the winding Tizi n'Tichka pass or want to plan a grand <strong>Casablanca to Sahara desert tour</strong> that spans imperial medinas, our local Saharan-born guides ensure your journey is safe, comfortable, and deeply authentic. Ride camels into the glowing Erg Chebbi sunset, dine on three-course gourmet Berber tagines under a canvas of millions of bright stars, and sleep in high-end luxury glamping tents featuring en-suite private bathrooms and hot running showers.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              We leverage a premium fleet of climate-controlled Mercedes minivans and robust 4x4 off-road transporters to navigate Morocco's scenic passes in style. With departure options starting from Marrakech, Casablanca, and Fes, we cater perfectly to couples, families, and solo adventurers looking for the finest, tailored Moroccan desert crossing. Browse our premier programs below and start planning your custom expedition today.
            </p>
          </div>
        </div>
      </section>

      {/* --- TOURS LIST SECTION --- */}
      <section className="tours-section" id="category-tours" style={{ paddingTop: '40px' }}>
        <div className="section-header reveal active">
          <span className="tag">Explore Our Programs</span>
          <h2>SIGNATURE DESERT TOURS</h2>
          <p>Select your perfect Moroccan itinerary. Every program below includes premium accommodations, VIP transport, and expert native guides, and can be fully customized to your travel pace.</p>
        </div>

        <div className="category-tours-wrapper">
          <div className="category-tour-grid" id="category-tour-grid" style={{ display: 'grid' }}>
            {desertTours.map(tour => (
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
