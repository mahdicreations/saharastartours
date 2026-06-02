'use client';

import React, { useState, useEffect, useRef } from 'react';

const reviewsData = [
  {
    stars: 5,
    quote: "The Sahara glamping trip was a spiritual experience. Standing on top of Merzouga's dunes at sunset, then sleeping in absolute luxury. Sahara Star Tours organized everything flawlessly!",
    avatar: "/assets/camel_trek_dunes.png",
    name: "Sarah Mitchell",
    location: "Vancouver, Canada"
  },
  {
    stars: 5,
    quote: "Traveling with kids is always stressful, but Sahara Star Tours made our Imperial Cities tour incredibly smooth. The local Fes and Marrakech guides were warm and highly informative.",
    avatar: "/assets/marrakech_riad_pool.png",
    name: "David Laurent",
    location: "Paris, France"
  },
  {
    stars: 5,
    quote: "Atlas trekking with Sahara Star Tours was breathtaking. The green valleys, the red Berber houses, and climbing Mount Toubkal. The meals prepared by our host family were the best food we ate in Morocco.",
    avatar: "/assets/atlas_mountains_valley.png",
    name: "Elena Rostova",
    location: "Munich, Germany"
  }
];

export default function ReviewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviewsData.length);
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    startTimer(); // reset auto-play timer on manual click
  };

  return (
    <div className="reviews-container reveal active">
      <div 
        className="reviews-wrapper" 
        style={{ 
          transform: `translateX(-${currentSlide * 100}%)`,
          display: 'flex',
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        {reviewsData.map((review, idx) => (
          <div className="review-slide" key={idx} style={{ minWidth: '100%', flexShrink: 0 }}>
            <div className="review-stars">
              {Array.from({ length: review.stars }).map((_, i) => (
                <i className="fa-solid fa-star" key={i}></i>
              ))}
            </div>
            <p className="review-quote">"{review.quote}"</p>
            <div className="review-user">
              <img src={review.avatar} alt={`Review Avatar ${review.name}`} className="review-avatar" />
              <div className="review-user-info">
                <h5>{review.name}</h5>
                <span>{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="review-dots">
        {reviewsData.map((_, idx) => (
          <span 
            className={`review-dot ${currentSlide === idx ? 'active' : ''}`} 
            onClick={() => handleDotClick(idx)}
            key={idx}
          ></span>
        ))}
      </div>
    </div>
  );
}
