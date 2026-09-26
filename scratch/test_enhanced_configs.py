import glob, os, sys
sys.path.append(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\scratch')
import enhanced_tour_configs

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    title, dist, dur, summary, dests, route = enhanced_tour_configs.get_tour_config(fpath, html)
    print(f"{os.path.basename(fpath):55} -> {title} | {dur} | {len(dests)} dests | {len(route)} coords")
