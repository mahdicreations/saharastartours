import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/index.html'))
print(f"Total tour files scanned: {len(tour_files)}\n")

has_leaflet_count = 0
has_route_map_count = 0
no_map_count = 0

for f in tour_files:
    fname = os.path.relpath(f, '.')
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    
    has_leaflet = 'leaflet' in c.lower()
    has_route_map = 'route-map' in c.lower() or 'id="route-map"' in c or 'class="route-map' in c
    has_google_map = 'maps.googleapis.com' in c.lower()
    has_map_container = 'id="map"' in c or 'class="map-container"' in c
    
    if has_leaflet:
        has_leaflet_count += 1
    if has_route_map:
        has_route_map_count += 1
    if not (has_leaflet or has_route_map or has_google_map or has_map_container):
        no_map_count += 1

    badges = []
    if has_leaflet: badges.append("Leaflet")
    if has_route_map: badges.append("RouteMapCard")
    if has_google_map: badges.append("GoogleMaps")
    if has_map_container: badges.append("MapContainer")
    
    status = " | ".join(badges) if badges else "MISSING MAP"
    print(f"[{status}] {fname}")

print("\n--- SUMMARY ---")
print(f"Files with Leaflet: {has_leaflet_count} / {len(tour_files)}")
print(f"Files with Route Map Card: {has_route_map_count} / {len(tour_files)}")
print(f"Files with NO MAP: {no_map_count} / {len(tour_files)}")
