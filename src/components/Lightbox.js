'use client';

import React, { useEffect } from 'react';

export default function Lightbox({ images = [], activeIndex = 0, isOpen = false, onClose, onChangeIndex }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    onChangeIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onChangeIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'lightbox-modal' || e.target.classList.contains('lightbox-content-box')) {
      // Close only if clicking the background overlay
      onClose();
    }
  };

  const currentImage = images[activeIndex];

  return (
    <div 
      className="lightbox-overlay active" 
      id="lightbox-modal"
      onClick={handleOverlayClick}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" id="lightbox-close" aria-label="Close Preview" onClick={onClose}>
          &times;
        </button>
        <img 
          src={currentImage.src} 
          alt={currentImage.cap} 
          className="lightbox-img" 
          id="lightbox-img" 
        />
        <div className="lightbox-caption" id="lightbox-caption">
          {currentImage.cap}
        </div>

        <button 
          className="lightbox-btn lightbox-prev" 
          id="lightbox-prev" 
          aria-label="Previous Image"
          onClick={handlePrev}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        
        <button 
          className="lightbox-btn lightbox-next" 
          id="lightbox-next" 
          aria-label="Next Image"
          onClick={handleNext}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
