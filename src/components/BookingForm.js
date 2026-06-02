'use client';

import React, { useState, useEffect } from 'react';

export default function BookingForm({ activePackage = 'none', isDetail = false, prefilledData = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: activePackage,
    travelers: '',
    date: '',
    message: '',
  });
  
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('Proposal Submitted!');
  const [modalMsg, setModalMsg] = useState('');

  // Keep package selection in sync if activePackage prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, package: activePackage }));
  }, [activePackage]);

  // Sync form with custom planner selections
  useEffect(() => {
    if (prefilledData) {
      setFormData((prev) => ({
        ...prev,
        package: prefilledData.package || 'none',
        travelers: prefilledData.travelers || '',
        message: prefilledData.message || '',
      }));
    }
  }, [prefilledData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setModalTitle(`Shukran, ${formData.name}!`);
    setModalMsg(`Your custom trip inquiry proposal has been successfully registered with **Sahara Star Tours**. Our travel designers in Marrakech are analyzing your requests.<br><br>Expect a highly detailed bespoke travel itinerary draft in your email (<strong>${formData.email}</strong>) within 24 hours.`);
    
    setShowModal(true);
    document.body.style.overflow = 'hidden';

    // Reset form
    setFormData({
      name: '',
      email: '',
      package: activePackage,
      travelers: '',
      date: '',
      message: '',
    });
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
  };

  // Helper to check if a value is filled to keep label floated
  const isFilled = (value) => value && value.toString().trim() !== '';

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className={`form-group ${isFilled(formData.name) ? 'floated' : ''}`}>
          <input 
            type="text" 
            name="name"
            id="contact-name" 
            value={formData.name}
            onChange={handleChange}
            placeholder=" " 
            required 
          />
          <label htmlFor="contact-name">Your Full Name</label>
        </div>

        <div className={`form-group ${isFilled(formData.email) ? 'floated' : ''}`}>
          <input 
            type="email" 
            name="email"
            id="contact-email" 
            value={formData.email}
            onChange={handleChange}
            placeholder=" " 
            required 
          />
          <label htmlFor="contact-email">Email Address</label>
        </div>

        {isDetail ? (
          // Grid-grouped options for sidebar layout on Detail page
          <>
            <div className={`form-group ${isFilled(formData.package) ? 'floated' : ''}`}>
              <select 
                name="package"
                id="contact-package" 
                value={formData.package}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {/* Desert Tours */}
                <optgroup label="Desert Tours">
                  <option value="9-day-authentic">9 Day Authentic Morocco Tour</option>
                  <option value="16-day-casablanca">16 Days Morocco Tour from Casablanca</option>
                  <option value="12-day-desert">Private 12 Days Trip To Desert & Marrakech</option>
                  <option value="12-day-casablanca">Best 12 Days Morocco Tour From Casablanca</option>
                  <option value="8-day-casablanca">Ideal Morocco 8 Days Itinerary Tour from Casablanca</option>
                  <option value="9-day-desert-imperial">Morocco itinerary 9 days, desert & imperial cities</option>
                  <option value="4-day-marrakech-desert">Ideal 4 Days Marrakech Desert Tour to Merzouga</option>
                  <option value="6-day-desert">Morocco Itinerary 6 Days Desert Tour from Casablanca</option>
                  <option value="3-day-marrakech-fes">3 Days Desert Tour From Marrakech To Fes</option>
                  <option value="12-day-grand">Grand Itinerary 12 Days Morocco Tour From Casablanca</option>
                  <option value="10-day-casablanca">10 Days Casablanca Tour: Couple Packages</option>
                  <option value="7-day-casablanca-marrakech">Best 7-Day Morocco Tour From Casablanca</option>
                  <option value="10-day-imperial">10 Days Morocco Imperial Cities Tour</option>
                  <option value="5-day-marrakech-merzouga">5 Days Tour from Marrakech to Merzouga</option>
                  <option value="sahara">Sahara Dunes & Desert Glamping (4 Days)</option>
                </optgroup>

                {/* Imperial Cities */}
                <optgroup label="Imperial Cities">
                  <option value="15-day-casablanca">15 Days Tour from Casablanca</option>
                  <option value="13-day-casablanca">The Best 13 Days Casablanca Tour</option>
                  <option value="11-day-classic">11 Days Morocco Classic Tour</option>
                  <option value="imperial">Imperial Medinas & Riad Retreat (7 Days)</option>
                </optgroup>

                {/* Day Trips */}
                <optgroup label="Day Trips">
                  <option value="agafay-camel-dinner">Agafay Desert Dinner & Ride Under Stars</option>
                  <option value="day-trip-essaouira">Day Trip Marrakech to Essaouira Mogador</option>
                  <option value="day-trip-ouarzazate">Day Trip Ait Ben Haddou & Ouarzazate</option>
                  <option value="day-trip-ouzoud">Day Trip to Ouzoud Waterfalls</option>
                  <option value="day-trip-marrakech">One Day Guided Tour Of Marrakech City</option>
                  <option value="day-trip-ourika">Ourika Valley Nature & Wildlife Tour</option>
                </optgroup>

                {/* Activities */}
                <optgroup label="Activities">
                  <option value="activity-hot-air-balloon">Hot Air Balloon in Marrakech</option>
                  <option value="activity-horse-riding">Horse Riding in Morocco</option>
                  <option value="activity-chez-ali">Fantasia Chez Ali Marrakech Show</option>
                  <option value="activity-quad-biking">Quad Biking In Marrakech Palm Groves</option>
                  <option value="activity-raid-buggy">Raid Buggy In Marrakech Desert</option>
                  <option value="activity-camel-riding">Camel Riding in Marrakech Palm Groves</option>
                  <option value="atlas">High Atlas & Berber Villages Trek (5 Days)</option>
                  <option value="coast">Blue City & Atlantic Coast Escape (5 Days)</option>
                </optgroup>
              </select>
              <label htmlFor="contact-package">Active Tour Program</label>
            </div>

            <div className={`form-group ${isFilled(formData.travelers) ? 'floated' : ''}`}>
              <input 
                type="text" 
                name="travelers"
                id="contact-travelers" 
                value={formData.travelers}
                onChange={handleChange}
                placeholder=" " 
                required 
              />
              <label htmlFor="contact-travelers">Number of Travelers (e.g. 2 adults)</label>
            </div>

            <div className={`form-group ${isFilled(formData.date) ? 'floated' : ''}`}>
              <input 
                type="date" 
                name="date"
                id="contact-date" 
                value={formData.date}
                onChange={handleChange}
                required 
              />
              <label htmlFor="contact-date">Preferred Departure Date</label>
            </div>
          </>
        ) : (
          // Main contact page options
          <>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className={`form-group ${isFilled(formData.travelers) ? 'floated' : ''}`}>
                <select 
                  name="travelers"
                  id="contact-travelers" 
                  value={formData.travelers}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                >
                  <option value="">Select Travelers</option>
                  <option value="1 Traveler">1 Traveler</option>
                  <option value="2 Travelers">2 Travelers</option>
                  <option value="3-5 Travelers">3 - 5 Travelers</option>
                  <option value="6+ Travelers">6+ Travelers Group</option>
                </select>
                <label htmlFor="contact-travelers">Group Size</label>
              </div>

              <div className={`form-group ${isFilled(formData.package) ? 'floated' : ''}`}>
                <select 
                  name="package"
                  id="contact-package" 
                  value={formData.package}
                  onChange={handleChange}
                  style={{ width: '100%' }}
                >
                  <option value="none">Custom Expedition / Not Sure</option>
                  <option value="sahara">Sahara Dunes & Desert Glamping (4 Days)</option>
                  <option value="imperial">Imperial Medinas & Riad Retreat (7 Days)</option>
                  <option value="atlas">High Atlas & Berber Villages Trek (5 Days)</option>
                  <option value="coast">Blue City & Atlantic Coast Escape (5 Days)</option>
                </select>
                <label htmlFor="contact-package">Selected Tour Package</label>
              </div>
            </div>
          </>
        )}

        <div className={`form-group form-full ${isFilled(formData.message) ? 'floated' : ''}`}>
          <textarea 
            name="message"
            id="contact-message" 
            value={formData.message}
            onChange={handleChange}
            placeholder=" " 
            rows="5"
            required
          ></textarea>
          <label htmlFor="contact-message">
            {isDetail 
              ? "Special requirements (diet, Riad preference, dates...)"
              : "Tell us about your travel wishes (Preferred dates, special requirements, food allergies...)"
            }
          </label>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          {isDetail ? "Submit Booking Request" : "Send Inquiry Proposal"}
        </button>
      </form>

      {/* --- CONFIRMATION SUCCESS MODAL --- */}
      <div className={`success-overlay ${showModal ? 'active' : ''}`} id="success-modal">
        <div className="success-card">
          <div className="success-icon-box">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3 id="success-title">{modalTitle}</h3>
          <p id="success-message" dangerouslySetInnerHTML={{ __html: modalMsg }}></p>
          <button className="btn btn-primary" id="success-close-btn" onClick={closeModal}>
            Return to Exploring
          </button>
        </div>
      </div>
    </>
  );
}
