import glob
import os

files = [
    'index.html',
    'about.html',
    'activities.html',
    'day-trips.html',
    'desert-tours.html',
    'imperial-cities.html'
] + glob.glob('tours/*.html') + ['tours/16-day-casablanca/index.html']

counts = {}
for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        counts[os.path.basename(f)] = c.count('<div class="navbar">')

print(f"Total files: {len(counts)}")
non_one = {k: v for k, v in counts.items() if v != 1}
print(f"Files where count != 1: {non_one}")
