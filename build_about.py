import re

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract parts
head_match = re.search(r'(<head>.*?</style>\s*</head>)', html, re.DOTALL)
header_match = re.search(r'(<header id="main-header".*?</header>)', html, re.DOTALL)
footer_match = re.search(r'(<footer>.*?</footer>)', html, re.DOTALL)

head = head_match.group(1)
header = header_match.group(1)
footer = footer_match.group(1)

# Modify head to include About CSS
about_css = """
/* --- STANDALONE ABOUT US PAGE SYSTEM --- */
.about-hero-section { height: 55vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; padding: 0 5%; text-align: center; }
.about-hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.about-hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.35) contrast(1.05); }
.about-hero-content { position: relative; z-index: 3; max-width: 800px; margin-top: 50px; }
.about-hero-content h1 { font-size: 4rem; line-height: 1.1; background: linear-gradient(135deg, var(--text-main) 30%, var(--sand-gold) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px; }
.about-story-section { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.about-story-text h3 { font-size: 2.2rem; color: var(--sand-gold); margin-bottom: 20px; font-family: var(--font-serif); }
.about-story-text p { font-size: 1.08rem; line-height: 1.7; margin-bottom: 20px; }
.about-story-img { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--glass-border); box-shadow: var(--shadow-premium); position: relative; }
.about-story-img img { width: 100%; height: auto; transition: var(--transition-smooth); }
.about-story-img:hover img { transform: scale(1.03); }
.pillars-section { background: linear-gradient(180deg, var(--night-bg) 0%, var(--night-surface) 50%, var(--night-bg) 100%); }
.pillars-grid { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.pillar-card { background: var(--night-card); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 30px 24px; text-align: center; transition: var(--transition-smooth); }
.pillar-card-icon { width: 60px; height: 60px; border-radius: 50%; background: rgba(217, 107, 67, 0.06); border: 1px solid rgba(217, 107, 67, 0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--terracotta); font-size: 1.5rem; box-shadow: 0 0 15px rgba(217, 107, 67, 0.1); transition: var(--transition-smooth); }
.pillar-card:hover { transform: translateY(-8px); border-color: rgba(232, 195, 158, 0.25); box-shadow: var(--shadow-premium); }
.pillar-card:hover .pillar-card-icon { background: var(--terracotta); color: var(--text-main); border-color: var(--terracotta); box-shadow: 0 0 20px var(--terracotta-glow); }
.pillar-card h4 { font-size: 1.25rem; color: var(--sand-gold); margin-bottom: 12px; }
.pillar-card p { font-size: 0.9rem; margin-bottom: 0; }
.fleet-grid { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.fleet-card { background: var(--night-surface); border: 1px solid var(--glass-border); border-radius: var(--radius-md); overflow: hidden; transition: var(--transition-smooth); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); }
.fleet-img-wrapper { height: 220px; position: relative; overflow: hidden; border-bottom: 1px solid var(--glass-border); }
.fleet-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.fleet-card:hover .fleet-img-wrapper img { transform: scale(1.06); }
.fleet-info { padding: 24px; }
.fleet-info h4 { font-size: 1.3rem; color: var(--sand-gold); margin-bottom: 8px; }
.fleet-tag { display: inline-block; background: rgba(217, 107, 67, 0.08); border: 1px solid var(--terracotta); color: var(--terracotta); padding: 4px 10px; border-radius: 30px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 15px; }
.fleet-info p { font-size: 0.9rem; margin-bottom: 0; }
.fleet-card:hover { border-color: rgba(232, 195, 158, 0.2); transform: translateY(-5px); box-shadow: var(--shadow-premium); }
@media (max-width: 1024px) {
  .about-story-section { grid-template-columns: 1fr; gap: 30px; }
  .pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .fleet-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .about-hero-content h1 { font-size: 2.8rem; }
  .pillars-grid { grid-template-columns: 1fr; }
  .fleet-grid { grid-template-columns: 1fr; }
}
"""
head = head.replace("</style>", about_css + "\n  </style>")
head = head.replace("<title>Sahara Star Tours | Bespoke Sahara Desert & Morocco Travel Agency</title>", "<title>About Sahara Star Tours | Premium Bespoke Morocco Travel Agency</title>")

# Modify header links for about.html
header = header.replace('href="#hero"', 'href="index.html#hero"')
header = header.replace('href="#tours"', 'href="index.html#tours"')
header = header.replace('href="#seo-details"', 'href="about.html"')
header = header.replace('href="#contact"', 'href="index.html#contact"')
header = header.replace('href="#planner"', 'href="index.html#planner"')

# Modify footer links for about.html
footer = footer.replace('href="#hero"', 'href="index.html#hero"')
footer = footer.replace('href="#tours"', 'href="index.html#tours"')
footer = footer.replace('href="#seo-details"', 'href="about.html"')
footer = footer.replace('href="#contact"', 'href="index.html#contact"')
footer = footer.replace('href="#planner"', 'href="index.html#planner"')

about_body = """
<main>
    <!-- --- CINEMATIC ABOUT HERO --- -->
    <section class="about-hero-section">
      <div class="about-hero-bg">
        <img src="assets/hero_sahara_sunset.png" alt="Sahara Desert Sunset Luxury Glamping" />
      </div>
      <div class="hero-gradient" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(17,14,13,0.2) 0%, rgba(17,14,13,0.4) 60%, var(--night-bg) 100%); z-index: 2;"></div>

      <div class="about-hero-content">
        <span class="subtitle" style="color: var(--sand-gold); text-transform: uppercase; letter-spacing: 4px; font-weight: 600; font-size: 1.1rem; display: block; margin-bottom: 20px;">Our Story & Heritage</span>
        <h1>Crafting Bespoke Morocco Expeditions</h1>
        <p style="font-size: 1.2rem; color: var(--text-main);">Locally owned and operated by native guides, Sahara Star Tours transforms travel dreams into highly curated, comfortable Saharan adventures.</p>
      </div>
    </section>

    <!-- --- STORY SHOWCASE --- -->
    <section class="about-story-section reveal active" style="padding: 100px 5% 50px;">
      <div class="about-story-text">
        <span class="tag" style="color: var(--sand-gold); text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; font-weight: 600;">
          Marrakech Born
        </span>
        <h3 style="font-size: 2.2rem; color: var(--text-main); margin-bottom: 20px; font-family: var(--font-serif);">
          The Heart & Soul of Sahara Star Tours
        </h3>
        <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 1.08rem; line-height: 1.7;">Founded in Marrakech by native Saharan nomads and expert medina guides, Sahara Star Tours was built upon a simple philosophy: to make the deep magic, ancient histories, and wild terrains of Morocco accessible in absolute, luxurious comfort.</p>
        <p style="color: var(--text-muted); font-size: 1.08rem; line-height: 1.7;">We do not believe in mass-market tourism. To us, every circuit is an intimate, point-by-point story waiting to be told. Whether you are climbing the rocky pathways of the High Atlas, sharing mint tea inside a nomad's woolen tent, or winding through Fes' ancient spice souks, our team ensures your journey is safe, authentic, and utterly unforgettable.</p>
      </div>

      <div class="about-story-img">
        <img src="assets/atlas_mountains_valley.png" alt="Scenic Atlas Mountains Valley and Berber Houses" />
      </div>
    </section>

    <!-- --- FOUR CORE TRAVEL PILLARS --- -->
    <section class="pillars-section" style="padding: 100px 5% 80px;">
      <div class="section-header reveal active" style="text-align: center; max-width: 650px; margin: 0 auto 60px;">
        <span class="tag" style="color: var(--sand-gold); text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; font-weight: 600; display: inline-block; margin-bottom: 12px;">Our Philosophy</span>
        <h2 style="font-size: 2.8rem; margin-bottom: 16px; font-family: var(--font-serif); color: var(--text-main);">The Pillars of Our Bespoke Expeditions</h2>
        <p style="color: var(--text-muted);">Sahara Star Tours stands for visual excellence, deep local pride, and luxury comfort. We craft our signature packages around four core values.</p>
      </div>

      <div class="pillars-grid">
        <!-- Pillar 1 -->
        <div class="pillar-card reveal active">
          <div class="pillar-card-icon"><i class="fa-solid fa-compass"></i></div>
          <h4>Deep Authenticity</h4>
          <p style="color: var(--text-muted);">We leverage our local heritage to unlock secret medina gates, arrange private Riad cooking masterclasses, and guide you off ancient rally tracks to meet Saharan nomad families.</p>
        </div>

        <!-- Pillar 2 -->
        <div class="pillar-card reveal active">
          <div class="pillar-card-icon"><i class="fa-solid fa-award"></i></div>
          <h4>Absolute Comfort</h4>
          <p style="color: var(--text-muted);">From climate-controlled VIP Mercedes transporters to high-end desert glamping camps featuring warm private showers and plush zellige-floored suites in the middle of Erg Chebbi.</p>
        </div>

        <!-- Pillar 3 -->
        <div class="pillar-card reveal active">
          <div class="pillar-card-icon"><i class="fa-solid fa-sliders"></i></div>
          <h4>Bespoke Tailoring</h4>
          <p style="color: var(--text-muted);">Every single itinerary day is customizable point-by-point. We seamlessly accommodate dietary requests, Riad pool preferences, custom departure dates, and mobility needs.</p>
        </div>

        <!-- Pillar 4 -->
        <div class="pillar-card reveal active">
          <div class="pillar-card-icon"><i class="fa-solid fa-leaf"></i></div>
          <h4>Sustainable Footprint</h4>
          <p style="color: var(--text-muted);">We directly support Berber village hosts, cooperative argan-pressing women groups, and local guides, ensuring our travels respect fragile ecosystems and support remote economies.</p>
        </div>
      </div>
    </section>

    <!-- --- FLEET & CREW SHOWCASE --- -->
    <section class="fleet-section" style="padding: 100px 5% 80px;">
      <div class="section-header reveal active" style="text-align: center; max-width: 650px; margin: 0 auto 60px;">
        <span class="tag" style="color: var(--sand-gold); text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; font-weight: 600; display: inline-block; margin-bottom: 12px;">Bespoke Assets</span>
        <h2 style="font-size: 2.8rem; margin-bottom: 16px; font-family: var(--font-serif); color: var(--text-main);">Our Premium Fleet & Native Crew</h2>
        <p style="color: var(--text-muted);">Luxury travel requires the best equipment and the most knowledgeable guides. Discover the Sahara Star Tours standard.</p>
      </div>

      <div class="fleet-grid">
        <!-- Card 1 -->
        <div class="fleet-card reveal active">
          <div class="fleet-img-wrapper">
            <img src="assets/camel_trek_dunes.png" alt="Native Nomadic Guides leading camel safaris" />
          </div>
          <div class="fleet-info">
            <span class="fleet-tag">Our Guides</span>
            <h4>Expert Native Storytellers</h4>
            <p style="color: var(--text-muted);">Our professional, English-speaking guides are native Saharan nomads or certified medina historians. They bring ancient clay Kasbahs and colorful souk spice alleys to life with deep local secrets.</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="fleet-card reveal active">
          <div class="fleet-img-wrapper">
            <img src="assets/marrakech_riad_pool.png" alt="High-End VIP Mercedes Minivan transportation fleet" />
          </div>
          <div class="fleet-info">
            <span class="fleet-tag">VIP Fleet</span>
            <h4>Mercedes-Benz VIP Transport</h4>
            <p style="color: var(--text-muted);">Travel Morocco's scenic passes in absolute style. Our fleet of VIP Mercedes minivans and robust 4x4s feature soft leather seating, high-speed climate control, panoramic sunroofs, and cold refreshments.</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="fleet-card reveal active">
          <div class="fleet-img-wrapper">
            <img src="assets/hero_sahara_sunset.png" alt="Sahara Star Tours Luxury Desert Glamping Camp setup" />
          </div>
          <div class="fleet-info">
            <span class="fleet-tag">Bespoke Stays</span>
            <h4>Luxury Sahara Desert Glamping</h4>
            <p style="color: var(--text-muted);">Sleep under millions of bright stars in Erg Chebbi. Our luxury desert glamping setups feature king-sized bedding, en-suite private bathrooms, hot running showers, and authentic Berber zellige decor.</p>
          </div>
        </div>
      </div>
    </section>
</main>
"""

output_html = f"""<!DOCTYPE html>
<html lang="en">
{head}
<body>
{header}
{about_body}
{footer}
</body>
</html>
"""

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(output_html)

print("about.html generated successfully!")
