import os, sys, glob, re, json

sys.path.append(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\scratch')
import enhanced_tour_configs

LEAFLET_CSS_TAG = '  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />\n'

MAP_COMPONENT_CSS = """
/* INTERACTIVE LEAFLET TOUR MAP COMPONENT */
.tour-map-card {
  background: var(--night-surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
}

.tour-map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 18px;
}

.tour-map-header h3 {
  font-size: 1.6rem;
  color: var(--sand-gold);
  margin: 0;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.tour-map-header-badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tour-map-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 500;
  background: rgba(232, 195, 158, 0.08);
  border: 1px solid rgba(232, 195, 158, 0.2);
  color: var(--sand-gold);
}

.tour-map-badge strong {
  color: var(--text-main);
  font-weight: 600;
}

.tour-map-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 22px;
  line-height: 1.6;
}

.tour-map-wrapper {
  position: relative;
  width: 100%;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.35);
  background: #f4f1ea;
  transition: background 0.3s ease;
}

#tour-route-map {
  width: 100%;
  height: 480px;
  background: #f4f1ea;
  z-index: 10;
  transition: background 0.3s ease;
}

/* Official OpenStreetMap Tiles - Light / Natural / Clear Map (Default) */
.clear-osm-tiles {
  filter: brightness(98%) contrast(98%) saturate(95%);
  transition: filter 0.3s ease;
}

/* Optional Dark Luxury Map Mode */
.dark-osm-tiles {
  filter: invert(90%) hue-rotate(185deg) brightness(120%) contrast(88%) saturate(115%);
  transition: filter 0.3s ease;
}

/* Custom Numbered Marker Styling */
.luxury-marker-container {
  background: transparent !important;
  border: none !important;
}

.luxury-marker-pin {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, hsl(20, 10%, 14%) 0%, hsl(20, 12%, 8%) 100%);
  border: 2px solid var(--sand-gold);
  color: var(--sand-gold);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.8), 0 0 10px rgba(232, 195, 158, 0.3);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
  z-index: 2;
  user-select: none;
}

.luxury-marker-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 1.5px solid var(--sand-gold);
  opacity: 0;
  animation: luxuryMarkerPulse 2.8s infinite cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none;
  z-index: 1;
}

@keyframes luxuryMarkerPulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
  50% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
}

.luxury-marker-pin:hover,
.luxury-marker-container.active-marker .luxury-marker-pin {
  transform: scale(1.22);
  border-color: #ffffff;
  color: #ffffff;
  background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 75%, 45%) 100%);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.9), 0 0 16px var(--terracotta-glow);
}

.luxury-marker-container.is-start .luxury-marker-pin {
  border-color: var(--terracotta);
  color: #ffffff;
  background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 80%, 40%) 100%);
}

.luxury-marker-container.is-desert .luxury-marker-pin {
  border-color: #ffae19;
  color: #110e0d;
  background: linear-gradient(135deg, #ffd166 0%, #ffae19 100%);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.9), 0 0 14px rgba(255, 174, 25, 0.6);
}

.luxury-marker-container.is-end .luxury-marker-pin {
  border-color: var(--sand-gold);
  color: #ffffff;
  background: linear-gradient(135deg, hsl(38, 65%, 45%) 0%, hsl(38, 80%, 30%) 100%);
}

/* Luxury Leaflet Popup */
.leaflet-popup-content-wrapper {
  background: rgba(22, 18, 16, 0.96) !important;
  color: var(--text-main) !important;
  border: 1px solid var(--glass-border) !important;
  border-radius: var(--radius-md) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(232, 195, 158, 0.15) !important;
  backdrop-filter: blur(16px) !important;
  padding: 6px !important;
}

.leaflet-popup-tip {
  background: rgba(22, 18, 16, 0.96) !important;
  border: 1px solid var(--glass-border) !important;
}

.leaflet-popup-content {
  margin: 12px 14px !important;
  line-height: 1.5 !important;
}

.popup-tag {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--sand-gold);
  font-weight: 700;
  display: inline-block;
  margin-bottom: 4px;
}

.popup-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--text-main);
  margin-bottom: 4px;
  font-weight: 600;
}

.popup-subtitle {
  font-size: 0.8rem;
  color: var(--terracotta);
  font-weight: 500;
  margin-bottom: 8px;
}

.popup-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.map-waypoints-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 0.85rem;
  color: var(--sand-gold);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.map-waypoints-header span:last-child {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: none;
  letter-spacing: 0;
}

.map-stops-nav {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  max-width: 100%;
  padding: 12px 2px 4px;
  scrollbar-width: thin;
  scrollbar-color: var(--glass-border) transparent;
  -webkit-overflow-scrolling: touch;
}

.map-stops-nav::-webkit-scrollbar {
  height: 4px;
}

.map-stops-nav::-webkit-scrollbar-thumb {
  background: var(--glass-border);
  border-radius: 4px;
}

.map-stop-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  padding: 7px 14px;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-muted);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.map-stop-btn:hover {
  background: rgba(232, 195, 158, 0.08);
  border-color: var(--sand-gold);
  color: var(--text-main);
  transform: translateY(-1px);
}

.map-stop-btn.active {
  background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 75%, 45%) 100%);
  color: #ffffff;
  border-color: var(--terracotta);
  box-shadow: 0 4px 14px var(--terracotta-glow);
}

.map-stop-badge {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
}

.map-stop-btn.active .map-stop-badge {
  background: #ffffff;
  color: var(--terracotta);
}

.map-reset-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 100;
  background: rgba(20, 16, 14, 0.88);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  padding: 6px 14px;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--sand-gold);
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: var(--transition-smooth);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
}

.map-reset-btn:hover {
  background: var(--sand-gold);
  color: var(--night-bg);
  border-color: var(--sand-gold);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px var(--sand-gold-glow);
}
"""

def process_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    # 1. Remove old static route map card if present
    old_map_pattern = re.compile(r'\s*(?:<!-- Interactive Route Map Card -->|<!-- Route Map Card -->)?\s*<div class="route-map-card reveal active">.*?</div>\s*</div>\s*</div>\s*(?=\s*<!-- Media Gallery -->|<div class="gallery-card)', re.DOTALL)
    html = old_map_pattern.sub('\n\n        ', html)

    # 2. Add Leaflet CSS
    if "leaflet@1.9.4/dist/leaflet.css" not in html:
        html = html.replace("</head>", LEAFLET_CSS_TAG + "</head>")

    # 3. Add MAP_COMPONENT_CSS
    if "/* INTERACTIVE LEAFLET TOUR MAP COMPONENT */" not in html:
        html = html.replace("</style>", MAP_COMPONENT_CSS.strip() + "\n  </style>")

    # 4. Proportions Layout: minmax(0, 1fr) 370px, sidebar 370px top 90px, padding 24px 20px
    # Replace grid-template-columns in .tour-container
    html = re.sub(r'(\.tour-container\s*\{[^}]*grid-template-columns:)\s*1\.2fr\s*0\.8fr;', r'\g<1> minmax(0, 1fr) 370px;', html)
    # Ensure .tour-main has min-width: 0; max-width: 100%;
    html = re.sub(r'(\.tour-main\s*\{\s*display:\s*flex;\s*flex-direction:\s*column;\s*gap:\s*40px;)(?!\s*min-width)', r'\g<1>\n  min-width: 0;\n  max-width: 100%;', html)
    # Update .tour-sidebar
    html = re.sub(r'(\.tour-sidebar\s*\{\s*position:\s*sticky;\s*)top:\s*100px;', r'\g<1>top: 90px;\n  min-width: 0;\n  max-width: 370px;', html)
    # Update .booking-sidebar-card padding
    html = re.sub(r'(\.booking-sidebar-card\s*\{[^}]*padding:)\s*30px;', r'\g<1> 24px 20px;', html)
    # Update @media (max-width: 1024px) for .tour-sidebar
    html = re.sub(r'(@media\s*\(max-width:\s*1024px\)\s*\{[^}]*\.tour-sidebar\s*\{[^}]*position:\s*static;)(?!\s*max-width)', r'\g<1>\n    max-width: 100%;', html)

    # 5. Insert Interactive Leaflet Map after "Inclusions & Trip Details"
    map_title, distance, duration, journey_summary, dests, route = enhanced_tour_configs.get_tour_config(fpath, html)

    map_html = f"""
        <!-- Interactive Tour Route Map Section -->
        <div class="timeline-card tour-map-card reveal active" id="tour-route-map-card">
          <div class="tour-map-header">
            <div>
              <span class="timeline-day-tag"><i class="fa-solid fa-map-location-dot" style="margin-right:6px;"></i> Interactive Route Map</span>
              <h3>{map_title}</h3>
            </div>
            <div class="tour-map-header-badges">
              <span class="tour-map-badge"><i class="fa-solid fa-road" style="color:var(--terracotta);"></i> Total Distance: <strong id="route-distance-val">{distance}</strong></span>
              <span class="tour-map-badge"><i class="fa-regular fa-clock" style="color:var(--sand-gold);"></i> <strong>{duration}</strong></span>
              <span class="tour-map-badge"><i class="fa-solid fa-compass" style="color:var(--sand-gold);"></i> <strong>{journey_summary}</strong></span>
              <button class="tour-map-badge map-theme-toggle-btn" id="map-theme-toggle-btn" type="button" aria-label="Toggle map brightness theme" style="cursor: pointer; background: rgba(232, 195, 158, 0.12); border-color: rgba(232, 195, 158, 0.35); font-family: inherit;"><i class="fa-solid fa-circle-half-stroke" style="color:var(--sand-gold);"></i> <strong id="map-theme-toggle-text">Mode Clair</strong></button>
            </div>
          </div>

          <p class="tour-map-desc">Day-by-day expedition route map for {map_title}. Click any numbered stop marker or destination button below to inspect details.</p>

          <div class="tour-map-wrapper">
            <div id="tour-route-map"></div>
            <button class="map-reset-btn" id="map-reset-btn" type="button" aria-label="Fit complete tour route">
              <i class="fa-solid fa-expand"></i> Fit Entire Route
            </button>
          </div>

          <div class="map-waypoints-header">
            <span><i class="fa-solid fa-location-crosshairs"></i> Tour Stops &amp; Highlights</span>
            <span>Select a destination to explore</span>
          </div>

          <div class="map-stops-nav" id="map-stops-nav" aria-label="Tour waypoints"></div>
        </div>
"""
    if "tour-route-map-card" not in html:
        target_str = "</div>\n\n      <!-- Right Column: Sidebar Booking Form -->"
        if target_str in html:
            html = html.replace(target_str, map_html + "\n      " + target_str, 1)
        elif '<div class="tour-sidebar">' in html:
            html = html.replace('<div class="tour-sidebar">', map_html + '\n      </div>\n\n      <div class="tour-sidebar">', 1)

    # 6. JavaScript for Leaflet Map
    dests_json = json.dumps(dests, indent=6)
    route_json = json.dumps(route)

    map_script = f"""
<!-- Leaflet Interactive Map Script -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  (function() {{
    const TOUR_DESTINATIONS = {dests_json};
    const ROUTE_COORDINATES = {route_json};

    function initTourMap() {{
      const mapContainer = document.getElementById('tour-route-map');
      if (!mapContainer || typeof L === 'undefined') return;

      const map = L.map('tour-route-map', {{
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true
      }});

      // Official OpenStreetMap (OSM France) tile layer (100% Free, NO API Key, NO 403 Blocks)
      const tileLayer = L.tileLayer('https://{{s}}.tile.openstreetmap.fr/osmfr/{{z}}/{{x}}/{{y}}.png', {{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, &copy; OpenStreetMap France',
        className: 'osm-tile-layer clear-osm-tiles',
        maxZoom: 18,
        subdomains: 'abc'
      }}).addTo(map);

      const currentGlow = L.polyline(ROUTE_COORDINATES, {{
        color: '#d96b43',
        weight: 8,
        opacity: 0.45,
        lineCap: 'round',
        lineJoin: 'round'
      }}).addTo(map);

      const currentLine = L.polyline(ROUTE_COORDINATES, {{
        color: '#c84e24',
        weight: 4.5,
        opacity: 1.0,
        lineCap: 'round',
        lineJoin: 'round'
      }}).addTo(map);

      // Map Theme Toggle
      const mapThemeBtn = document.getElementById('map-theme-toggle-btn');
      let isClearMap = true;
      if (mapThemeBtn) {{
        mapThemeBtn.addEventListener('click', () => {{
          isClearMap = !isClearMap;
          const tileElements = document.querySelectorAll('.osm-tile-layer');
          const toggleText = document.getElementById('map-theme-toggle-text');
          const mapContainer = document.getElementById('tour-route-map');
          const mapWrapper = document.querySelector('.tour-map-wrapper');

          if (isClearMap) {{
            tileElements.forEach(el => {{
              el.classList.remove('dark-osm-tiles');
              el.classList.add('clear-osm-tiles');
            }});
            if (mapContainer) mapContainer.style.background = '#f4f1ea';
            if (mapWrapper) mapWrapper.style.background = '#f4f1ea';
            currentGlow.setStyle({{ color: '#d96b43', opacity: 0.45, weight: 8 }});
            currentLine.setStyle({{ color: '#c84e24', opacity: 1.0, weight: 4.5 }});
            if (toggleText) toggleText.textContent = 'Mode Clair';
          }} else {{
            tileElements.forEach(el => {{
              el.classList.remove('clear-osm-tiles');
              el.classList.add('dark-osm-tiles');
            }});
            if (mapContainer) mapContainer.style.background = '#141110';
            if (mapWrapper) mapWrapper.style.background = '#141110';
            currentGlow.setStyle({{ color: '#d96b43', opacity: 0.4, weight: 7 }});
            currentLine.setStyle({{ color: '#e8c39e', opacity: 0.95, weight: 3.5 }});
            if (toggleText) toggleText.textContent = 'Mode Sombre';
          }}
        }});
      }}

      const routeBounds = L.latLngBounds(ROUTE_COORDINATES);
      map.fitBounds(routeBounds, {{ padding: [35, 35] }});

      setTimeout(() => {{ map.invalidateSize(); }}, 250);
      setTimeout(() => {{ map.invalidateSize(); }}, 750);
      window.addEventListener('resize', () => {{ map.invalidateSize(); }});

      const markers = [];
      const stopsNav = document.getElementById('map-stops-nav');

      TOUR_DESTINATIONS.forEach((dest, idx) => {{
        const isStart = idx === 0;
        const isDesert = dest.name.includes('Merzouga') || dest.name.includes('Sahara');
        const isEnd = idx === TOUR_DESTINATIONS.length - 1;
        const extraClass = isStart ? 'is-start' : (isDesert ? 'is-desert' : (isEnd ? 'is-end' : ''));

        const customIcon = L.divIcon({{
          className: `luxury-marker-container ${{extraClass}}`,
          html: `
            <div class="luxury-marker-pin">${{dest.number}}</div>
            <div class="luxury-marker-pulse"></div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -18]
        }});

        const marker = L.marker(dest.coords, {{
          icon: customIcon,
          title: `${{dest.number}}. ${{dest.name}} (${{dest.day}})`
        }}).addTo(map);

        const popupHtml = `
          <div class="luxury-popup-content">
            <span class="popup-tag">${{dest.day}}</span>
            <h4 class="popup-title">${{dest.name}}</h4>
            <div class="popup-subtitle"><i class="fa-solid fa-location-dot"></i> ${{dest.subtitle}}</div>
            <p class="popup-desc">${{dest.desc}}</p>
          </div>
        `;
        marker.bindPopup(popupHtml, {{ maxWidth: 300 }});
        markers.push({{ marker, dest, idx }});

        if (stopsNav) {{
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'map-stop-btn';
          btn.innerHTML = `<span class="map-stop-badge">${{dest.number}}</span> <span>${{dest.name}}</span>`;
          btn.addEventListener('click', () => {{
            focusDestination(idx);
          }});
          stopsNav.appendChild(btn);
        }}
      }});

      function focusDestination(index) {{
        const item = markers[index];
        if (!item) return;
        map.flyTo(item.dest.coords, 10, {{ duration: 1 }});
        setTimeout(() => {{
          item.marker.openPopup();
        }}, 600);

        if (stopsNav) {{
          const buttons = stopsNav.querySelectorAll('.map-stop-btn');
          buttons.forEach((b, i) => {{
            b.classList.toggle('active', i === index);
          }});
          if (buttons[index]) {{
            buttons[index].scrollIntoView({{ behavior: 'smooth', inline: 'center', block: 'nearest' }});
          }}
        }}
      }}

      const resetBtn = document.getElementById('map-reset-btn');
      if (resetBtn) {{
        resetBtn.addEventListener('click', () => {{
          map.fitBounds(routeBounds, {{ padding: [35, 35] }});
          if (stopsNav) {{
            stopsNav.querySelectorAll('.map-stop-btn').forEach(b => b.classList.remove('active'));
          }}
        }});
      }}
    }}

    if (document.readyState === 'loading') {{
      document.addEventListener('DOMContentLoaded', initTourMap);
    }} else {{
      initTourMap();
    }}
  }})();
</script>
"""
    if "initTourMap" not in html:
        html = html.replace('</body>', map_script + '\n</body>')

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[OK] {fname}")

def main():
    tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
    print(f"Applying Leaflet Map & 370px Layout to {len(tour_files)} tour pages...\n")
    for f in tour_files:
        process_file(f)
    print(f"\nAll {len(tour_files)} tour pages successfully updated!")

if __name__ == "__main__":
    main()
