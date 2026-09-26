import os
import re

base_dir = "sahara-star-tours"

def parse_tour_txt(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    data = {
        'title': '',
        'duration': '',
        'about': '',
        'images': []
    }

    title_match = re.search(r'Title:\s*(.+)', content)
    if title_match: data['title'] = title_match.group(1).strip()

    dur_match = re.search(r'Duration:\s*(.+)', content)
    if dur_match: data['duration'] = dur_match.group(1).strip()

    about_match = re.search(r'About this tour:([\s\S]*?)(Highlights:|Included:|Excluded:|Itinerary:|Images:)', content)
    if about_match: 
        data['about'] = about_match.group(1).replace('**', '').replace('\n', ' ').strip()
        
    img_match = re.search(r'Images:([\s\S]*?)(Itinerary:|$)', content)
    if img_match:
        data['images'] = [line.strip('- ').strip() for line in img_match.group(1).split('\n') if line.strip()]

    return data

# Extract head, header, footer from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

head_match = re.search(r'(<head>.*?</head>)', index_html, re.DOTALL)
header_match = re.search(r'(<header id="main-header".*?</header>)', index_html, re.DOTALL)
footer_match = re.search(r'(<footer>.*?</footer>)', index_html, re.DOTALL)

head_base = head_match.group(1)
header_base = header_match.group(1)
footer_base = footer_match.group(1)

# Now wait, we need to modify the menu links to point to category pages.
# Let's replace the toggleDropdown behavior in the header_base for desktop, but keep it for mobile if possible.
# Actually, since the user said "zidhom lien f menu" (add their links in the menu), 
# I will change:
# <a href="#" @click.prevent="toggleDropdown('desert')">Desert Tours ...</a>
# to:
# <a href="desert-tours.html">Desert Tours ...</a>
header_base = header_base.replace('href="#" @click.prevent="toggleDropdown(\'desert\')"', 'href="desert-tours.html"')
header_base = header_base.replace('href="#" @click.prevent="toggleDropdown(\'imperial\')"', 'href="imperial-cities.html"')
header_base = header_base.replace('href="#" @click.prevent="toggleDropdown(\'daytrips\')"', 'href="day-trips.html"')
header_base = header_base.replace('href="#" @click.prevent="toggleDropdown(\'activities\')"', 'href="activities.html"')

categories_meta = {
    "desert-tours": {
        "title": "Sahara Desert Tours",
        "subtitle": "Immersive Expeditions to Merzouga & Zagora",
        "bg": "assets/hero_sahara_sunset.png",
        "desc": "Discover the magic of the Moroccan Sahara. Ride camels over golden dunes, sleep under the stars in luxury desert camps, and traverse ancient kasbahs and breathtaking gorges."
    },
    "imperial-cities": {
        "title": "Imperial Cities",
        "subtitle": "Discover the Heritage of Morocco",
        "bg": "assets/tour_16day_casablanca.png",
        "desc": "Journey through time as you explore the ancient medinas, stunning palaces, and vibrant souks of Marrakech, Fes, Rabat, and Meknes."
    },
    "day-trips": {
        "title": "Day Trips from Marrakech",
        "subtitle": "Short Escapes to Waterfalls, Coasts & Valleys",
        "bg": "sahara-star-tours/day-trips/one-day-trip-from-marrakech-to-essaouira-mogador/images/thumbnail.jpg",
        "desc": "Escape the bustling city for a day. Explore the coastal charm of Essaouira, the majestic Ouzoud Waterfalls, or the traditional Berber villages of the High Atlas Mountains."
    },
    "activities": {
        "title": "Thrilling Activities",
        "subtitle": "Adventure Awaits in Marrakech",
        "bg": "sahara-star-tours/activities/hot-air-balloon-in-marrakech/images/thumbnail.jpg",
        "desc": "Inject excitement into your Moroccan holiday with quad biking, camel rides, hot air balloon flights, and cultural dinners."
    }
}

for cat, meta in categories_meta.items():
    cat_path = os.path.join(base_dir, cat)
    if not os.path.exists(cat_path):
        continue
    
    tour_slugs = [d for d in os.listdir(cat_path) if os.path.isdir(os.path.join(cat_path, d))]
    
    cards_html = ""
    for slug in tour_slugs:
        tour_txt_path = os.path.join(cat_path, slug, 'tour.txt')
        if not os.path.exists(tour_txt_path): continue
        
        data = parse_tour_txt(tour_txt_path)
        img_src = f"sahara-star-tours/{cat}/{slug}/images/{data['images'][0]}" if data['images'] else "assets/hero_sahara_sunset.png"
        
        desc_snippet = (data['about'][:120] + '...') if len(data['about']) > 120 else data['about']
        
        cards_html += f'''
        <a href="tours/{slug}.html" class="tour-card reveal active">
          <div class="tour-img-wrapper">
            <div class="tour-badge">{data['duration']}</div>
            <img src="{img_src}" alt="{data['title']}" loading="lazy" onerror="this.src='assets/hero_sahara_sunset.png'" />
          </div>
          <div class="tour-info">
            <div class="tour-meta">
              <div><i class="fa-regular fa-clock"></i> {data['duration']}</div>
            </div>
            <h3 class="tour-title">{data['title']}</h3>
            <p class="tour-desc">{desc_snippet}</p>
            <div class="tour-footer">
              <span class="btn btn-secondary btn-sm" style="width:100%">Explore Tour <i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
        </a>'''

    page_head = head_base.replace('<title>Sahara Star Tours | Bespoke Sahara Desert &amp; Morocco Travel Agency</title>', f'<title>{meta["title"]} | Sahara Star Tours</title>')
    page_head = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{meta["desc"]}" />', page_head)

    body_content = f"""
    <!-- CATEGORY HERO SECTION -->
    <section class="hero" style="height: 60vh; min-height: 400px; padding-top: 80px;">
      <div class="hero-background">
        <img src="{meta['bg']}" alt="{meta['title']}" onerror="this.src='assets/hero_sahara_sunset.png'" style="animation:none; filter:brightness(0.3) contrast(1.1);"/>
      </div>
      <div class="hero-gradient"></div>

      <div class="hero-content" style="margin-top: 0;">
        <span class="subtitle">{meta['subtitle']}</span>
        <h1 style="font-size: 3.5rem;">{meta['title']}</h1>
        <p style="max-width: 750px;">{meta['desc']}</p>
      </div>
    </section>

    <!-- CATEGORY TOURS GRID -->
    <section class="tours-section" style="padding-top: 60px;">
      <div class="category-showcase-container">
        <div class="category-tour-grid">
          {cards_html}
        </div>
      </div>
    </section>
"""

    full_html = f"""<!DOCTYPE html>
<html lang="en">
{page_head}
<body>
{header_base}
{body_content}
{footer_base}
</body>
</html>"""

    out_file = f"{cat}.html"
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"Generated {out_file}")

# Update index.html and about.html headers to also use these new links
def update_headers(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('href="#" @click.prevent="toggleDropdown(\'desert\')"', 'href="desert-tours.html"')
    content = content.replace('href="#" @click.prevent="toggleDropdown(\'imperial\')"', 'href="imperial-cities.html"')
    content = content.replace('href="#" @click.prevent="toggleDropdown(\'daytrips\')"', 'href="day-trips.html"')
    content = content.replace('href="#" @click.prevent="toggleDropdown(\'activities\')"', 'href="activities.html"')
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

update_headers('index.html')
update_headers('about.html')
update_headers('tours/16-day-casablanca.html')
print("Updated main menu links.")
