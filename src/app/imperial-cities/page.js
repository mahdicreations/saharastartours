import React from 'react';
import Link from 'next/link';
import { tourDatabase } from '@/data/tour-database';

export const metadata = {
  title: 'Premium Morocco Imperial Cities Tours & Cultural Packages | Sahara Star Tours',
  description:
    'Discover the historic Imperial Cities of Morocco: Marrakech, Fes, Meknes, and Rabat. Stay in hand-selected premium Riads, tour medieval medinas, and book today.',
};

export default function ImperialCities() {
  const imperialTours = Object.keys(tourDatabase)
    .filter(key => tourDatabase[key].category === 'Imperial Cities' || tourDatabase[key].category === 'Cultural Heritage')
    .map(key => ({
      key,
      ...tourDatabase[key]
    }));

  return (
    <div id="category-page">
      {/* --- CATEGORY HERO SECTION --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/marrakech_riad_pool.png" alt="Marrakech Riad Courtyard Pool - Sahara Star Tours" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Bespoke Cultural Stays</span>
          <h1>Morocco Imperial Cities & Riad Retreats</h1>
          <p>Wander through towering clay fortress gateways, trace labyrinthine medieval medina souks, and settle inside hand-crafted en-suite boutique palaces in Morocco's historic capitals.</p>
        </div>
      </section>

      {/* --- SEO COPYWRITING & INTRO SECTION --- */}
      <section className="agency-seo-showcase reveal active" id="seo-intro" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <div className="seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="seo-text-block">
            <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
              The Imperial Heritage
            </span>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'var(--font-serif)', marginTop: '10px' }}>
              Step Back in Time with Our Private Imperial Cities Tours
            </h2>
            <p style={{ marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Morocco’s history is preserved inside the towering adobe walls of its four historic imperial capitals: Marrakech, Fes, Meknes, and Rabat. At <strong>Sahara Star Tours</strong>, our private itineraries invite you to experience this rich, living heritage in absolute comfort. We provide expert, certified medina guides who share the deep stories behind historic monuments like the 14th-century Bou Inania Madrasa, the mosaic courtyards of Bahia Palace, and the ancient Roman ruins of Volubilis.
            </p>
            <p style={{ marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
              Our <strong>Morocco imperial cities tour packages</strong> are tailored to your travel pace. Stay inside hand-selected, 5-star boutique Riads featuring emerald pools and quiet courtyards, away from the bustling medina noise. Settle in for traditional hands-on cooking masterclasses, trace the centuries-old manual tanning vats at Chouara Tannery in Fes, and enjoy private, climate-controlled Mercedes minivan transfers across the country.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              From Casablanca arrivals to Marrakech departures, we design seamless custom circuits matching your preferences. Browse our signature cultural programs below and connect with our Marrakech planning experts to draft your tailored dream vacation.
            </p>
          </div>
        </div>
      </section>

      {/* --- TOURS LIST SECTION --- */}
      <section className="tours-section" id="category-tours" style={{ paddingTop: '40px' }}>
        <div className="section-header reveal active">
          <span className="tag">Explore Our Programs</span>
          <h2>SIGNATURE IMPERIAL CITIES TOURS</h2>
          <p>Select your perfect Moroccan itinerary. Every program below includes premium accommodations, VIP transport, and expert native guides, and can be fully customized to your travel pace.</p>
        </div>

        <div className="category-tours-wrapper">
          <div className="category-tour-grid" id="category-tour-grid" style={{ display: 'grid' }}>
            {imperialTours.map(tour => (
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
