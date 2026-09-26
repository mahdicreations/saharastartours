import glob, os, re

with open('tours/7-day-morocco-tour-from-casablanca.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Pattern for the old route map card
pattern = re.compile(r'\s*<!-- Interactive Route Map Card -->\s*<div class="route-map-card reveal active">.*?</div>\s*</div>\s*</div>\s*(?=\s*<!-- Media Gallery -->|<div class="gallery-card)', re.DOTALL)
m = pattern.search(html)
print("Found old static card with regex:", bool(m))
if m:
    print("Match length:", len(m.group(0)))
