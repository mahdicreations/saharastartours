import React from 'react';

export const metadata = {
  title: 'About Sahara Star Tours | Premium Bespoke Morocco Travel Agency',
  description:
    'Discover the story of Sahara Star Tours, a premium boutique travel agency based in Marrakech, Morocco. Meet our local guides, view our luxury Mercedes fleet, and explore our travel pillars.',
};

export default function About() {
  return (
    <div id="about-page">
      {/* --- CINEMATIC ABOUT HERO --- */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/assets/hero_sahara_sunset.png" alt="Sahara Desert Sunset Luxury Glamping" />
        </div>
        <div className="hero-gradient"></div>

        <div className="about-hero-content">
          <span className="subtitle">Our Story & Heritage</span>
          <h1>Crafting Bespoke Morocco Expeditions</h1>
          <p>Locally owned and operated by native guides, Sahara Star Tours transforms travel dreams into highly curated, comfortable Saharan adventures.</p>
        </div>
      </section>

      {/* --- STORY SHOWCASE --- */}
      <section className="about-story-section reveal active">
        <div className="about-story-text">
          <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 600 }}>
            Marrakech Born
          </span>
          <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>
            The Heart & Soul of Sahara Star Tours
          </h3>
          <p>Founded in Marrakech by native Saharan nomads and expert medina guides, Sahara Star Tours was built upon a simple philosophy: to make the deep magic, ancient histories, and wild terrains of Morocco accessible in absolute, luxurious comfort.</p>
          <p>We do not believe in mass-market tourism. To us, every circuit is an intimate, point-by-point story waiting to be told. Whether you are climbing the rocky pathways of the High Atlas, sharing mint tea inside a nomad's woolen tent, or winding through Fes' ancient spice souks, our team ensures your journey is safe, authentic, and utterly unforgettable.</p>
        </div>

        <div className="about-story-img">
          <img src="/assets/atlas_mountains_valley.png" alt="Scenic Atlas Mountains Valley and Berber Houses" />
        </div>
      </section>

      {/* --- FOUR CORE TRAVEL PILLARS --- */}
      <section className="pillars-section">
        <div className="section-header reveal active">
          <span className="tag">Our Philosophy</span>
          <h2>The Pillars of Our Bespoke Expeditions</h2>
          <p>Sahara Star Tours stands for visual excellence, deep local pride, and luxury comfort. We craft our signature packages around four core values.</p>
        </div>

        <div className="pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card reveal active">
            <div className="pillar-card-icon"><i className="fa-solid fa-compass"></i></div>
            <h4>Deep Authenticity</h4>
            <p>We leverage our local heritage to unlock secret medina gates, arrange private Riad cooking masterclasses, and guide you off ancient rally tracks to meet Saharan nomad families.</p>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card reveal active">
            <div className="pillar-card-icon"><i className="fa-solid fa-award"></i></div>
            <h4>Absolute Comfort</h4>
            <p>From climate-controlled VIP Mercedes transporters to high-end desert glamping camps featuring warm private showers and plush zellige-floored suites in the middle of Erg Chebbi.</p>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card reveal active">
            <div className="pillar-card-icon"><i className="fa-solid fa-sliders"></i></div>
            <h4>Bespoke Tailoring</h4>
            <p>Every single itinerary day is customizable point-by-point. We seamlessly accommodate dietary requests, Riad pool preferences, custom departure dates, and mobility needs.</p>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card reveal active">
            <div className="pillar-card-icon"><i className="fa-solid fa-leaf"></i></div>
            <h4>Sustainable Footprint</h4>
            <p>We directly support Berber village hosts, cooperative argan-pressing women groups, and local guides, ensuring our travels respect fragile ecosystems and support remote economies.</p>
          </div>
        </div>
      </section>

      {/* --- FLEET & CREW SHOWCASE --- */}
      <section className="fleet-section">
        <div className="section-header reveal active">
          <span className="tag">Bespoke Assets</span>
          <h2>Our Premium Fleet & Native Crew</h2>
          <p>Luxury travel requires the best equipment and the most knowledgeable guides. Discover the Sahara Star Tours standard.</p>
        </div>

        <div className="fleet-grid">
          {/* Card 1 */}
          <div className="fleet-card reveal active">
            <div className="fleet-img-wrapper">
              <img src="/assets/camel_trek_dunes.png" alt="Native Nomadic Guides leading camel safaris" />
            </div>
            <div className="fleet-info">
              <span className="fleet-tag">Our Guides</span>
              <h4>Expert Native Storytellers</h4>
              <p>Our professional, English-speaking guides are native Saharan nomads or certified medina historians. They bring ancient clay Kasbahs and colorful souk spice alleys to life with deep local secrets.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fleet-card reveal active">
            <div className="fleet-img-wrapper">
              <img src="/assets/marrakech_riad_pool.png" alt="High-End VIP Mercedes Minivan transportation fleet" />
            </div>
            <div className="fleet-info">
              <span className="fleet-tag">VIP Fleet</span>
              <h4>Mercedes-Benz VIP Transport</h4>
              <p>Travel Morocco's scenic passes in absolute style. Our fleet of VIP Mercedes minivans and robust 4x4s feature soft leather seating, high-speed climate control, panoramic sunroofs, and cold refreshments.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="fleet-card reveal active">
            <div className="fleet-img-wrapper">
              <img src="/assets/hero_sahara_sunset.png" alt="Sahara Star Tours Luxury Desert Glamping Camp setup" />
            </div>
            <div className="fleet-info">
              <span className="fleet-tag">Bespoke Stays</span>
              <h4>Luxury Sahara Desert Glamping</h4>
              <p>Sleep under millions of bright stars in Erg Chebbi. Our luxury desert glamping setups feature king-sized bedding, en-suite private bathrooms, hot running showers, and authentic Berber zellige decor.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
