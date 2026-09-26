import glob, os, sys
sys.path.append(r'C:\Users\el mahdi\.gemini\antigravity-ide\brain\78ff4a39-3a4e-4529-9a6b-a7d4cbd3864d\scratch')
import tour_configs

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    cfg = tour_configs.get_tour_config(fname, html)
    title = cfg[0]
    wps = cfg[4]
    print(f"{fname:55} -> {title} ({len(wps)} waypoints)")
