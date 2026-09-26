import re
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

addition = """
@media (max-width: 768px) {
  header {
    background: rgba(14, 11, 10, 0.98) !important;
    backdrop-filter: blur(15px) !important;
  }
  .hero, .tour-hero-section, .category-hero {
    padding-top: 155px !important;
  }
}
"""

for f in files:
    if not os.path.exists(f):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if '</style>' in c and 'padding-top: 155px !important;' not in c:
        c = c.replace('</style>', addition.strip() + '\n</style>')
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)

print("Added mobile header background and padding across all files!")
