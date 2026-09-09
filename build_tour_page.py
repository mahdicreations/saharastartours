import os
import re

# Ensure directory exists
os.makedirs('tours/16-day-casablanca', exist_ok=True)

# Read index.html to extract head, header, footer
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

head_match = re.search(r'(<head>.*?</style>\s*</head>)', html, re.DOTALL)
header_match = re.search(r'(<header id="main-header".*?</header>)', html, re.DOTALL)
footer_match = re.search(r'(<footer>.*?</footer>)', html, re.DOTALL)

head_base = head_match.group(1)
header_base = header_match.group(1)
footer_base = footer_match.group(1)

# Read pure tour CSS
with open('tour_pure.css', 'r', encoding='utf-8') as f:
    tour_css = f.read()

# Additional modal and fine-tune styling for tour detail page
extra_css = """
/* Booking Form Floating Labels & Modal for Tour Detail */
.form-group.floated label,
.form-group:focus-within label {
  top: 0;
  font-size: 0.78rem;
  color: var(--sand-gold);
  background: var(--night-card);
  padding: 0 6px;
}
.booking-sidebar-card select option,
.booking-sidebar-card select optgroup {
  background: var(--night-card);
  color: var(--text-main);
}
.booking-sidebar-card input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.8) sepia(100%) hue-rotate(330deg);
  cursor: pointer;
}
.success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-smooth);
}
.success-overlay.active {
  opacity: 1;
  pointer-events: all;
}
.success-card {
  background: var(--night-surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 40px;
  max-width: 520px;
  width: 90%;
  text-align: center;
  box-shadow: var(--shadow-premium);
  transform: scale(0.9);
  transition: var(--transition-smooth);
}
.success-overlay.active .success-card {
  transform: scale(1);
}
.success-icon-box {
  width: 70px;
  height: 70px;
  background: rgba(217, 107, 67, 0.1);
  border: 2px solid var(--terracotta);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  color: var(--sand-gold);
  box-shadow: 0 0 20px var(--terracotta-glow);
}
.success-card h3 {
  font-size: 1.8rem;
  color: var(--sand-gold);
  margin-bottom: 15px;
}
.success-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
}
"""

combined_tour_css = tour_css + "\n" + extra_css

itinerary_data = [
    { "day": "Day 1", "title": "Casablanca Arrival & Atlantic View", "desc": "Private airport pickup and transfer to your luxury beachfront hotel. Relax and unwind as you acclimate to the beautiful Mediterranean climate, enjoying a fresh seafood dinner at the port harbor." },
    { "day": "Day 2", "title": "Casablanca Hassan II Mosque to Rabat Capital", "desc": "Tour the breathtaking Hassan II Mosque sitting directly over the Atlantic Ocean waves. In the afternoon, take a scenic drive to the capital city of Rabat to explore the historic Hassan Tower and Mausoleum." },
    { "day": "Day 3", "title": "Rabat to Coastal Tangier via Asilah", "desc": "Drive north along the scenic Atlantic coastline, stopping in the charming whitewashed art-filled town of Asilah. Continue past coastal cliffs to the legendary international gateway of Tangier, where the Mediterranean meets the Atlantic." },
    { "day": "Day 4", "title": "Tangier City Tour & Cap Spartel", "desc": "Explore the legendary Caves of Hercules and Cap Spartel lighthouse. Wander the labyrinth pathways of Tangier's old Kasbah, overlooking the Gibraltar Strait, and visit the historic American Legation museum." },
    { "day": "Day 5", "title": "Tangier to Blue-Washed Chefchaouen", "desc": "Drive past the dramatic limestone peaks of the Rif Mountains to the dreamy blue-painted town of Chefchaouen. Check into your zellige-trimmed luxury Riad and enjoy a relaxing sunset walk." },
    { "day": "Day 6", "title": "Chefchaouen Medina Walking Tour", "desc": "Wander the dreamy blue alleys of the medina, discovering local weaving cooperatives, hidden Andalusian gardens, and climbing up to the Spanish Mosque for a panoramic sunset view over the valley." },
    { "day": "Day 7", "title": "Chefchaouen to Fes via Roman Ruins", "desc": "Depart the Rif mountains, stopping to tour the ancient Roman ruins of Volubilis and the historic gates of imperial Meknes. Check into a majestic medieval palace Riad inside the Fes medina." },
    { "day": "Day 8", "title": "Fes Guided Medina History Tour", "desc": "Explore Fes El Bali medina, a UNESCO site with over 9,000 alleys. Visit the 9th-century Al-Qarawiyyin University, Bou Inania Madrasa zellige work, and the royal palace gates." },
    { "day": "Day 9", "title": "Fes Historical Palaces & Cooking Class", "desc": "Discover historic Jewish heritage at the Mellah. Settle into a traditional hands-on Moroccan cooking class inside a boutique Riad, learning to roll couscous and prepare slow-cooked lamb tagines." },
    { "day": "Day 10", "title": "Fes to Midelt Cedar Forests", "desc": "Cross the Middle Atlas ranges, touring the alpine town of Ifrane and meeting native Barbary apes in the cedar forests of Azrou. Settle in for a peaceful evening in the quiet mountain town of Midelt." },
    { "day": "Day 11", "title": "Midelt to Sahara Desert Dunes", "desc": "Drive through the spectacular palm oases of the Ziz Valley, reaching the golden sands of Merzouga. Mount your camel for a scenic sunset trek into the heart of the Erg Chebbi luxury camp." },
    { "day": "Day 12", "title": "Sahara Off-Road Nomad Safari", "desc": "Spend a full day exploring the desert. Visit nomadic families in woolen tents, listen to spiritual Gnawa musicians in Khamlia, eat delicious Berber pizza, and sleep under bright desert stars." },
    { "day": "Day 13", "title": "Merzouga to Dades Gorges via Todra", "desc": "Witness sunrise over the dunes. Walk beneath vertical cliffs at Todra Gorge and wind past strange geological rock formations to your panoramic luxury stone Riad in the Dades Gorges." },
    { "day": "Day 14", "title": "Dades Valley to Red Marrakech", "desc": "Explore Ait Benhaddou mud-brick Kasbah, then cross the High Atlas peaks via Tizi n'Tichka pass. Arrive in Marrakech and enjoy the energetic street performers at Jemaa el-Fnaa square." },
    { "day": "Day 15", "title": "Marrakech Medina Secrets Guided Tour", "desc": "Tour the beautiful Bahia Palace, Saadian Tombs, and towering Koutoubia Mosque. Stroll Majorelle's cobalt blue pathways and shop for leather, brass, and spices inside colorful craft souks." },
    { "day": "Day 16", "title": "Essaouira Atlantic Port to Casablanca Departure", "desc": "Depart to Essaouira coastal town to tour old Portuguese sea fortress walls. Settle in for fresh harbor seafood before transferring back to Casablanca airport for your return flight home." }
]

waypoints = ["Casablanca", "Rabat", "Tangier", "Chefchaouen", "Fes", "Merzouga", "Dades Gorges", "Marrakech", "Essaouira"]

inclusions = [
    "Mercedes luxury transport",
    "15 Nights in Premium Riads/Luxury Camp",
    "Daily breakfast & gourmet dinners",
    "Certified local guides in every city",
    "Traditional cooking class",
    "Sunset camel safari",
    "Airport transfers"
]

exclusions = [
    "Lunches and personal snacks",
    "Monument entry tickets",
    "Shopping and tips"
]

def generate_page(rel_prefix):
    # rel_prefix is '../' for tours/16-day-casablanca.html
    # and '../../' for tours/16-day-casablanca/index.html
    
    # Head setup
    head = head_base.replace("</style>", combined_tour_css + "\n  </style>")
    head = re.sub(r'<title>.*?</title>', '<title>16 Days Morocco Tour from Casablanca | Sahara Star Tours</title>', head)
    head = re.sub(r'<meta name="description" content=".*?"', '<meta name="description" content="Embark on the ultimate 16-day luxury tour across Morocco from Casablanca. Experience imperial cities, Chefchaouen, Sahara desert glamping, and Marrakech."', head)
    
    # Header links adjustment
    h = header_base
    # Fix logo
    h = h.replace('src="assets/logo.png"', f'src="{rel_prefix}assets/logo.png"')
    # Fix nav links
    h = h.replace('href="#hero"', f'href="{rel_prefix}index.html#hero"')
    h = h.replace('href="#tours"', f'href="{rel_prefix}index.html#tours"')
    h = h.replace('href="#starting-cities"', f'href="{rel_prefix}index.html#starting-cities"')
    h = h.replace('href="#reviews"', f'href="{rel_prefix}index.html#reviews"')
    h = h.replace('href="#contact"', f'href="{rel_prefix}index.html#contact"')
    h = h.replace('href="about.html"', f'href="{rel_prefix}about.html"')
    h = h.replace('href="tours/16-day-casablanca.html"', '#')

    # Footer links adjustment
    f_html = footer_base
    f_html = f_html.replace('src="assets/logo.png"', f'src="{rel_prefix}assets/logo.png"')
    f_html = f_html.replace('href="#hero"', f'href="{rel_prefix}index.html#hero"')
    f_html = f_html.replace('href="#tours"', f'href="{rel_prefix}index.html#tours"')
    f_html = f_html.replace('href="#calculator"', f'href="{rel_prefix}index.html#calculator"')
    f_html = f_html.replace('href="#reviews"', f'href="{rel_prefix}index.html#reviews"')
    f_html = f_html.replace('href="#contact"', f'href="{rel_prefix}index.html#contact"')
    f_html = f_html.replace('href="about.html"', f'href="{rel_prefix}about.html"')

    # Build Itinerary HTML
    timeline_items_html = ""
    for item in itinerary_data:
        timeline_items_html += f"""
              <div class="timeline-item">
                <div class="timeline-day-tag">{item['day']}</div>
                <h4>{item['title']}</h4>
                <p>{item['desc']}</p>
              </div>"""

    # Build Waypoints HTML
    milestones_html = ""
    for idx, p in enumerate(waypoints):
        if idx == 0:
            milestones_html += f"""
                  <div class="milestone-node start-node">
                    <i class="fa-solid fa-star"></i> <strong>{p} (Start)</strong>
                  </div>"""
        else:
            milestones_html += f"""
                  <div class="milestone-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div class="milestone-node">
                    <i class="fa-solid fa-location-dot"></i> <span>{p}</span>
                  </div>"""

    # Inclusions HTML
    inc_items_html = "\n".join([f'<li><i class="fa-solid fa-circle-check"></i> {item}</li>' for item in inclusions])
    exc_items_html = "\n".join([f'<li><i class="fa-solid fa-circle-xmark"></i> {item}</li>' for item in exclusions])

    # Gallery images
    gallery_images = [
        { "src": f"{rel_prefix}assets/camel_trek_dunes.png", "cap": "Sunset Camel Caravan in Erg Chebbi Dunes" },
        { "src": f"{rel_prefix}assets/hero_sahara_sunset.png", "cap": "Luxury Nomadic Glamping Camp Bonfire" },
        { "src": f"{rel_prefix}assets/atlas_mountains_valley.png", "cap": "Panoramic High Atlas Mountains Crossing" },
        { "src": f"{rel_prefix}assets/marrakech_riad_pool.png", "cap": "Tranquil Boutique Riad Courtyard Pool" }
    ]
    gallery_html = ""
    for idx, img in enumerate(gallery_images):
        gallery_html += f"""
              <div class="gallery-item" @click="openLightbox({idx})">
                <img src="{img['src']}" alt="{img['cap']}" loading="lazy" />
                <div class="gallery-overlay">
                  <i class="fa-solid fa-maximize"></i>
                </div>
              </div>"""

    body_content = f"""
  <div id="tour-detail-page" 
       x-data="{{
         lightboxOpen: false,
         activeIndex: 0,
         images: [
           {{ src: '{gallery_images[0]["src"]}', cap: '{gallery_images[0]["cap"]}' }},
           {{ src: '{gallery_images[1]["src"]}', cap: '{gallery_images[1]["cap"]}' }},
           {{ src: '{gallery_images[2]["src"]}', cap: '{gallery_images[2]["cap"]}' }},
           {{ src: '{gallery_images[3]["src"]}', cap: '{gallery_images[3]["cap"]}' }}
         ],
         bookingData: {{
           name: '',
           email: '',
           package: '16-day-casablanca',
           travelers: '2 Adults',
           date: '',
           message: ''
         }},
         showSuccessModal: false,
         successMsg: '',
         openLightbox(idx) {{
           this.activeIndex = idx;
           this.lightboxOpen = true;
         }},
         prevImage() {{
           this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
         }},
         nextImage() {{
           this.activeIndex = (this.activeIndex + 1) % this.images.length;
         }},
         submitBooking() {{
           this.successMsg = 'Shukran, ' + this.bookingData.name + '! Your inquiry for the 16 Days Morocco Tour from Casablanca has been registered. Our travel designers in Marrakech will send your detailed personalized itinerary to ' + this.bookingData.email + ' within 24 hours.';
           this.showSuccessModal = true;
           document.body.style.overflow = 'hidden';
         }},
         closeModal() {{
           this.showSuccessModal = false;
           document.body.style.overflow = '';
         }}
       }}"
       @keydown.escape.window="if(lightboxOpen) lightboxOpen = false; if(showSuccessModal) closeModal();"
       @keydown.left.window="if(lightboxOpen) prevImage();"
       @keydown.right.window="if(lightboxOpen) nextImage();"
  >
    <!-- TOUR HERO SECTION -->
    <section class="tour-hero-section">
      <div class="tour-hero-bg">
        <img src="{rel_prefix}assets/tour_16day_casablanca.png" alt="16 Days Morocco Tour from Casablanca" />
      </div>
      <div class="tour-hero-gradient"></div>

      <div class="tour-hero-content">
        <span class="tour-tag">Desert Tours &amp; Grand Expedition</span>
        <h1>16 Days Morocco Tour from Casablanca</h1>
        <div class="tour-quick-meta">
          <span><i class="fa-regular fa-clock"></i> <strong>16 Days / 15 Nights</strong></span>
          <span><i class="fa-solid fa-star"></i> <strong>4.9 (112 reviews)</strong></span>
          <span><i class="fa-solid fa-compass"></i> Route: <strong>Casablanca → Rabat → Tangier → Chefchaouen → Fes → Merzouga → Dades Gorges → Marrakech → Essaouira</strong></span>
        </div>
      </div>
    </section>

    <!-- MAIN PAGE GRID CONTAINER -->
    <div class="tour-container" id="tour-detail-container">
      
      <!-- Left Column: Itinerary, Map, Gallery, Inclusions -->
      <div class="tour-main">
        
        <!-- Day-by-Day Timeline -->
        <div class="timeline-card reveal active">
          <h3>Day-by-Day Program Itinerary</h3>
          <div class="timeline-steps-wrapper" id="timeline-steps">
            {timeline_items_html}
          </div>
        </div>

        <!-- Interactive Route Map Card -->
        <div class="route-map-card reveal active">
          <h3>Tour Route Circuit &amp; Map</h3>
          <p>This comprehensive circuit represents your exact travel route across Morocco, taking in coastal bastions, mountain Rif and Atlas trails, the imperial capitals, and the majestic Sahara sand dunes of Erg Chebbi.</p>

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
              {milestones_html}
            </div>
          </div>
        </div>

        <!-- Media Gallery -->
        <div class="gallery-card reveal active">
          <h3>Expedition Media Gallery</h3>
          <p>A visual glimpse of the spectacular landscapes, ancient boutique clay architecture, and majestic dune heights awaiting you.</p>
          <div class="gallery-grid" id="gallery-grid">
            {gallery_html}
          </div>
        </div>

        <!-- Inclusions & Exclusions Split Card -->
        <div class="inclusions-card reveal active">
          <h3>Inclusions &amp; Trip Details</h3>

          <div class="inc-exc-split">
            <div class="modal-inc-col included">
              <h5><i class="fa-solid fa-circle-check" style="color:var(--sand-gold); margin-right:8px;"></i> What's Included</h5>
              <ul class="modal-inc-list" style="list-style:none; display:flex; flex-direction:column; gap:12px; margin-top:16px;">
                {inc_items_html}
              </ul>
            </div>

            <div class="modal-inc-col excluded">
              <h5><i class="fa-solid fa-circle-xmark" style="color:var(--terracotta); margin-right:8px;"></i> What's Excluded</h5>
              <ul class="modal-inc-list" style="list-style:none; display:flex; flex-direction:column; gap:12px; margin-top:16px;">
                {exc_items_html}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Sidebar Booking Form -->
      <div class="tour-sidebar">
        <div class="booking-sidebar-card reveal active" id="booking-form">
          <h3>Book This Expedition</h3>
          <p class="booking-price">Package rate from: <span id="tour-price">$1,890</span></p>

          <form class="contact-form" @submit.prevent="submitBooking()" style="display:flex; flex-direction:column; gap:18px;">
            <div class="form-group floated">
              <input 
                type="text" 
                name="name" 
                id="contact-name" 
                x-model="bookingData.name"
                placeholder=" " 
                required 
              />
              <label for="contact-name">Your Full Name</label>
            </div>

            <div class="form-group floated">
              <input 
                type="email" 
                name="email" 
                id="contact-email" 
                x-model="bookingData.email"
                placeholder=" " 
                required 
              />
              <label for="contact-email">Email Address</label>
            </div>

            <div class="form-group floated">
              <select 
                name="package" 
                id="contact-package" 
                x-model="bookingData.package"
                style="width: 100%;"
              >
                <optgroup label="Desert Tours">
                  <option value="16-day-casablanca">16 Days Morocco Tour from Casablanca (Selected)</option>
                  <option value="9-day-authentic">9 Day Authentic Morocco Tour</option>
                  <option value="12-day-desert">Private 12 Days Trip To Desert &amp; Marrakech</option>
                  <option value="12-day-casablanca">Best 12 Days Morocco Tour From Casablanca</option>
                  <option value="8-day-casablanca">Ideal Morocco 8 Days Itinerary Tour</option>
                  <option value="9-day-desert-imperial">Morocco 9 Days Desert &amp; Imperial</option>
                  <option value="4-day-marrakech-desert">Ideal 4 Days Marrakech Desert Tour</option>
                  <option value="6-day-desert">Morocco Itinerary 6 Days Desert Tour</option>
                  <option value="3-day-marrakech-fes">3 Days Desert Tour From Marrakech To Fes</option>
                  <option value="10-day-casablanca">10 Days Casablanca Tour</option>
                  <option value="7-day-casablanca-marrakech">Best 7-Day Morocco Tour</option>
                  <option value="5-day-marrakech-merzouga">5 Days Tour Marrakech to Merzouga</option>
                </optgroup>
                <optgroup label="Imperial Cities">
                  <option value="15-day-casablanca">15 Days Tour from Casablanca</option>
                  <option value="13-day-casablanca">The Best 13 Days Casablanca Tour</option>
                  <option value="11-day-classic">11 Days Morocco Classic Tour</option>
                </optgroup>
              </select>
              <label for="contact-package">Active Tour Program</label>
            </div>

            <div class="form-group floated">
              <input 
                type="text" 
                name="travelers" 
                id="contact-travelers" 
                x-model="bookingData.travelers"
                placeholder=" " 
                required 
              />
              <label for="contact-travelers">Number of Travelers (e.g. 2 adults)</label>
            </div>

            <div class="form-group floated">
              <input 
                type="date" 
                name="date" 
                id="contact-date" 
                x-model="bookingData.date"
                required 
              />
              <label for="contact-date">Preferred Departure Date</label>
            </div>

            <div class="form-group floated">
              <textarea 
                name="message" 
                id="contact-message" 
                x-model="bookingData.message"
                placeholder=" " 
                rows="4"
              ></textarea>
              <label for="contact-message">Special Wishes (Diet, Riad category, flights...)</label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; font-weight:600;">
              <i class="fa-solid fa-paper-plane" style="margin-right:8px;"></i> Submit Booking Request
            </button>
          </form>
        </div>
      </div>

    </div>

    <!-- Portable Lightbox Preview Modal -->
    <div class="lightbox-overlay" :class="lightboxOpen ? 'active' : ''" @click.self="lightboxOpen = false">
      <div class="lightbox-content-box" v-if="images[activeIndex]">
        <button class="lightbox-close" @click="lightboxOpen = false" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev" @click="prevImage()" aria-label="Previous Image">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <img class="lightbox-img" :src="images[activeIndex].src" :alt="images[activeIndex].cap" />
        <div class="lightbox-caption" x-text="images[activeIndex].cap"></div>
        <button class="lightbox-btn lightbox-next" @click="nextImage()" aria-label="Next Image">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Booking Confirmation Success Modal -->
    <div class="success-overlay" :class="showSuccessModal ? 'active' : ''" @click.self="closeModal()">
      <div class="success-card">
        <div class="success-icon-box">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3>Proposal Registered!</h3>
        <p x-text="successMsg"></p>
        <button class="btn btn-primary" @click="closeModal()" style="padding: 12px 30px;">
          Return to Tour Details
        </button>
      </div>
    </div>

  </div>
"""

    full_page = f"""<!DOCTYPE html>
<html lang="en">
{head}
<body>
{h}
{body_content}
{f_html}
</body>
</html>"""

    return full_page

# Generate tours/16-day-casablanca.html (rel_prefix is '../')
page_1 = generate_page('../')
with open('tours/16-day-casablanca.html', 'w', encoding='utf-8') as f:
    f.write(page_1)
print("Generated tours/16-day-casablanca.html")

# Generate tours/16-day-casablanca/index.html (rel_prefix is '../../')
page_2 = generate_page('../../')
with open('tours/16-day-casablanca/index.html', 'w', encoding='utf-8') as f:
    f.write(page_2)
print("Generated tours/16-day-casablanca/index.html")
