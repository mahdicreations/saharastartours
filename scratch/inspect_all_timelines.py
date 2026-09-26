import glob, os, re
from bs4 import BeautifulSoup

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    items = soup.find_all(class_='timeline-item')
    
    extracted = []
    for it in items:
        day_span = it.find(class_='timeline-day')
        h4 = it.find('h4')
        day_str = day_span.get_text(strip=True) if day_span else ""
        h4_str = h4.get_text(strip=True) if h4 else ""
        extracted.append((day_str, h4_str))
    
    print(f"=== {fname} ({len(extracted)} items) ===")
    for d, h in extracted[:3]:
        print(f"   [{d}] -> {h}")
    if len(extracted) > 3:
        print(f"   ... ({len(extracted)-3} more)")
