import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    has_mg = '<!-- Media Gallery -->' in html
    has_gc = 'class="gallery-card' in html
    has_map = '<div class="route-map-card' in html
    print(f"{fname:55} | mg: {str(has_mg):5} | gc: {str(has_gc):5} | map: {str(has_map):5}")
