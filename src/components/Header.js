'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({});

  useEffect(() => {
    // Scroll event for sticky glass navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set initial scroll state in case page is loaded scrolled down
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile navigation drawer
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setActiveDropdowns({});
  };

  const toggleMobileDropdown = (category) => {
    if (window.innerWidth <= 768) {
      setActiveDropdowns((prev) => ({
        ...prev,
        [category]: !prev[category],
      }));
    }
  };

  // Determine if header should have scrolled class (always scrolled on pages other than Home page index)
  const isHome = pathname === '/';
  const headerClass = (isScrolled || !isHome) ? 'scrolled' : '';

  return (
    <header id="main-header" className={headerClass}>
      <div className="navbar">
        <Link href="/" className="logo" id="nav-logo" onClick={closeMobileMenu}>
          <img src="/assets/logo.png" alt="Sahara Star Tours Logo" />
        </Link>

        <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`} id="nav-links">
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* Desert Tours Megamenu Dropdown */}
          <li className="has-dropdown">
            <Link 
              href="/desert-tours" 
              className={pathname === '/desert-tours' ? 'active' : ''}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('desert');
                } else {
                  closeMobileMenu();
                }
              }}
            >
              Desert Tours <i className="fa-solid fa-chevron-down" style={{ transform: activeDropdowns['desert'] ? 'rotate(180deg)' : '' }}></i>
            </Link>
            <ul className={`dropdown-menu megamenu-two-col ${activeDropdowns['desert'] ? 'open' : ''}`}>
              {/* Left Column: From Casablanca */}
              <li style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="megamenu-title-badge">
                  <i className="fa-solid fa-plane-departure"></i> From Casablanca
                </span>
                <Link href="/tours/6-day-desert" onClick={closeMobileMenu}>Morocco Itinerary 6 Days Desert Tour (6 Days)</Link>
                <Link href="/tours/7-day-casablanca-marrakech" onClick={closeMobileMenu}>Best 7-Day Morocco Tour (7 Days)</Link>
                <Link href="/tours/8-day-casablanca" onClick={closeMobileMenu}>Ideal Morocco 8 Days Itinerary (8 Days)</Link>
                <Link href="/tours/9-day-authentic" onClick={closeMobileMenu}>9 Day Authentic Morocco Tour (9 Days)</Link>
                <Link href="/tours/9-day-desert-imperial" onClick={closeMobileMenu}>Morocco 9 Days Desert & Imperial (9 Days)</Link>
                <Link href="/tours/10-day-casablanca" onClick={closeMobileMenu}>10 Days Morocco Tour From Casablanca (10 Days)</Link>
              </li>
              
              {/* Right Column: From Casablanca part 2 + From Marrakech */}
              <li style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Link href="/tours/10-day-imperial" style={{ marginTop: '28px' }} onClick={closeMobileMenu}>10 Days Desert Tour from Casablanca (10 Days)</Link>
                <Link href="/tours/12-day-grand" onClick={closeMobileMenu}>12 Days Tour from Casablanca (12 Days)</Link>
                <Link href="/tours/12-day-desert" onClick={closeMobileMenu}>Private 12 Days Trip To Desert & Marrakech (12 Days)</Link>
                <Link href="/tours/12-day-casablanca" onClick={closeMobileMenu}>Best 12 Days Morocco Tour (12 Days)</Link>
                <Link href="/tours/16-day-casablanca" onClick={closeMobileMenu}>16 days Morocco Tour from Casablanca (16 Days)</Link>
                
                <span className="megamenu-title-badge" style={{ marginTop: '8px' }}>
                  <i className="fa-solid fa-plane-departure"></i> From Marrakech
                </span>
                <Link href="/tours/3-day-marrakech-fes" onClick={closeMobileMenu}>3 Days Tour From Marrakech To Merzouga (3 Days)</Link>
                <Link href="/tours/4-day-marrakech-desert" onClick={closeMobileMenu}>Ideal 4 Days Marrakech Desert Tour (4 Days)</Link>
              </li>
            </ul>
          </li>

          {/* Imperial Cities Dropdown */}
          <li className="has-dropdown">
            <Link 
              href="/imperial-cities" 
              className={pathname === '/imperial-cities' ? 'active' : ''}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('imperial');
                } else {
                  closeMobileMenu();
                }
              }}
            >
              Imperial Cities <i className="fa-solid fa-chevron-down" style={{ transform: activeDropdowns['imperial'] ? 'rotate(180deg)' : '' }}></i>
            </Link>
            <ul className={`dropdown-menu dropdown-standard ${activeDropdowns['imperial'] ? 'open' : ''}`}>
              <li><Link href="/tours/15-day-casablanca" onClick={closeMobileMenu}>15 Days Tour from Casablanca</Link></li>
              <li><Link href="/tours/13-day-casablanca" onClick={closeMobileMenu}>Best 13 Days Casablanca Tour</Link></li>
              <li><Link href="/tours/11-day-classic" onClick={closeMobileMenu}>11 Days Morocco Classic Tour</Link></li>
            </ul>
          </li>

          {/* Day Trips Dropdown */}
          <li className="has-dropdown">
            <Link 
              href="/day-trips" 
              className={pathname === '/day-trips' ? 'active' : ''}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('daytrips');
                } else {
                  closeMobileMenu();
                }
              }}
            >
              Day Trips <i className="fa-solid fa-chevron-down" style={{ transform: activeDropdowns['daytrips'] ? 'rotate(180deg)' : '' }}></i>
            </Link>
            <ul className={`dropdown-menu dropdown-standard ${activeDropdowns['daytrips'] ? 'open' : ''}`}>
              <li><Link href="/tours/agafay-camel-dinner" onClick={closeMobileMenu}>Agafay Desert Dinner & Ride</Link></li>
              <li><Link href="/tours/day-trip-essaouira" onClick={closeMobileMenu}>Day Trip Essaouira Mogador</Link></li>
              <li><Link href="/tours/day-trip-ouarzazate" onClick={closeMobileMenu}>Day Trip Ait Ben Haddou</Link></li>
              <li><Link href="/tours/day-trip-ouzoud" onClick={closeMobileMenu}>Day Trip Ouzoud Waterfalls</Link></li>
              <li><Link href="/tours/day-trip-marrakech" onClick={closeMobileMenu}>One Day Marrakech City Tour</Link></li>
              <li><Link href="/tours/day-trip-ourika" onClick={closeMobileMenu}>Ourika Valley Nature Tour</Link></li>
            </ul>
          </li>

          {/* Activities Dropdown */}
          <li className="has-dropdown">
            <Link 
              href="/activities" 
              className={pathname === '/activities' ? 'active' : ''}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleMobileDropdown('activities');
                } else {
                  closeMobileMenu();
                }
              }}
            >
              Activities <i className="fa-solid fa-chevron-down" style={{ transform: activeDropdowns['activities'] ? 'rotate(180deg)' : '' }}></i>
            </Link>
            <ul className={`dropdown-menu dropdown-standard ${activeDropdowns['activities'] ? 'open' : ''}`}>
              <li><Link href="/tours/activity-hot-air-balloon" onClick={closeMobileMenu}>Hot Air Balloon in Marrakech</Link></li>
              <li><Link href="/tours/activity-horse-riding" onClick={closeMobileMenu}>Horse Riding in Morocco</Link></li>
              <li><Link href="/tours/activity-chez-ali" onClick={closeMobileMenu}>Fantasia Chez Ali Marrakech</Link></li>
              <li><Link href="/tours/activity-quad-biking" onClick={closeMobileMenu}>Quad Biking In Marrakech</Link></li>
              <li><Link href="/tours/activity-raid-buggy" onClick={closeMobileMenu}>Raid Buggy In Marrakech</Link></li>
              <li><Link href="/tours/activity-camel-riding" onClick={closeMobileMenu}>Camel Riding Palm Groves</Link></li>
            </ul>
          </li>

          <li>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {isHome ? (
          <a href="#planner" className="btn btn-primary" id="nav-cta" onClick={closeMobileMenu}>
            Plan a Trip
          </a>
        ) : (
          <Link href="/#planner" className="btn btn-primary" id="nav-cta" onClick={closeMobileMenu}>
            Plan a Trip
          </Link>
        )}

        <button 
          className="mobile-nav-toggle" 
          id="mobile-toggle" 
          aria-label="Toggle Menu"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <i className={isMobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
      </div>
    </header>
  );
}
