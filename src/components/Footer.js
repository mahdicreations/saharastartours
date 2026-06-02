'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Shukran! You have successfully subscribed to Sahara Star Tours weekly travel secrets. Check your inbox soon!");
    setEmail('');
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/" className="logo" style={{ marginBottom: '20px', display: 'inline-block' }}>
            <img src="/assets/logo.png" alt="Sahara Star Tours Logo" />
          </Link>
          <p>
            Premium travel planning and bespoke itineraries crafted by local Moroccan guides. Making desert dreams and
            imperial medina secrets accessible in absolute comfort.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
            <a href="#" className="social-link" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Signature Tours</h4>
          <ul className="footer-links">
            <li><Link href="/tours/4-day-marrakech-desert">Sahara Dunes & Glamping</Link></li>
            <li><Link href="/tours/10-day-imperial">Imperial Medinas Culture</Link></li>
            <li><Link href="/tours/11-day-classic">11 Days Classic Tour</Link></li>
            <li><Link href="/tours/day-trip-essaouira">Atlantic Coast Day Trip</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Helpful Resources</h4>
          <ul className="footer-links">
            <li><Link href="/#culture">Moroccan Travel Guides</Link></li>
            <li><Link href="/contact">COVID Travel Guidelines</Link></li>
            <li><Link href="/#planner">Cost Calculator FAQ</Link></li>
            <li><Link href="/about">Bespoke Story & Team</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Weekly Travel Secrets</h4>
          <p>Subscribe to receive beautiful boutique riad deals and local desert trek routes directly in your inbox.</p>
          <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              aria-label="Newsletter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary"><i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sahara Star Tours. All Rights Reserved.</p>
        <p>Crafted in Marrakech with local pride <i className="fa-solid fa-heart" style={{ color: 'var(--terracotta)' }}></i></p>
      </div>
    </footer>
  );
}
