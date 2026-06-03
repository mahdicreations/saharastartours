'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { tourDatabase } from '@/data/tour-database';
import CostCalculator from '@/components/CostCalculator';
import ReviewsSlider from '@/components/ReviewsSlider';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Desert Tours');
  const [prefilledData, setPrefilledData] = useState(null);

  // List of categories and counts
  const categories = [
    { name: 'Desert Tours', count: 6 },
    { name: 'Imperial Cities', count: 3 },
    { name: 'Day Trips', count: 6 },
    { name: 'Activities', count: 6 }
  ];

  // Filter tours by category and cap them to maximum count
  const filteredTours = Object.keys(tourDatabase)
    .filter(key => tourDatabase[key].category === activeCategory)
    .slice(0, 6)
    .map(key => ({
      key,
      ...tourDatabase[key]
    }));

  const handleInquire = (plan) => {
    // Set the prefilled state to sync with BookingForm
    setPrefilledData({
      package: 'none',
      travelers: `${plan.people} ${plan.people === 1 ? 'Traveler' : 'Travelers'}`,
      message: `I would like to request a formal custom proposal based on the following custom plan preferences:
- Duration: ${plan.days} Days / ${plan.days - 1} Nights
- Accommodations: ${plan.tier} Tier
- Included Activities: ${plan.addons}
- Group Size: ${plan.people} ${plan.people === 1 ? 'Traveler' : 'Travelers'}

(Looking forward to receiving your custom suggestions!)`
    });

    // Scroll smoothly to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.focus();
      }, 800);
    }
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="hero" id="hero">
        <div className="hero-background">
          <img src="/assets/hero_sahara_sunset.png" alt="Sahara Desert Sunset Luxury Camp" />
        </div>
        <div className="hero-gradient"></div>

        <div className="hero-content">
          <span className="subtitle">Sahara Star Tours | Bespoke Journeys & Luxury Escapes</span>
          <h1>Experience the Majestic Magic of Morocco with <span>Sahara Star Tours</span></h1>
          <p>Embark on tailor-made private tours, luxury Sahara Desert safaris, and epic imperial city expeditions across Morocco with our premier locally-owned travel agency.</p>
          <div className="hero-btns">
            <a href="#tours" className="btn btn-primary">Explore Our Tours</a>
            <a href="#planner" className="btn btn-secondary">Custom Price Estimator</a>
          </div>
        </div>
      </section>

      {/* --- SIGNATURE TOURS SHOWCASE --- */}
      <section className="tours-section" id="tours">
        <div className="section-header reveal active">
          <span className="tag">Featured Destinations: Let's Explore Morocco</span>
          <h2>FEATURED TOURS & DAY TRIPS</h2>
          <p className="promo-title">Discover the Beauty of Morocco: Book Morocco Desert Tours Today!</p>
          <div className="discount-badge-container">
            <span className="discount-badge">
              <i className="fa-solid fa-gift"></i> Limited Offer: Save 20% on Sahara Desert Tours!
            </span>
          </div>
        </div>

        {/* Category Tabs Selector */}
        <ul className="category-tabs reveal active">
          {categories.map(cat => (
            <li 
              key={cat.name}
              className={`category-tab ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name} <span>({cat.count})</span>
            </li>
          ))}
        </ul>

        {/* Showcase Grid */}
        <div className="category-showcase-container">
          <div className="category-tours-wrapper">
            <div className="category-tour-grid" id="category-tour-grid" style={{ display: 'grid', transition: 'opacity 0.3s ease' }}>
              {filteredTours.map(tour => (
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
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STARTING CITIES --- */}
      <section className="starting-cities-section" id="starting-cities">
        <div className="section-header reveal active">
          <span className="tag">Featured Destinations: Best cities to Start your Morocco Tours</span>
          <h2>Best Cities to Start Your Morocco Tours</h2>
          <p>let's explore the best of Morocco and discover the best Morocco Desert, cultural, Family, and private Tours</p>
        </div>

        <div className="starting-cities-grid reveal active">
          {/* Casablanca */}
          <div className="city-card">
            <div className="city-img-wrapper">
              <img src="/assets/casablanca_gateway.png" alt="Casablanca Departure Hub - Hassan II Mosque" />
              <div className="city-badge">Casablanca Departure</div>
            </div>
            <div className="city-content">
              <h3>Casablanca Gateway</h3>
              <p>As Morocco's primary international gateway, starting your journey in Casablanca is perfect for long, grand expeditions. Settle in and explore the magnificent Hassan II Mosque before venturing into the imperial or desert routes.</p>
              <div className="city-meta">
                <span><i className="fa-solid fa-route"></i> Starts Grand Tours: 16, 15, 13, 11, 10, 8, 7 Days</span>
                <span><i className="fa-solid fa-plane-arrival"></i> Main International Hub</span>
              </div>
              <div className="city-footer">
                <Link href="/tours/16-day-casablanca" className="btn btn-secondary btn-sm">
                  Explore Casablanca Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Marrakech */}
          <div className="city-card">
            <div className="city-img-wrapper">
              <img src="/assets/marrakech_riad_pool.png" alt="Marrakech Departure Hub - Riad Pool" />
              <div className="city-badge">Marrakech Departure</div>
            </div>
            <div className="city-content">
              <h3>Marrakech Oasis</h3>
              <p>The beating cultural heart of Morocco. Launching your tour from Marrakech offers immediate immersion into ancient medina life and swift access to the Sahara Desert via the dramatic High Atlas mountain passes.</p>
              <div className="city-meta">
                <span><i className="fa-solid fa-route"></i> Starts Desert Safaris: 5, 4, 3 Days & Day Trips</span>
                <span><i className="fa-solid fa-map-pin"></i> Desert & Atlas Gateway</span>
              </div>
              <div className="city-footer">
                <Link href="/tours/4-day-marrakech-desert" className="btn btn-secondary btn-sm">
                  Explore Marrakech Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Fes */}
          <div className="city-card">
            <div className="city-img-wrapper">
              <img src="/assets/fes_medina_gate.png" alt="Fes Departure Hub - Bab Boujloud" />
              <div className="city-badge">Fes Departure</div>
            </div>
            <div className="city-content">
              <h3>Fes Imperial Capital</h3>
              <p>Step back in time by starting in Fes, the intellectual and spiritual capital of Morocco. Home to the world's oldest medieval active medina, it is the premier launching pad for authentic cultural and desert crossings.</p>
              <div className="city-meta">
                <span><i className="fa-solid fa-route"></i> Starts Cultural & Sahara Desert Connections</span>
                <span><i className="fa-solid fa-book-open"></i> Ancient Spiritual Heart</span>
              </div>
              <div className="city-footer">
                <Link href="/tours/3-day-marrakech-fes" className="btn btn-secondary btn-sm">
                  Explore Fes Tours
                </Link>
              </div>
            </div>
          </div>

          {/* Tangier */}
          <div className="city-card">
            <div className="city-img-wrapper">
              <img src="/assets/tangier_coast.png" alt="Tangier Departure Hub - Coastal View" />
              <div className="city-badge">Tangier Departure</div>
            </div>
            <div className="city-content">
              <h3>Tangier Coastal Gate</h3>
              <p>Where the Mediterranean meets the Atlantic, and Europe meets Africa. Starting in Tangier allows you to trace the beautiful northern coasts, explore the blue city of Chefchaouen, and descend into the deep south.</p>
              <div className="city-meta">
                <span><i className="fa-solid fa-route"></i> Starts Northern Morocco & Imperial Explorations</span>
                <span><i className="fa-solid fa-anchor"></i> Maritime Gate of Africa</span>
              </div>
              <div className="city-footer">
                <Link href="/about" className="btn btn-secondary btn-sm">
                  Explore Tangier Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BESPOKE TRIP PLANNER --- */}
      <section className="calculator-section" id="planner">
        <div className="section-header reveal active">
          <span className="tag">Bespoke Planner</span>
          <h2>Custom Itinerary Draft Designer</h2>
          <p>Design your custom dream vacation. Adjust the duration, group size, stays, and experiences below, and prepare for a beautifully tailored hour-by-hour itinerary draft from our Marrakech travel experts.</p>
        </div>

        <CostCalculator onInquire={handleInquire} />
      </section>

      {/* --- CULTURAL HERITAGE SHOWCASE --- */}
      <section className="culture-section" id="culture">
        <div className="section-header reveal active">
          <span className="tag">Moroccan Heritage</span>
          <h2>Immerse in Our Traditions</h2>
          <p>Bespoke travel isn't just about scenic locations; it's about connecting deep with ancient cultures. Discover the rituals that make Morocco unforgettable.</p>
        </div>

        <div className="culture-slider reveal active">
          {/* Card 1 */}
          <div className="culture-card">
            <div className="culture-img">
              <img src="/assets/marrakech_riad_pool.png" alt="Moroccan Architecture and Zellige Tiles" />
            </div>
            <div className="culture-info">
              <h3>The Geometric Art of Zellige</h3>
              <p>Moroccan tilework or Zellige is a mastercraft of hand-cut enameled terra-cotta tiles, aligned into mind-bending geometric arrays that adorn beautiful palaces and quiet medina Riads.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="culture-card">
            <div className="culture-img">
              <img src="/assets/hero_sahara_sunset.png" alt="Berber Mint Tea Ceremony ritual" />
            </div>
            <div className="culture-info">
              <h3>Mint Tea Welcoming Ritual</h3>
              <p>Often termed 'Berber whiskey', Moroccan mint tea is poured gracefully from high heights to create a frothy crown. Sharing tea is the country's primary ritual of absolute hospitality.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="culture-card">
            <div className="culture-img">
              <img src="/assets/chefchaouen_street.png" alt="Moroccan Souk Spices and Aromatics" />
            </div>
            <div className="culture-info">
              <h3>Aromatic Spices & Souks</h3>
              <p>From warm orange saffron to clay-red ras el hanout, spice pyramids in the chaotic souks are a sensory treat. Spices are essential elements in slow-cooked tagine masterworks.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="culture-card">
            <div className="culture-img">
              <img src="/assets/camel_trek_dunes.png" alt="Desert Hospitality Nomad heritage" />
            </div>
            <div className="culture-info">
              <h3>Desert Nomadic Customs</h3>
              <p>The Sahara is a place of deep silence and rich community. Sleep in custom woolen tents, gather around firewood, and trace celestial skies under the direct tutelage of native Sahara guides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRAVELER REVIEWS --- */}
      <section className="reviews-section" id="reviews">
        <div className="section-header reveal active">
          <span className="tag">Traveler Stories</span>
          <h2>Loved by Global Explorers</h2>
        </div>

        <ReviewsSlider />
      </section>

      {/* --- SEO NARRATIVE --- */}
      <section className="agency-seo-showcase reveal active" id="seo-details">
        <div className="seo-grid">
          <div className="seo-text">
            <span className="tag" style={{ color: 'var(--sand-gold)', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.9rem', fontWeight: 600 }}>
              Morocco Travel Experts
            </span>
            <h3>Bespoke Journeys Crafted by <span>Sahara Star Tours</span></h3>
            <p>As the premier locally-owned travel agency in Marrakech, <strong>Sahara Star Tours</strong> is dedicated to unlocking the deep visual splendor, historical medinas, and rich cultural traditions of Morocco in absolute comfort.</p>
            <p>Our custom point-by-point route maps and day-by-day itineraries are designed by native guides who possess a deep, lifelong connection to the land. Whether you seek a romantic sunset camel safari in Erg Chebbi, an educational walking tour of ancient Fes, or a sunrise hot air balloon flight over the Jbilet desert, we guarantee absolute comfort, private VIP Mercedes transport, and luxurious Riad accommodation tiers.</p>
            <p>At <strong>Sahara Star Tours</strong>, we specialize in crafting private and custom Morocco desert tours starting from major hubs like Casablanca, Marrakech, Fes, and Tangier. Our team organizes bespoke desert excursions to the golden sand dunes of Erg Chebbi in Merzouga and the rocky desert of Agafay, featuring luxury Sahara glamping, guided camel treks, and high-fidelity cultural encounters. We bring you deep into the heart of the historic Imperial Cities—including the labyrinth streets of the Fes Medina, the vibrant souks of Marrakech, the coastal charms of Essaouira, and the blue-painted alleys of Chefchaouen.</p>
            <p>Our dedicated travel estimators and planner tools make booking your custom Morocco vacation straightforward and transparent. By choosing a locally-owned agency, you benefit from first-hand local knowledge, VIP climate-controlled Mercedes transportation, hand-selected 5-star boutique Riads, and native nomadic guides who share their heritage, music, and hospitality. Experience the authentic magic of Morocco in comfort and style with Sahara Star Tours.</p>
            <p>Book with confidence under the guidance of native nomadic hosts, directly supporting local Berber remote economies and sustainable tourism footprints across Morocco.</p>
          </div>

          <div className="seo-highlight-cards">
            <div className="seo-card">
              <i className="fa-solid fa-compass"></i>
              <h4>Local Nomad Guides</h4>
              <p>Explore the Sahara under the direct tutelage of native desert hosts and certified medina historians.</p>
            </div>

            <div className="seo-card">
              <i className="fa-solid fa-car-side"></i>
              <h4>VIP Mercedes Fleet</h4>
              <p>Travel across panoramic mountain passes inside climate-controlled VIP leather-seated Mercedes transporters.</p>
            </div>

            <div className="seo-card">
              <i className="fa-solid fa-star"></i>
              <h4>5-Star Riad Stays</h4>
              <p>Settle inside prestigious boutique zellige Riads and high-end glamping camps featuring en-suite private bathrooms.</p>
            </div>

            <div className="seo-card">
              <i className="fa-solid fa-sliders"></i>
              <h4>Point-by-Point Tailoring</h4>
              <p>Completely customize your itineraries, dates, Riad pool options, and diet plans to match your exact wishes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & INQUIRY FORM --- */}
      <section className="contact-section" id="contact">
        <div className="section-header reveal active">
          <span className="tag">Begin Your Journey</span>
          <h2>Submit An Inquiry</h2>
          <p>Ready to trace the red streets of Marrakech or watch Sahara night skies? Send us a message and our expert planning team will draft your custom plan within 24 hours.</p>
        </div>

        <div className="contact-container reveal active">
          <BookingForm prefilledData={prefilledData} />
        </div>
      </section>
    </>
  );
}
