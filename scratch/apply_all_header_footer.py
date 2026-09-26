import os
import glob
import re

ROOT_DIR = r"c:\Users\el mahdi\Desktop\mahdicreations\saharastartours"
TOURS_DIR = os.path.join(ROOT_DIR, "tours")

root_pages = [
    os.path.join(ROOT_DIR, "index.html"),
    os.path.join(ROOT_DIR, "about.html"),
    os.path.join(ROOT_DIR, "activities.html"),
    os.path.join(ROOT_DIR, "day-trips.html"),
    os.path.join(ROOT_DIR, "desert-tours.html"),
    os.path.join(ROOT_DIR, "imperial-cities.html"),
]

tour_files = sorted(glob.glob(os.path.join(TOURS_DIR, "*.html")))
sub_16 = os.path.join(TOURS_DIR, "16-day-casablanca", "index.html")
if os.path.exists(sub_16):
    tour_files.append(sub_16)

css_global_header_footer = """
/* --- LUXURY TOP BAR, LANGUAGE FLAGS & REDESIGNED FOOTER --- */
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
}
"""

top_bar_html = """
  <!-- TOP HEADER / ANNOUNCEMENT BAR -->
  <div class="top-bar">
    <div class="top-bar-container">
      <div class="top-bar-left">
        <a href="https://wa.me/212600000000" class="top-bar-item" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> <span>+212 661-234567</span>
        </a>
        <span class="top-bar-divider">|</span>
        <a href="mailto:contact@saharastartours.com" class="top-bar-item hide-mobile">
          <i class="fa-regular fa-envelope"></i> <span>contact@saharastartours.com</span>
        </a>
        <span class="top-bar-divider hide-mobile">|</span>
        <span class="top-bar-item hide-mobile">
          <i class="fa-solid fa-location-dot"></i> <span>Marrakech &amp; Casablanca</span>
        </span>
      </div>
      <div class="top-bar-right">
        <span class="top-bar-badge">
          <i class="fa-solid fa-compass"></i> Licensed Morocco Tour Operator &bull; Authentic Desert Safaris
        </span>
        <div class="top-bar-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="TripAdvisor" title="TripAdvisor">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block;vertical-align:middle;">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.2c1.78 0 3.25.96 4.02 2.38.77-1.42 2.24-2.38 4.02-2.38 2.45 0 4.44 1.99 4.44 4.44 0 2.45-1.99 4.44-4.44 4.44-1.28 0-2.43-.54-3.24-1.41l-.78 1.19-.78-1.19c-.81.87-1.96 1.41-3.24 1.41-2.45 0-4.44-1.99-4.44-4.44 0-2.45 1.99-4.44 4.44-4.44zm-4.02 6.84c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4zm8.04 0c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
"""

lang_flags_desktop_html = """
    <!-- Language Selector Flags (Desktop) -->
    <div class="lang-flags-wrap desktop-only">
      <button type="button" class="lang-flag-btn" :class="currentLang==='en'?'active':''" @click="currentLang='en'" title="English">
        <svg class="lang-flag-svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 288 216 153v39H584L368 320h56zm-208-96L0 39V0h56l216 152h-56zm264-192h160v114L480 0zm-360 0L0 86V0h120zm0 480L0 394v86h120zm400 0h120v-86L520 480z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>
        <span>ENG</span>
      </button>
      <button type="button" class="lang-flag-btn" :class="currentLang==='es'?'active':''" @click="currentLang='es'" title="Español">
        <svg class="lang-flag-svg" viewBox="0 0 750 500"><path fill="#c60b1e" d="M0 0h750v500H0z"/><path fill="#ffc400" d="M0 125h750v250H0z"/></svg>
        <span>ESP</span>
      </button>
      <button type="button" class="lang-flag-btn" :class="currentLang==='it'?'active':''" @click="currentLang='it'" title="Italiano">
        <svg class="lang-flag-svg" viewBox="0 0 1500 1000"><path fill="#009246" d="M0 0h500v1000H0z"/><path fill="#fff" d="M500 0h500v1000H500z"/><path fill="#ce2b37" d="M1000 0h500v1000h-500z"/></svg>
        <span>ITA</span>
      </button>
    </div>
"""

lang_flags_mobile_html = """
    <!-- Language Selector Flags (Mobile - in place of Plan a Trip button) -->
    <div class="lang-flags-wrap mobile-only">
      <button type="button" class="lang-flag-btn" :class="currentLang==='en'?'active':''" @click="currentLang='en'" title="English">
        <svg class="lang-flag-svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 288 216 153v39H584L368 320h56zm-208-96L0 39V0h56l216 152h-56zm264-192h160v114L480 0zm-360 0L0 86V0h120zm0 480L0 394v86h120zm400 0h120v-86L520 480z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>
        <span>ENG</span>
      </button>
      <button type="button" class="lang-flag-btn" :class="currentLang==='es'?'active':''" @click="currentLang='es'" title="Español">
        <svg class="lang-flag-svg" viewBox="0 0 750 500"><path fill="#c60b1e" d="M0 0h750v500H0z"/><path fill="#ffc400" d="M0 125h750v250H0z"/></svg>
        <span>ESP</span>
      </button>
      <button type="button" class="lang-flag-btn" :class="currentLang==='it'?'active':''" @click="currentLang='it'" title="Italiano">
        <svg class="lang-flag-svg" viewBox="0 0 1500 1000"><path fill="#009246" d="M0 0h500v1000H0z"/><path fill="#fff" d="M500 0h500v1000H500z"/><path fill="#ce2b37" d="M1000 0h500v1000h-500z"/></svg>
        <span>ITA</span>
      </button>
    </div>
"""

footer_socials_html = """      <div class="footer-socials">
        <a href="https://facebook.com" class="social-link" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://instagram.com" class="social-link" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://tiktok.com" class="social-link" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        <a href="https://tripadvisor.com" class="social-link" target="_blank" rel="noopener" aria-label="TripAdvisor" title="TripAdvisor">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.2c1.78 0 3.25.96 4.02 2.38.77-1.42 2.24-2.38 4.02-2.38 2.45 0 4.44 1.99 4.44 4.44 0 2.45-1.99 4.44-4.44 4.44-1.28 0-2.43-.54-3.24-1.41l-.78 1.19-.78-1.19c-.81.87-1.96 1.41-3.24 1.41-2.45 0-4.44-1.99-4.44-4.44 0-2.45 1.99-4.44 4.44-4.44zm-4.02 6.84c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4zm8.04 0c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4z"/>
          </svg>
        </a>
      </div>"""

footer_payments_html = """  <!-- Secure Payments Trust Bar -->
  <div class="footer-payments-bar">
    <div class="payments-title">
      <i class="fa-solid fa-lock"></i> 100% Secure Bookings
    </div>
    <div class="payments-icons">
      <span class="pay-badge" title="Visa"><i class="fa-brands fa-cc-visa"></i></span>
      <span class="pay-badge" title="Mastercard"><i class="fa-brands fa-cc-mastercard"></i></span>
      <span class="pay-badge" title="PayPal"><i class="fa-brands fa-cc-paypal"></i></span>
      <span class="pay-badge" title="American Express"><i class="fa-brands fa-cc-amex"></i></span>
      <span class="pay-badge" title="Apple Pay"><i class="fa-brands fa-cc-apple-pay"></i></span>
      <span class="pay-badge" title="Bank Wire Transfer"><i class="fa-solid fa-building-columns"></i></span>
    </div>
    <div class="payments-guarantee">
      <i class="fa-solid fa-shield-halved"></i> 256-Bit SSL Encrypted
    </div>
  </div>"""

def process_file(fpath, is_tour=False):
    fname = os.path.basename(fpath)
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    is_crlf = "\r\n" in html
    html = html.replace("\r\n", "\n")

    # 1. Update/Inject CSS
    # Remove previous CSS injection if any
    html = re.sub(r'/\* --- LUXURY TOP BAR.*?\.top-bar-socials a:hover\s*\{[^}]*\}', '', html, flags=re.DOTALL)
    html = re.sub(r'/\* --- LUXURY TOP BAR, LANGUAGE FLAGS & REDESIGNED FOOTER --- \*/[\s\S]*?(?=\n\s*</style>)', '', html, flags=re.DOTALL)
    
    if "</style>" in html:
        html = html.replace("</style>", css_global_header_footer.strip() + "\n  </style>")

    # 2. Add currentLang: 'en' to header x-data if not present
    if "currentLang" not in html:
        html = re.sub(r'(<header id="main-header"[^>]*x-data="\{)', r"\1currentLang:'en',", html, count=1)

    # 3. Clean and inject top_bar_html inside <header ...> right before <div class="navbar">
    header_nav_pattern = re.compile(r'(<header id="main-header"[^>]*>)([\s\S]*?)(<div class="navbar">)', re.DOTALL)
    if header_nav_pattern.search(html):
        html = header_nav_pattern.sub(r'\1\n' + top_bar_html.strip() + '\n\n  \3', html, count=1)
    else:
        print(f"  [WARN] Header navbar pattern not found in {fname}")

    # 4. Handle language flags and mobile cta button in navbar
    # Remove existing flags and mobile cta if any
    html = re.sub(r'<!-- Language Selector Flags.*?</div>\s*</div>', '', html, flags=re.DOTALL)
    html = re.sub(r'<div class="lang-flags-wrap.*?</div>', '', html, flags=re.DOTALL)
    html = re.sub(r'<li class="mobile-cta-li.*?</li>', '', html, flags=re.DOTALL)

    # Add mobile-cta-li inside <ul class="nav-links">
    cta_target = "#booking-form" if is_tour else ("#planner" if fname == "index.html" else "index.html#planner")
    mobile_li = f'''      <li class="mobile-cta-li">
        <a href="{cta_target}" class="btn btn-primary mobile-menu-cta" @click="closeMobileMenu()"><i class="fa-solid fa-compass" style="margin-right:8px;"></i> Plan a Trip</a>
      </li>'''

    # Insert mobile_li right after opening <ul class="nav-links"...>
    html = re.sub(r'(<ul class="nav-links"[^>]*>)', r'\1\n' + mobile_li, html, count=1)

    # Ensure desktop-only class on nav-cta
    html = re.sub(r'(<a href="[^"]*" class="btn btn-primary)"(\s+id="nav-cta")', r'\1 desktop-only"\2', html)
    # Avoid duplicate desktop-only classes
    html = html.replace('desktop-only desktop-only', 'desktop-only')

    # If is_tour, also update desktop nav-cta href to #booking-form if currently #planner
    if is_tour:
        html = re.sub(r'(<a href=")#planner(" class="btn btn-primary desktop-only" id="nav-cta")', r'\1#booking-form\2', html)

    # Insert flags before desktop #nav-cta
    nav_cta_pattern = re.compile(r'(\s*)(<a href="[^"]*" class="btn btn-primary desktop-only" id="nav-cta")', re.DOTALL)
    if nav_cta_pattern.search(html):
        html = nav_cta_pattern.sub(r'\n' + lang_flags_desktop_html.strip() + '\n' + lang_flags_mobile_html.strip() + r'\n\n    \2', html, count=1)

    # 5. Update footer socials
    socials_pattern = re.compile(r'<div class="footer-socials">[\s\S]*?</div>', re.DOTALL)
    if socials_pattern.search(html):
        html = socials_pattern.sub(footer_socials_html, html, count=1)

    # 6. Inject payment bar in footer if not already present
    html = re.sub(r'<!-- Secure Payments Trust Bar -->[\s\S]*?</div>\s*</div>\s*</div>', '', html)
    html = re.sub(r'<div class="footer-payments-bar">[\s\S]*?</div>\s*</div>', '', html)
    footer_bottom_pattern = re.compile(r'(\s*)(<div class="footer-bottom">)', re.DOTALL)
    if footer_bottom_pattern.search(html):
        html = footer_bottom_pattern.sub(r'\n\n  ' + footer_payments_html.strip() + r'\n\n  \2', html, count=1)

    if is_crlf:
        html = html.replace("\n", "\r\n")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"  [SUCCESS] {fname}")

all_files = [(p, False) for p in root_pages] + [(p, True) for p in tour_files]
print(f"Processing total of {len(all_files)} pages across the site...\n")

for path, is_tour in all_files:
    process_file(path, is_tour=is_tour)

print(f"\nCOMPLETED: Updated all {len(all_files)} pages successfully!")
