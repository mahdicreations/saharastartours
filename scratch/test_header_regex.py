import glob
import os
import re

ROOT_DIR = r"c:\Users\el mahdi\Desktop\mahdicreations\saharastartours"
TOURS_DIR = os.path.join(ROOT_DIR, "tours")

root_pages = [
    os.path.join(ROOT_DIR, "index.html"),
    os.path.join(ROOT_DIR, "about.html"),
    os.path.join(ROOT_DIR, "activities.html"),
    os.path.join(ROOT_DIR, "day-trips.html"),
    os.path.join(ROOT_DIR, "desert-tours.html"),
    os.path.join(ROOT_DIR, "imperial-cities.html"),
]

tour_files = sorted(glob.glob(os.path.join(TOURS_DIR, "*.html")))
sub_16 = os.path.join(TOURS_DIR, "16-day-casablanca", "index.html")
if os.path.exists(sub_16):
    tour_files.append(sub_16)

all_files = root_pages + tour_files
header_pattern = re.compile(r'(<header id="main-header"[^>]*>)([\s\S]*?)(<div class="navbar">)', re.DOTALL)

matches = []
fails = []

for f in all_files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if header_pattern.search(c):
        matches.append(os.path.basename(f))
    else:
        fails.append(os.path.basename(f))

print(f"Matches ({len(matches)}/{len(all_files)}):", matches[:5], "...")
print(f"Fails ({len(fails)}):", fails)
