import glob
import os
import re

files = [
    'index.html',
    'about.html',
    'activities.html',
    'day-trips.html',
    'desert-tours.html',
    'imperial-cities.html'
] + glob.glob('tours/*.html') + ['tours/16-day-casablanca/index.html']

new_css = """/* --- LUXURY TOP BAR, LANGUAGE FLAGS & REDESIGNED FOOTER --- */
.top-bar {
  background: rgba(14, 11, 10, 0.95);
  border-bottom: 1px solid rgba(232, 195, 158, 0.12);
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 42px;
  overflow: hidden;
  position: relative;
  z-index: 1001;
}
header.scrolled .top-bar {
  max-height: 0;
  opacity: 0;
  border-bottom-color: transparent;
  transform: translateY(-100%);
}
.top-bar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 6px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-left, .top-bar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.top-bar-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--transition-smooth);
  font-size: 0.8rem;
  font-weight: 400;
}
.top-bar-item:hover {
  color: var(--sand-gold);
}
.top-bar-item i {
  color: var(--sand-gold);
  font-size: 0.82rem;
}
.top-bar-item i.fa-whatsapp {
  color: #25D366;
  font-size: 0.95rem;
}
.top-bar-divider {
  color: rgba(232, 195, 158, 0.2);
  font-size: 0.75rem;
}
.top-bar-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(217, 107, 67, 0.12);
  border: 1px solid rgba(217, 107, 67, 0.25);
  color: var(--sand-gold);
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}
.top-bar-badge i {
  color: var(--terracotta);
  font-size: 0.75rem;
}
.top-bar-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}
.top-bar-socials a {
  color: var(--text-muted);
  font-size: 0.82rem;
  transition: var(--transition-smooth);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.top-bar-socials a:hover {
  color: var(--sand-gold);
  transform: translateY(-1px);
}

/* Language Flags Selector */
.lang-flags-wrap {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(232, 195, 158, 0.18);
  border-radius: 30px;
  padding: 3px 6px;
}
.lang-flag-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}
.lang-flag-btn:hover {
  color: var(--sand-gold);
  background: rgba(255, 255, 255, 0.06);
}
.lang-flag-btn.active {
  background: rgba(217, 107, 67, 0.25);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(217, 107, 67, 0.3);
}
.lang-flag-svg {
  width: 17px;
  height: 12px;
  border-radius: 2px;
  object-fit: cover;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}
.mobile-only { display: none !important; }
.desktop-only { display: inline-flex !important; }
.mobile-cta-li { display: none !important; }

/* Redesigned Footer Payments & Socials */
.footer-socials {
  display: flex;
  gap: 12px;
  margin-top: 15px;
}
.footer-socials .social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(232, 195, 158, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.3s ease;
  text-decoration: none;
}
.footer-socials .social-link:hover {
  background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 75%, 45%) 100%);
  border-color: var(--terracotta);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px var(--terracotta-glow);
}
.footer-payments-bar {
  max-width: 1400px;
  margin: 0 auto 35px;
  padding: 20px 28px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(232, 195, 158, 0.12);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.payments-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--sand-gold);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.payments-icons {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}
.pay-badge {
  font-size: 1.9rem;
  color: #8b8076;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
}
.pay-badge:hover {
  color: var(--sand-gold);
  transform: translateY(-2px);
}
.payments-guarantee {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
}
.payments-guarantee i {
  color: #25D366;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  header {
    background: rgba(14, 11, 10, 0.96) !important;
    border-bottom: 1px solid rgba(232, 195, 158, 0.15) !important;
    backdrop-filter: blur(15px) !important;
  }
  .hero {
    padding-top: 155px !important;
  }
  .tour-hero-section {
    padding-top: 130px !important;
  }
  .category-hero {
    padding-top: 130px !important;
  }
  .navbar {
    padding: 8px 5% !important;
  }
  .logo img {
    max-height: 52px !important;
    width: auto !important;
  }
  .top-bar-container {
    padding: 5px 5%;
    justify-content: space-between;
  }
  .top-bar-divider,
  .top-bar-item.hide-mobile,
  .top-bar-socials {
    display: none !important;
  }
  .top-bar-left, .top-bar-right {
    gap: 10px;
  }
  .top-bar-badge {
    font-size: 0.68rem !important;
    padding: 2px 8px;
  }
  .desktop-only { display: none !important; }
  .mobile-only { display: inline-flex !important; }
  #nav-cta { display: none !important; }
  .lang-flags-wrap.mobile-only {
    margin-left: auto;
    margin-right: 12px;
    padding: 2px 4px;
    gap: 2px;
  }
  .lang-flags-wrap.mobile-only .lang-flag-btn {
    padding: 3px 5px;
    font-size: 0.65rem;
    gap: 3px;
  }
  .mobile-cta-li {
    display: block !important;
    width: 100% !important;
    padding: 8px 0 14px 0 !important;
    margin-bottom: 12px !important;
    border-bottom: 1px solid rgba(232, 195, 158, 0.15) !important;
  }
  .mobile-cta-li .mobile-menu-cta {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    padding: 13px 20px !important;
    font-size: 1rem !important;
    font-weight: 600 !important;
    border-radius: 30px !important;
    text-align: center !important;
    box-shadow: 0 8px 24px var(--terracotta-glow) !important;
  }
  .footer-payments-bar {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 18px;
  }
  .payments-icons {
    justify-content: center;
    gap: 14px;
  }
  .pay-badge {
    font-size: 1.6rem;
  }
}"""

for f in files:
    if not os.path.exists(f):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    
    # Replace existing luxury top bar CSS block
    c = re.sub(r'/\* --- LUXURY TOP BAR, LANGUAGE FLAGS & REDESIGNED FOOTER --- \*/[\s\S]*?(?=\n\s*</style>)', new_css, c)
    # Also clean the earlier addition if present
    c = c.replace("""@media (max-width: 768px) {
  header {
    background: rgba(14, 11, 10, 0.98) !important;
    backdrop-filter: blur(15px) !important;
  }
  .hero, .tour-hero-section, .category-hero {
    padding-top: 155px !important;
  }
}
""", "")
    
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)

print("Updated CSS with mobile header background across all 37 pages!")
