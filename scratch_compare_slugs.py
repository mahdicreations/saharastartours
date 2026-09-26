import os
import re

astro_header = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\src\components\Header.astro'
with open(astro_header, 'r', encoding='utf-8') as f:
    header_content = f.read()

astro_tours = set(re.findall(r'/tours/([a-zA-Z0-9_-]+)', header_content))

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(root, 'tours')
orig_tours = set()
for f in os.listdir(tours_dir):
    if f.endswith('.html'):
        orig_tours.add(f[:-5])

print(f"Total tours in Header.astro: {len(astro_tours)}")
print(f"Total tour HTML files in tours/: {len(orig_tours)}")

print("\n--- Mapping between original HTML and Header.astro slugs ---")
for orig in sorted(orig_tours):
    # Check if exact match exists in astro
    if orig in astro_tours:
        print(f"MATCH:      {orig} -> /tours/{orig}")
    else:
        # Find close match
        close = [a for a in astro_tours if a in orig or orig in a or a[:8] == orig[:8]]
        print(f"DIFF:       {orig} -> {close}")

print("\n--- In Header.astro but NOT exact filename in tours/ ---")
for a in sorted(astro_tours):
    if a not in orig_tours:
        close = [o for o in orig_tours if o in a or a in o or a[:8] == o[:8]]
        print(f"Astro slug: {a} -> orig: {close}")
