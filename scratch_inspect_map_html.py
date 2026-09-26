with open(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\dist\tours\13-days-casablanca-tour\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("Does leaflet.css exist in html?", 'leaflet.css' in html)
print("Does leaflet.js exist in html?", 'leaflet.js' in html)
print("Does map element exist in html?", 'tour-route-map' in html)
print("Does OSM tile exist in script?", 'openstreetmap' in html)

import re
scripts = re.findall(r'<script.*?</script>', html, re.DOTALL)
print(f"Total scripts: {len(scripts)}")
for s in scripts:
    if 'L.map' in s:
        print("Found L.map script snippet:\n", s[:500])
