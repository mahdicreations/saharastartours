import glob, os, re
from bs4 import BeautifulSoup

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
print(f"Discovered {len(tour_files)} tour files to process.")

KNOWN_CITIES = [
    ("Casablanca", ["casablanca", "casa airport"]),
    ("Rabat", ["rabat", "sale"]),
    ("Asilah", ["asilah", "assilah"]),
    ("Tangier", ["tangier", "tanger"]),
    ("Tetouan", ["tetouan", "tetoun"]),
    ("Chefchaouen", ["chefchaouen", "chaouen", "blue city"]),
    ("Volubilis", ["volubilis", "walili"]),
    ("Meknes", ["meknes"]),
    ("Fes", ["fes", "fez"]),
    ("Ifrane", ["ifrane"]),
    ("Azrou", ["azrou"]),
    ("Midelt", ["midelt"]),
    ("Ziz Valley", ["ziz valley", "ziz"]),
    ("Erfoud", ["erfoud"]),
    ("Rissani", ["rissani"]),
    ("Merzouga Sahara", ["merzouga", "erg chebbi", "sahara desert", "desert dunes", "dunes", "nomad"]),
    ("Todra Gorge", ["todra", "toudgha"]),
    ("Dades Valley", ["dades", "boumalne"]),
    ("Rose Valley", ["rose valley", "kalaat"]),
    ("Skoura", ["skoura"]),
    ("Ouarzazate", ["ouarzazate"]),
    ("Ait Benhaddou", ["ait benhaddou", "ait ben haddou", "ait ben-haddou"]),
    ("Tizi n'Tichka", ["tichka"]),
    ("Marrakech", ["marrakech"]),
    ("Essaouira", ["essaouira", "mogador"]),
    ("Ouzoud Waterfalls", ["ouzoud"]),
    ("Ourika Valley", ["ourika"]),
    ("Agafay Desert", ["agafay"]),
    ("Taroudant", ["taroudant"]),
    ("Agadir", ["agadir"])
]

def extract_tour_route(fpath, html):
    fname = os.path.basename(fpath)
    soup = BeautifulSoup(html, 'html.parser')
    
    h1 = soup.find('h1')
    title_text = h1.get_text(strip=True) if h1 else fname.replace('.html', '').replace('-', ' ').title()
    title_text = re.sub(r'\s+', ' ', title_text)
    
    items = soup.find_all(class_='timeline-item')
    fname_lower = fname.lower()
    
    # Day trips / activities
    if len(items) <= 1:
        if "essaouira" in fname_lower:
            return "Essaouira Day Trip Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "08:00 AM"},
                {"name": "Argan Oil Cooperative & Tree Goats", "day": "Midway"},
                {"name": "Essaouira Port & Ramparts", "day": "Noon"},
                {"name": "UNESCO Medina & Skala", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "19:00 PM"}
            ]
        elif "ouzoud" in fname_lower:
            return "Ouzoud Waterfalls Day Trip Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "08:00 AM"},
                {"name": "Middle Atlas Berber Foothills", "day": "Midway"},
                {"name": "Ouzoud Waterfalls (110m Cascades)", "day": "Guided Hike"},
                {"name": "River Barge & Wild Barbary Apes", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "18:30 PM"}
            ]
        elif "ouarzazate" in fname_lower or "ait-ben-haddou" in fname_lower:
            return "Ait Benhaddou & Ouarzazate Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "07:30 AM"},
                {"name": "Tizi n'Tichka Pass (2,260m)", "day": "High Atlas"},
                {"name": "Kasbah Ait Benhaddou (UNESCO)", "day": "Historic Tour"},
                {"name": "Ouarzazate & Cinema Studios", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "19:30 PM"}
            ]
        elif "ourika" in fname_lower:
            return "Ourika Valley & Atlas Mountains Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "09:00 AM"},
                {"name": "Traditional Berber Village & Tea", "day": "Midway"},
                {"name": "Setti Fatma Waterfalls Trail", "day": "Hike"},
                {"name": "Riverside Lunch by the Cascades", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "17:00 PM"}
            ]
        elif "agafay" in fname_lower:
            return "Agafay Desert Sunset & Dinner Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "16:00 PM"},
                {"name": "Agafay Rocky Desert Golden Dunes", "day": "Sunset"},
                {"name": "Nomad Camel Trek in Traditional Robes", "day": "Trek"},
                {"name": "Luxury Desert Camp Banquet & Fire Show", "day": "Dinner"},
                {"name": "Return to Marrakech", "day": "22:30 PM"}
            ]
        elif "balloon" in fname_lower:
            return "Marrakech Hot Air Balloon Experience Route Map", [
                {"name": "Marrakech (Sunrise Pick-up)", "day": "05:30 AM"},
                {"name": "Launch Site & Inflation Ceremony", "day": "Pre-flight"},
                {"name": "Atlas Sunrise Flight (1,000m Altitude)", "day": "1 Hour Flight"},
                {"name": "Berber Royal Breakfast & Flight Certificate", "day": "Celebration"},
                {"name": "Return to Marrakech Hotel", "day": "10:30 AM"}
            ]
        elif "camel" in fname_lower:
            return "Marrakech Palm Grove Camel Ride Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Palmeraie Oasis Palm Groves", "day": "Arrival"},
                {"name": "Nomad Cheche & Camel Caravan Trek", "day": "Activity"},
                {"name": "Berber Hospitality & Mint Tea Break", "day": "Tea Time"},
                {"name": "Drop-off at Marrakech Hotel", "day": "Return"}
            ]
        elif "horse" in fname_lower:
            return "Marrakech Horse Riding Experience Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Equestrian Club & Safety Briefing", "day": "Briefing"},
                {"name": "Palmeraie Trails & Berber Villages Ride", "day": "Horse Trek"},
                {"name": "Panoramic Atlas Viewpoints & Mint Tea", "day": "Relax"},
                {"name": "Return to Marrakech Hotel", "day": "Return"}
            ]
        elif "quad" in fname_lower or "buggy" in fname_lower:
            act_type = "Quad Biking" if "quad" in fname_lower else "Raid Buggy"
            return f"Marrakech {act_type} Adventure Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Oasis Basecamp & Safety Instructions", "day": "Preparation"},
                {"name": "Palmeraie Desert Trails & Rocky Hills", "day": "Adrenaline Run"},
                {"name": "Berber Village Mint Tea & Photo Stop", "day": "Tea Break"},
                {"name": "Return to Marrakech Hotel", "day": "Return"}
            ]
        elif "fantasia" in fname_lower:
            return "Fantasia Chez Ali Marrakech Dinner & Show Route Map", [
                {"name": "Marrakech Hotel Pick-up", "day": "20:00 PM"},
                {"name": "Palace Gates Welcome & Folkloric Troupes", "day": "Reception"},
                {"name": "Traditional Caidal Tent Moroccan Feast", "day": "Banquet"},
                {"name": "Fantasia Cavalry Horsemanship & Fireworks", "day": "Spectacle"},
                {"name": "Return Transfer to Marrakech Riad", "day": "Midnight"}
            ]
        elif "guided-tour" in fname_lower:
            return "Marrakech Historic Guided City Tour Route Map", [
                {"name": "Koutoubia Mosque & Gardens", "day": "Morning"},
                {"name": "Bahia Palace & Jewish Mellah", "day": "Mid-morning"},
                {"name": "Saadian Tombs & Bab Agnaou", "day": "Noon"},
                {"name": "Ben Youssef Medersa & Souks", "day": "Afternoon"},
                {"name": "Jemaa El-Fna Square & Majorelle Garden", "day": "Late Afternoon"}
            ]

    # Specific multi-day special routes for desert tours:
    if "3-days-desert-tour-from-marrakech-to-fes" in fname_lower:
        return "3-Day Marrakech to Fes Desert Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "High Atlas & Ait Benhaddou", "day": "Day 1"},
            {"name": "Dades Valley & Gorges", "day": "Day 1"},
            {"name": "Todra Gorges & Palm Groves", "day": "Day 2"},
            {"name": "Merzouga Sahara & Luxury Camp", "day": "Day 2"},
            {"name": "Ziz Valley & Middle Atlas Cedars", "day": "Day 3"},
            {"name": "Fes Medina (Grand Finale)", "day": "Day 3"}
        ]

    if "4-days-marrakech-desert-tour" in fname_lower:
        return "4-Day Marrakech Desert Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "Ait Benhaddou & Dades Gorges", "day": "Day 1"},
            {"name": "Todra Canyon & Tinghir", "day": "Day 2"},
            {"name": "Merzouga Sahara Erg Chebbi", "day": "Day 2 & 3"},
            {"name": "Rissani & Draa Valley Oasis", "day": "Day 3"},
            {"name": "Ouarzazate Kasbahs", "day": "Day 3 & 4"},
            {"name": "High Atlas to Marrakech (End)", "day": "Day 4"}
        ]

    if "5-days-tour-from-marrakech-to-merzouga" in fname_lower:
        return "5-Day Marrakech to Merzouga Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "Tizi n'Tichka & Ait Benhaddou", "day": "Day 1"},
            {"name": "Dades & Todra Valleys", "day": "Day 2"},
            {"name": "Merzouga Dunes & Camel Trek", "day": "Day 3"},
            {"name": "Nomad Families & Gnawa Music", "day": "Day 4"},
            {"name": "Ouarzazate & Cinema Studios", "day": "Day 5"},
            {"name": "Marrakech Grand Finale (End)", "day": "Day 5"}
        ]

    # General Multi-day Tours
    waypoints = []
    for idx, it in enumerate(items):
        day_num = idx + 1
        h4 = it.find('h4')
        h4_text = h4.get_text(strip=True) if h4 else f"Day {day_num}"
        
        h4_clean = re.sub(r'^[Dd]ay\s*\d+[\s:\-–—]+', '', h4_text)
        h4_clean = re.sub(r'[:–—\-]+$', '', h4_clean).strip()
        
        day_title_lower = h4_text.lower()
        matched_city = None
        for city_name, keywords in KNOWN_CITIES:
            for kw in keywords:
                if kw in day_title_lower:
                    matched_city = city_name
                    break
            if matched_city:
                break
        
        name = matched_city if matched_city else h4_clean[:30]
        if not waypoints or waypoints[-1]["name"] != name:
            waypoints.append({"name": name, "day": f"Day {day_num}"})
        else:
            waypoints[-1]["day"] += f" & {day_num}"

    # First and Last nodes
    if waypoints:
        if "start" not in waypoints[0]["name"].lower() and len(waypoints) > 2:
            waypoints[0]["name"] += " (Start)"
        
        # Check last node
        last_name_lower = waypoints[-1]["name"].lower()
        if "end" not in last_name_lower and "finale" not in last_name_lower and len(waypoints) > 2:
            if "casablanca" in fname_lower and "marrakech" not in fname_lower:
                waypoints[-1]["name"] = "Casablanca (End)"
            elif "marrakech" in fname_lower and "fes" not in fname_lower:
                waypoints[-1]["name"] = "Marrakech (End)"
            else:
                waypoints[-1]["name"] += " (End)"

    return f"{title_text} Route Map", waypoints


def process_tour_file(fpath):
    fname = os.path.basename(fpath)
    rel_prefix = "../../" if "16-day-casablanca" in fpath and os.path.dirname(fpath).endswith("16-day-casablanca") else "../"
    
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # 1. Extra CSS: Text Justification, Pattern Background, Travel Style, Mobile Floating Bar
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

    # 2. Travel Style Selector in Booking Form
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
    if "style: 'Standard'" not in html:
        html = re.sub(r"(date:\s*'',)", r"\1\n           style: 'Standard',", html, count=1)

    if '<div class="travel-style-group">' not in html:
        pattern = re.compile(r'(<div class="form-group floated">\s*<textarea[^>]*id="contact-message")', re.DOTALL)
        if pattern.search(html):
            html = pattern.sub(html_travel_style.strip() + "\n\n            " + r"\1", html, count=1)

    # 3. Mobile Floating Action Bar before </body>
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

    # 4. Route Map Card with Milestones Stepper
    if '<div class="route-map-card' not in html:
        map_title, waypoints = extract_tour_route(fpath, html)
        
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
    print(f"[OK] Processed {fname}")

for fpath in tour_files:
    process_tour_file(fpath)

print("\nAll 31 tour files processed successfully!")
