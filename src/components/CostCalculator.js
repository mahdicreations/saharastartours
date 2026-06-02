'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CostCalculator({ onInquire }) {
  const router = useRouter();
  const [days, setDays] = useState(7);
  const [people, setPeople] = useState(2);
  const [tier, setTier] = useState('premium'); // standard, premium, palace
  const [addons, setAddons] = useState({
    camel: true,
    cooking: false,
    balloon: false,
    spa: false,
  });

  const getTierText = () => {
    if (tier === 'standard') return 'Authentic Riad';
    if (tier === 'palace') return 'Royal Palace';
    return 'Boutique Luxury';
  };

  const getAddonsText = () => {
    const list = [];
    if (addons.camel) list.push('Sahara Camel Trek');
    if (addons.cooking) list.push('Cooking Class');
    if (addons.balloon) list.push('Hot Air Balloon');
    if (addons.spa) list.push('Traditional Spa');
    return list.length > 0 ? list.join(', ') : 'None';
  };

  const handleToggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInquireClick = () => {
    const tierName = getTierText();
    const addonsText = getAddonsText();

    const planData = {
      days,
      people,
      tier: tierName,
      addons: addonsText,
    };

    if (onInquire) {
      // If we are on the same page, trigger parent callback
      onInquire(planData);
    } else {
      // Otherwise, redirect to contact page with query param
      const planQuery = encodeURIComponent(JSON.stringify(planData));
      router.push(`/contact?plan=${planQuery}`);
    }
  };

  return (
    <div className="calculator-container reveal active">
      {/* Controls */}
      <div className="calc-inputs">
        <h3>Design Your Expedition</h3>

        {/* Duration Slider */}
        <div className="calc-group">
          <div className="calc-label-row">
            <label htmlFor="calc-days">Trip Duration</label>
            <span className="calc-value">
              <span id="days-val">{days}</span> Days
            </span>
          </div>
          <input 
            type="range" 
            id="calc-days" 
            min="3" 
            max="14" 
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
          />
        </div>

        {/* Travelers Slider */}
        <div className="calc-group">
          <div className="calc-label-row">
            <label htmlFor="calc-people">Number of Travelers</label>
            <span className="calc-value">
              <span id="people-val">{people}</span> {people === 1 ? 'Person' : 'People'}
            </span>
          </div>
          <input 
            type="range" 
            id="calc-people" 
            min="1" 
            max="10" 
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value))}
          />
        </div>

        {/* Accommodation Tier Cards */}
        <div className="calc-group">
          <div className="calc-label-row">
            <label>Accommodation Tier</label>
          </div>
          <div className="tier-cards">
            <div 
              className={`tier-card ${tier === 'standard' ? 'active' : ''}`} 
              onClick={() => setTier('standard')}
            >
              <i className="fa-solid fa-hotel"></i>
              <span>Authentic Riad</span>
              <small>Charming & Local</small>
            </div>
            <div 
              className={`tier-card ${tier === 'premium' ? 'active' : ''}`} 
              onClick={() => setTier('premium')}
            >
              <i className="fa-solid fa-award"></i>
              <span>Boutique Luxury</span>
              <small>Highly Rated / Pools</small>
            </div>
            <div 
              className={`tier-card ${tier === 'palace' ? 'active' : ''}`} 
              onClick={() => setTier('palace')}
            >
              <i className="fa-solid fa-crown"></i>
              <span>Royal Palace</span>
              <small>Exclusive 5-Star</small>
            </div>
          </div>
        </div>

        {/* Experience Addons */}
        <div className="calc-group">
          <div className="calc-label-row">
            <label>Select Unique Activities</label>
          </div>
          <div className="addons-grid">
            <div 
              className={`addon-item ${addons.camel ? 'active' : ''}`}
              onClick={() => handleToggleAddon('camel')}
            >
              <input 
                type="checkbox" 
                id="addon-camel" 
                checked={addons.camel} 
                onChange={() => {}} // handled by click on parent
              />
              <div className="addon-details">
                <span className="addon-name">Sahara Camel Trek</span>
                <span className="addon-price">Included Safari</span>
              </div>
            </div>

            <div 
              className={`addon-item ${addons.cooking ? 'active' : ''}`}
              onClick={() => handleToggleAddon('cooking')}
            >
              <input 
                type="checkbox" 
                id="addon-cooking" 
                checked={addons.cooking}
                onChange={() => {}}
              />
              <div className="addon-details">
                <span className="addon-name">Riad Cooking Masterclass</span>
                <span className="addon-price">Premium Experience</span>
              </div>
            </div>

            <div 
              className={`addon-item ${addons.balloon ? 'active' : ''}`}
              onClick={() => handleToggleAddon('balloon')}
            >
              <input 
                type="checkbox" 
                id="addon-balloon" 
                checked={addons.balloon}
                onChange={() => {}}
              />
              <div className="addon-details">
                <span className="addon-name">Atlas Hot Air Balloon</span>
                <span className="addon-price">Adventure Activity</span>
              </div>
            </div>

            <div 
              className={`addon-item ${addons.spa ? 'active' : ''}`}
              onClick={() => handleToggleAddon('spa')}
            >
              <input 
                type="checkbox" 
                id="addon-spa" 
                checked={addons.spa}
                onChange={() => {}}
              />
              <div className="addon-details">
                <span className="addon-name">Traditional Spa & Hammam</span>
                <span className="addon-price">Luxury Wellness</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Summary */}
      <div className="calc-summary-wrapper">
        <div className="calc-summary">
          <h4>Bespoke Draft Configuration</h4>
          <ul className="calc-summary-details">
            <li>
              <span>Trip Duration:</span>
              <span id="summary-days-text">{days} Days / {days - 1} Nights</span>
            </li>
            <li>
              <span>Total Travelers:</span>
              <span id="summary-people-text">{people} {people === 1 ? 'Traveler' : 'Travelers'}</span>
            </li>
            <li>
              <span>Accommodation tier:</span>
              <span id="summary-tier">{getTierText()}</span>
            </li>
            <li>
              <span>Selected Activities:</span>
              <span id="summary-addons" style={{ display: 'inline-block', maxWidth: '180px', textAlign: 'right', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {getAddonsText()}
              </span>
            </li>
          </ul>

          <div 
            className="calc-total-box" 
            style={{ 
              background: 'rgba(217, 107, 67, 0.1)', 
              border: '1px dashed var(--terracotta)', 
              borderRadius: 'var(--radius-sm)', 
              padding: '16px', 
              margin: '20px 0', 
              textAlign: 'center' 
            }}
          >
            <span 
              className="planner-status-badge" 
              style={{ 
                color: 'var(--sand-gold)', 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                marginBottom: '4px' 
              }}
            >
              <i className="fa-solid fa-wand-magic-sparkles" style={{ animation: 'pulse 1.5s infinite alternate' }}></i> Custom Proposal Ready
            </span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4', marginTop: '4px', fontWeight: 300 }}>
              Ready to customize! Inquire now to receive a complete tailored hour-by-hour itinerary draft in under 24h.
            </p>
          </div>

          <button className="btn btn-primary" id="calc-book-btn" style={{ width: '100%' }} onClick={handleInquireClick}>
            Inquire This Custom Plan
          </button>
        </div>
      </div>
    </div>
  );
}
