import re
import os

root_pages = [
    "index.html",
    "about.html",
    "activities.html",
    "day-trips.html",
    "desert-tours.html",
    "imperial-cities.html",
]

for p in root_pages:
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    m = re.search(r'<a href="([^"]*)"[^>]*id="nav-cta"[^>]*>(.*?)</a>', text)
    if m:
        print(f"{p}: nav-cta href='{m.group(1)}' text='{m.group(2).strip()}'")
    else:
        print(f"{p}: NO nav-cta found")
