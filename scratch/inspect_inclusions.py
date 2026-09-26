import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files[:5]:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    idx = html.find('inclusions-card')
    if idx != -1:
        # Find where the inclusions card ends
        print(f"=== {fname} ===")
        # Print next 800 chars after inclusions-card
        sub = html[idx:idx+800]
        # Find the closing of this card
        print(sub[:300] + "\n...\n")
