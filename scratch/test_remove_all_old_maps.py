import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
pattern = re.compile(r'\s*(?:<!-- Interactive Route Map Card -->|<!-- Route Map Card -->)?\s*<div class="route-map-card reveal active">.*?</div>\s*</div>\s*</div>\s*(?=\s*<!-- Media Gallery -->|<div class="gallery-card)', re.DOTALL)

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    m = pattern.search(html)
    print(f"{fname:55} | match old map card: {bool(m)}")
