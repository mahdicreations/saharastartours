import glob
import os
import re

files = [
    'index.html',
    'about.html',
    'activities.html',
    'day-trips.html',
    'desert-tours.html',
    'imperial-cities.html'
] + glob.glob('tours/*.html') + ['tours/16-day-casablanca/index.html']

pattern = re.compile(r'<a href="[^"]*" class="btn btn-primary[^"]*" id="nav-cta"[^>]*>Plan a Trip</a>')
failed = []

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        # In index.html we already updated it, but let's check others
        if f != 'index.html' and not pattern.search(c):
            failed.append(os.path.basename(f))

print(f"Failed to match nav-cta pattern in: {failed}")
