import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
print(f"Total tour files: {len(tour_files)}")

audit_passed = 0
for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()

    has_leaflet_css = 'leaflet@1.9.4/dist/leaflet.css' in c
    has_leaflet_js = 'leaflet@1.9.4/dist/leaflet.js' in c
    has_map_card = 'id="tour-route-map-card"' in c
    has_old_static_card = 'class="route-map-card' in c
    has_layout_370 = 'minmax(0, 1fr) 370px' in c
    has_sidebar_370 = 'max-width: 370px' in c
    has_travel_style = 'travel-style-group' in c
    has_mobile_bar = 'id="mobile-booking-bar"' in c
    has_justify = 'EDITORIAL TEXT JUSTIFY SYSTEM' in c
    has_watermark = 'assets/moroccan_pattern.png' in c

    all_ok = (has_leaflet_css and has_leaflet_js and has_map_card and not has_old_static_card and 
              has_layout_370 and has_sidebar_370 and has_travel_style and has_mobile_bar and 
              has_justify and has_watermark)
    
    if all_ok:
        audit_passed += 1
    else:
        print(f"[FAIL] {fname}: l_css={has_leaflet_css}, l_js={has_leaflet_js}, map={has_map_card}, old_map={has_old_static_card}, grid={has_layout_370}, sb={has_sidebar_370}, ts={has_travel_style}, mob={has_mobile_bar}, just={has_justify}, wm={has_watermark}")

print(f"\nAUDIT RESULT: {audit_passed} / {len(tour_files)} tour pages 100% PERFECT!")
