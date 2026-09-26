import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    has_target = "<!-- Right Column: Sidebar Booking Form -->" in html
    print(f"{fname:55} | right col comment: {has_target}")
