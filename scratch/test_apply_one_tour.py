import os, sys, re
from bs4 import BeautifulSoup

# Add scratch dir to path
sys.path.append(r'C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d\scratch')
import tour_configs

def apply_tour_features(fpath):
    rel_prefix = "../../" if "16-day-casablanca" in fpath and os.path.dirname(fpath).endswith("16-day-casablanca") else "../"
    fname = os.path.basename(fpath)
    
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # 1. Justify Text CSS & Moroccan Pattern CSS
    extra_tour_css = f"""
/* --- EDITORIAL TEXT JUSTIFY SYSTEM --- */
.timeline-card p,
.timeline-item p,
.overview-card p,
.tour-overview-card p {{
  text-align: justify !important;
  text-justify: inter-word !important;
  line-height: 1.8 !important;
}}

/* --- AUTHENTIC MOROCCAN PATTERN BACKGROUND --- */
.timeline-card {{
  position: relative;
  overflow: hidden;
}}
.timeline-card > * {{
  position: relative;
  z-index: 1;
}}
.timeline-card::after {{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('{rel_prefix}assets/moroccan_pattern.png');
  background-repeat: repeat;
  background-size: 160px 160px;
  opacity: 0.085;
  pointer-events: none;
  z-index: 0;
}}

/* --- TRAVEL STYLE SELECTOR --- */
.travel-style-group {{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 6px 0;
  width: 100%;
}}
.travel-style-label {{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 0.3px;
}}
.travel-style-label i {{
  color: var(--terracotta);
  font-size: 0.95rem;
}}
.travel-style-grid {{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
}}
.travel-style-card {{
  background: rgba(255, 255, 255, 0.03);
  border: 1.5px solid rgba(232, 195, 158, 0.22);
  border-radius: 12px;
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-align: center;
}}
.travel-style-card:hover {{
  border-color: rgba(217, 107, 67, 0.5);
  background: rgba(217, 107, 67, 0.05);
  transform: translateY(-2px);
}}
.travel-style-card .ts-icon {{
  font-size: 1.3rem;
  color: #8b96a5;
  transition: color 0.25s ease, transform 0.25s ease;
}}
.travel-style-card .ts-name {{
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.25s ease;
}}
.travel-style-card.active {{
  border: 2px solid var(--terracotta) !important;
  background: rgba(217, 107, 67, 0.12) !important;
  box-shadow: 0 4px 15px rgba(217, 107, 67, 0.25);
  transform: translateY(-1px);
}}
.travel-style-card.active .ts-icon {{
  color: var(--terracotta) !important;
  transform: scale(1.08);
}}
.travel-style-card.active .ts-name {{
  color: var(--terracotta) !important;
  font-weight: 700;
}}

/* --- MOBILE FULL-WIDTH BOOKING FORM & FLOATING ACTION BAR --- */
@media (max-width: 768px) {{
  .tour-container {{
    padding: 0 16px !important;
    gap: 25px !important;
  }}
  .tour-sidebar {{
    width: 100% !important;
    max-width: 100% !important;
    margin-top: 10px !important;
  }}
  .booking-sidebar-card {{
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    padding: 26px 18px !important;
    border-radius: 18px !important;
    border: 1px solid rgba(232, 195, 158, 0.22) !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4) !important;
  }}
  .booking-sidebar-card .form-group {{
    width: 100% !important;
  }}
  .booking-sidebar-card .form-group input,
  .booking-sidebar-card .form-group select,
  .booking-sidebar-card .form-group textarea {{
    width: 100% !important;
    box-sizing: border-box !important;
  }}
  .booking-sidebar-card .btn {{
    width: 100% !important;
  }}
  .mobile-floating-booking-bar {{
    display: flex !important;
    position: fixed;
    bottom: 16px;
    left: 16px;
    right: 16px;
    z-index: 995;
    background: rgba(22, 18, 16, 0.94);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 195, 158, 0.25);
    border-radius: 50px;
    padding: 10px 14px 10px 20px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.65), 0 0 15px rgba(217, 107, 67, 0.15);
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    animation: slideUpFloat 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }}
  .mobile-floating-booking-bar .mf-left {{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }}
  .mobile-floating-booking-bar .mf-tag {{
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--terracotta);
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }}
  .mobile-floating-booking-bar .mf-title {{
    font-family: var(--font-serif);
    font-size: 1.18rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.2;
  }}
  .mobile-floating-booking-bar .mf-btn {{
    background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 75%, 45%) 100%);
    color: #ffffff !important;
    font-family: var(--font-sans);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 11px 22px;
    border-radius: 30px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    box-shadow: 0 4px 16px rgba(217, 107, 67, 0.45);
    transition: transform 0.2s ease;
    border: none;
    outline: none;
    cursor: pointer;
  }}
  .mobile-floating-booking-bar .mf-btn:active {{
    transform: scale(0.96);
  }}
}}
@media (min-width: 769px) {{
  .mobile-floating-booking-bar {{
    display: none !important;
  }}
}}
@keyframes slideUpFloat {{
  from {{ transform: translateY(80px); opacity: 0; }}
  to {{ transform: translateY(0); opacity: 1; }}
}}
"""
    if "/* --- EDITORIAL TEXT JUSTIFY SYSTEM --- */" not in html:
        html = html.replace("</style>", extra_tour_css.strip() + "\n  </style>")

    # 2. Inject Travel Style Selector in Form
    html_travel_style = """
            <!-- Travel Style Selector -->
            <div class="travel-style-group">
              <label class="travel-style-label">
                <i class="fa-solid fa-star"></i> Travel Style
              </label>
              <div class="travel-style-grid">
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Standard' ? 'active' : ''" 
                     @click="bookingData.style = 'Standard'">
                  <i class="fa-solid fa-wallet ts-icon"></i>
                  <span class="ts-name">Standard</span>
                </div>
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Comfort' ? 'active' : ''" 
                     @click="bookingData.style = 'Comfort'">
                  <i class="fa-solid fa-hotel ts-icon"></i>
                  <span class="ts-name">Comfort</span>
                </div>
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Luxury' ? 'active' : ''" 
                     @click="bookingData.style = 'Luxury'">
                  <i class="fa-solid fa-crown ts-icon"></i>
                  <span class="ts-name">Luxury</span>
                </div>
              </div>
              <input type="hidden" name="travel_style" :value="bookingData.style" />
            </div>
"""
    # Alpine data style
    if "style: 'Standard'" not in html:
        html = re.sub(r"(date:\s*'',)", r"\1\n           style: 'Standard',", html, count=1)

    if '<div class="travel-style-group">' not in html:
        pattern = re.compile(r'(<div class="form-group floated">\s*<textarea[^>]*id="contact-message")', re.DOTALL)
        if pattern.search(html):
            html = pattern.sub(html_travel_style.strip() + "\n\n            " + r"\1", html, count=1)

    # 3. Inject Mobile Floating Action Bar before </body>
    mobile_bar_html = """
  <!-- Mobile Floating Action Bar for Quick Booking -->
  <div class="mobile-floating-booking-bar" id="mobile-booking-bar">
    <div class="mf-left">
      <span class="mf-tag"><i class="fa-solid fa-shield-halved"></i> INSTANT RESERVE</span>
      <span class="mf-title">Book This Tour</span>
    </div>
    <button type="button" class="mf-btn" onclick="const f=document.getElementById('booking-form');if(f){f.scrollIntoView({behavior:'smooth'});}">
      Book Now &darr;
    </button>
  </div>
"""
    if 'id="mobile-booking-bar"' not in html:
        html = html.replace("</body>", mobile_bar_html.strip() + "\n</body>")

    # 4. Inject Route Map Card with Milestones if not present
    if '<div class="route-map-card' not in html:
        tour_cfg = tour_configs.get_tour_config(fname, html)
        map_title = tour_cfg[0] if len(tour_cfg) > 0 else "Tour Route Circuit & Map"
        waypoints = tour_cfg[4] if len(tour_cfg) > 4 else []
        
        milestones_html = ""
        for idx, wp in enumerate(waypoints):
            is_start = (idx == 0)
            is_end = (idx == len(waypoints) - 1)
            node_class = "milestone-node start-node" if is_start else ("milestone-node end-node" if is_end else "milestone-node")
            icon = '<i class="fa-solid fa-star"></i>' if is_start else ('<i class="fa-solid fa-flag-checkered"></i>' if is_end else '<i class="fa-solid fa-location-dot"></i>')
            day_text = f"<span style=\"font-size:0.75rem; color:var(--sand-gold); margin-left:4px;\">({wp.get('day', '')})</span>" if wp.get('day') else ""
            
            milestones_html += f"""
                  <div class="{node_class}">
                    {icon} <strong>{wp['name']}</strong> {day_text}
                  </div>"""
            if not is_end:
                milestones_html += """
                  <div class="milestone-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>"""

        route_map_card_html = f"""
        <!-- Interactive Route Map Card -->
        <div class="route-map-card reveal active">
          <h3>{map_title}</h3>
          <p>This comprehensive circuit represents your exact travel route across Morocco, taking in coastal bastions, mountain trails, imperial medinas, and the majestic Sahara sand dunes of Erg Chebbi.</p>

          <div class="route-map-backdrop" id="svg-map-backdrop">
            <img 
              src="{rel_prefix}assets/morocco_travel_map.png" 
              alt="Bespoke Travel Map of Morocco - Sahara Star Tours" 
              style="width: 100%; height: 100%; object-fit: contain; border-radius: var(--radius-sm); filter: contrast(1.02) brightness(0.95);"
              loading="lazy"
            />
          </div>

          <!-- Point-by-point Milestones Stepper -->
          <div class="map-milestones-wrapper" id="map-milestones-wrapper">
            <h5>Route Waypoints (Point-by-Point):</h5>
            <div class="map-milestones" id="map-milestones">
              {milestones_html.strip()}
            </div>
          </div>
        </div>
"""
        # Inject right before <!-- Media Gallery --> or gallery-card
        if '<!-- Media Gallery -->' in html:
            html = html.replace('<!-- Media Gallery -->', route_map_card_html.strip() + '\n\n        <!-- Media Gallery -->')
        elif 'class="gallery-card' in html:
            pattern = re.compile(r'(<div class="gallery-card[^"]*">)', re.DOTALL)
            html = pattern.sub(route_map_card_html.strip() + '\n\n        ' + r'\1', html, count=1)

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Applied successfully to {fname}!")

if __name__ == '__main__':
    apply_tour_features('tours/7-day-morocco-tour-from-casablanca.html')
