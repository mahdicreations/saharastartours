import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    m = re.search(r"date:\s*'',", html)
    print(f"{fname:55} | match date: {bool(m)}")
