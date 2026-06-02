'use client';

import React, { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import Lightbox from '@/components/Lightbox';

// Gallery images catalog grouped by categories
const categoryImages = {
  "Desert Tours": [
    { src: "/assets/camel_trek_dunes.png", cap: "Sunset Camel Caravan in Erg Chebbi Dunes" },
    { src: "/assets/hero_sahara_sunset.png", cap: "Luxury Nomadic Glamping Camp Bonfire" },
    { src: "/assets/atlas_mountains_valley.png", cap: "Panoramic High Atlas Mountains Crossing" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Tranquil Boutique Riad Courtyard Pool" }
  ],
  "Desert Expedition": [
    { src: "/assets/camel_trek_dunes.png", cap: "Sunset Camel Caravan in Erg Chebbi Dunes" },
    { src: "/assets/hero_sahara_sunset.png", cap: "Luxury Nomadic Glamping Camp Bonfire" },
    { src: "/assets/atlas_mountains_valley.png", cap: "Panoramic High Atlas Mountains Crossing" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Tranquil Boutique Riad Courtyard Pool" }
  ],
  "Imperial Cities": [
    { src: "/assets/marrakech_riad_pool.png", cap: "Intricate Zellige Tiles & Courtyard Pool Stays" },
    { src: "/assets/chefchaouen_street.png", cap: "Cobalt Blue-Washed Streets of Chefchaouen" },
    { src: "/assets/hero_sahara_sunset.png", cap: "Historical Medina Gates & Lantern-Lit Alleys" },
    { src: "/assets/camel_trek_dunes.png", cap: "Scenic Road Trips across Golden Atlas Horizons" }
  ],
  "Cultural Heritage": [
    { src: "/assets/marrakech_riad_pool.png", cap: "Intricate Zellige Tiles & Courtyard Pool Stays" },
    { src: "/assets/chefchaouen_street.png", cap: "Cobalt Blue-Washed Streets of Chefchaouen" },
    { src: "/assets/hero_sahara_sunset.png", cap: "Historical Medina Gates & Lantern-Lit Alleys" },
    { src: "/assets/camel_trek_dunes.png", cap: "Scenic Road Trips across Golden Atlas Horizons" }
  ],
  "Day Trips": [
    { src: "/assets/atlas_mountains_valley.png", cap: "Lush Green Valleys & Rivers of High Atlas Gorges" },
    { src: "/assets/chefchaouen_street.png", cap: "Atlantic Sea Walls & Art Passages of Essaouira" },
    { src: "/assets/camel_trek_dunes.png", cap: "Golden Stone Ridges of nearby Agafay Desert" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Grand Historical Palaces & Guided Medina Walks" }
  ],
  "Activities": [
    { src: "/assets/atlas_mountains_valley.png", cap: "Sunrise Hot Air Balloon Floating over Jbilet Desert" },
    { src: "/assets/camel_trek_dunes.png", cap: "High-Speed Quad Biking & Buggy Desert Trails" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Spiritual Chez Ali Fantasia Equestrian Palace Feast" },
    { src: "/assets/chefchaouen_street.png", cap: "Scenic Horse Riding Trails past Palm Groves" }
  ],
  "Mountain Adventure": [
    { src: "/assets/atlas_mountains_valley.png", cap: "Scenic mountain peaks & terraced valley hiking pathways" },
    { src: "/assets/camel_trek_dunes.png", cap: "Traditional Berber village paths and custom clay houses" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Quiet mountain lodges and cozy stone fireplace dining setups" },
    { src: "/assets/chefchaouen_street.png", cap: "High altitude panoramic views overlooking anti-Atlas ridges" }
  ],
  "Coastal Escape": [
    { src: "/assets/chefchaouen_street.png", cap: "Dreamy cobalt-painted archways of Chefchaouen Medina" },
    { src: "/assets/marrakech_riad_pool.png", cap: "Windswept Portuguese sea wall fortress ramparts" },
    { src: "/assets/camel_trek_dunes.png", cap: "Scenic Atlantic coastal roads past Safi pottery center" },
    { src: "/assets/atlas_mountains_valley.png", cap: "Seaside dining options and fresh port seafood catches" }
  ]
};

export default function TourDetailClient({ tourKey, tour }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = categoryImages[tour.category] || categoryImages["Desert Tours"];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const routeText = tour.map.points.map(p => p.name).join(' → ');

  // Dynamic Custom Map Render
  const renderMapBackdrop = () => {
    if (tourKey === 'sahara') {
      return (
        <svg className="svg-route-map" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path className="map-bg-land" d="M30,380 L80,310 L60,250 L20,200 L50,130 L100,80 L180,30 L280,20 L380,40 L350,110 L370,180 L310,250 L340,320 L270,390 Z" />
          <path className="map-route-line" d="M80,260 Q110,270 140,275 T200,265 T290,290" />
          <g className="map-city-group">
            <circle className="map-city-point start-point" cx="80" cy="260" />
            <text className="map-city-label" x="80" y="245" text-anchor="middle">Marrakech (Start)</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="140" cy="275" />
            <text className="map-city-label" x="140" y="295" text-anchor="middle">Ait Benhaddou</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="200" cy="265" />
            <text className="map-city-label" x="200" y="250" text-anchor="middle">Dades Valley</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="290" cy="290" />
            <text className="map-city-label" x="290" y="310" text-anchor="middle">Merzouga Desert</text>
          </g>
        </svg>
      );
    }

    if (tourKey === 'atlas') {
      return (
        <svg className="svg-route-map" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path className="map-bg-land" d="M30,380 L80,310 L60,250 L20,200 L50,130 L100,80 L180,30 L280,20 L380,40 L350,110 L370,180 L310,250 L340,320 L270,390 Z" />
          <path className="map-route-line" d="M80,260 L90,290 L85,340 L60,310 L70,275 L80,260" />
          <g className="map-city-group">
            <circle className="map-city-point start-point" cx="80" cy="260" />
            <text className="map-city-label" x="80" y="245" text-anchor="middle">Marrakech</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="90" cy="290" />
            <text className="map-city-label" x="105" y="295" text-anchor="start">Imlil Valley</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="85" cy="340" />
            <text className="map-city-label" x="85" y="360" text-anchor="middle">Mt Toubkal (4,167m)</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="60" cy="310" />
            <text className="map-city-label" x="45" y="315" text-anchor="end">Azzaden Valley</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="70" cy="275" />
            <text className="map-city-label" x="55" y="275" text-anchor="end">Ouirgane</text>
          </g>
        </svg>
      );
    }

    if (tourKey === 'imperial') {
      return (
        <svg className="svg-route-map" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path className="map-bg-land" d="M30,380 L80,310 L60,250 L20,200 L50,130 L100,80 L180,30 L280,20 L380,40 L350,110 L370,180 L310,250 L340,320 L270,390 Z" />
          <path className="map-route-line" d="M80,260 L95,145 L120,115 L165,120 L210,125 L210,50 L80,260" />
          <g className="map-city-group">
            <circle className="map-city-point start-point" cx="80" cy="260" />
            <text className="map-city-label" x="80" y="280" text-anchor="middle">Marrakech</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="95" cy="145" />
            <text className="map-city-label" x="80" y="150" text-anchor="end">Casablanca</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="120" cy="115" />
            <text className="map-city-label" x="110" y="105" text-anchor="end">Rabat</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="165" cy="120" />
            <text className="map-city-label" x="165" y="140" text-anchor="middle">Volubilis</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="210" cy="125" />
            <text className="map-city-label" x="225" y="130" text-anchor="start">Fes</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="210" cy="50" />
            <text className="map-city-label" x="210" y="35" text-anchor="middle">Chefchaouen</text>
          </g>
        </svg>
      );
    }

    if (tourKey === 'coast') {
      return (
        <svg className="svg-route-map" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path className="map-bg-land" d="M30,380 L80,310 L60,250 L20,200 L50,130 L100,80 L180,30 L280,20 L380,40 L350,110 L370,180 L310,250 L340,320 L270,390 Z" />
          <path className="map-route-line" d="M80,260 L25,250 L95,145 L210,50 L80,260" />
          <g className="map-city-group">
            <circle className="map-city-point start-point" cx="80" cy="260" />
            <text className="map-city-label" x="80" y="280" text-anchor="middle">Marrakech</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="25" cy="250" />
            <text className="map-city-label" x="40" y="240" text-anchor="start">Essaouira</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="95" cy="145" />
            <text className="map-city-label" x="110" y="145" text-anchor="start">Casablanca</text>
          </g>
          <g className="map-city-group">
            <circle className="map-city-point" cx="210" cy="50" />
            <text className="map-city-label" x="210" y="35" text-anchor="middle">Chefchaouen</text>
          </g>
        </svg>
      );
    }

    // Default static image map fallback for other tours
    return (
      <img 
        src="/assets/morocco_travel_map.png" 
        alt="Bespoke Travel Map of Morocco - Sahara Star Tours" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-sm)', filter: 'contrast(1.02) brightness(0.95)' }}
        loading="lazy"
      />
    );
  };

  return (
    <div id="tour-detail-page">
      {/* --- TOUR HERO SECTION --- */}
      <section className="tour-hero-section">
        <div className="tour-hero-bg">
          <img src={tour.image} alt={tour.title} />
        </div>
        <div className="tour-hero-gradient"></div>

        <div className="tour-hero-content">
          <span className="tour-tag" id="tour-category">{tour.category}</span>
          <h1 id="tour-title">{tour.title}</h1>
          <div className="tour-quick-meta">
            <span><i className="fa-regular fa-clock"></i> <strong id="tour-duration">{tour.duration}</strong></span>
            <span><i className="fa-solid fa-star"></i> <strong id="tour-rating">{tour.rating}</strong></span>
            <span><i className="fa-solid fa-compass"></i> Route: <strong id="tour-route">{routeText}</strong></span>
          </div>
        </div>
      </section>

      {/* --- MAIN PAGE GRID CONTAINER --- */}
      <div className="tour-container" id="tour-detail-container">
        
        {/* Left Column: Details, Map, Inclusions */}
        <div className="tour-main">
          
          {/* Day-by-Day Timeline */}
          <div className="timeline-card reveal active">
            <h3>Day-by-Day Program Itinerary</h3>
            <div className="timeline-steps-wrapper" id="timeline-steps">
              {tour.itinerary.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-day-tag">{item.day}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive SVG Route Map */}
          <div className="route-map-card reveal active">
            <h3>Tour Route Map</h3>
            <p>This interactive circuit represents your exact travel route across Morocco, climbing Atlas peaks and stretching down to the Sahara dunes.</p>

            <div className="route-map-backdrop" id="svg-map-backdrop">
              {renderMapBackdrop()}
            </div>

            {/* Waypoints list */}
            {tour.map && tour.map.points && tour.map.points.length > 0 && (
              <div className="map-milestones-wrapper" id="map-milestones-wrapper" style={{ display: 'block' }}>
                <h5>Route Waypoints (Point-by-Point):</h5>
                <div className="map-milestones" id="map-milestones">
                  {tour.map.points.map((point, idx) => (
                    <React.Fragment key={idx}>
                      <div className={`milestone-node ${idx === 0 ? 'start-node' : ''}`}>
                        {idx === 0 ? (
                          <>
                            <i className="fa-solid fa-star"></i> <strong>{point.name}</strong>
                          </>
                        ) : (
                          <>
                            <i className="fa-solid fa-location-dot"></i> <span>{point.name}</span>
                          </>
                        )}
                      </div>
                      {idx < tour.map.points.length - 1 && (
                        <div className="milestone-arrow">
                          <i className="fa-solid fa-chevron-right"></i>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Media Gallery */}
          <div className="gallery-card reveal active">
            <h3>Expedition Media Gallery</h3>
            <p>A visual glimpse of the spectacular landscapes, ancient boutique clay architecture, and majestic dune heights awaiting you.</p>
            <div className="gallery-grid" id="gallery-grid">
              {images.map((img, idx) => (
                <div 
                  className="gallery-item" 
                  key={idx} 
                  onClick={() => handleOpenLightbox(idx)}
                >
                  <img src={img.src} alt={img.cap} loading="lazy" />
                  <div className="gallery-overlay">
                    <i className="fa-solid fa-maximize"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions and Exclusions split card */}
          <div className="inclusions-card reveal active">
            <h3>Inclusions & Trip Details</h3>

            <div className="inc-exc-split">
              <div className="modal-inc-col included">
                <h5><i className="fa-solid fa-circle-check"></i> What's Included</h5>
                <ul className="modal-inc-list" id="included-list">
                  {tour.included.map((inc, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-circle-check"></i> {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-inc-col excluded">
                <h5><i className="fa-solid fa-circle-xmark"></i> What's Excluded</h5>
                <ul className="modal-inc-list" id="excluded-list">
                  {tour.excluded.map((exc, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-circle-xmark"></i> {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar form */}
        <div className="tour-sidebar">
          <div className="booking-sidebar-card reveal active" id="booking-form">
            <h3>Book This Expedition</h3>
            <p className="booking-price">Package rate from: <span id="tour-price">{tour.price}</span></p>

            <BookingForm activePackage={tourKey} isDetail={true} />
          </div>
        </div>

      </div>

      {/* Portable Lightbox Preview Modal */}
      <Lightbox 
        images={images}
        activeIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onChangeIndex={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
