import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    has_map_css = '.route-map-card' in html
    has_milestones_css = '.map-milestones' in html
    print(f"{fname:55} | map_css: {str(has_map_css):5} | milestones_css: {str(has_milestones_css):5}")
