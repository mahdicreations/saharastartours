import os
import re
from bs4 import BeautifulSoup
import json

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(root, 'tours')

tour_files = []
for dirpath, _, filenames in os.walk(tours_dir):
    for f in filenames:
        if f.endswith('.html'):
            tour_files.append(os.path.join(dirpath, f))

print(f"Total tour HTML files: {len(tour_files)}")

results = []
for fp in sorted(tour_files):
    rel = os.path.relpath(fp, root)
    fname = os.path.basename(fp)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string.strip() if soup.title and soup.title.string else ''
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = meta_tag['content'].strip()
        
    h1 = soup.find('h1')
    h1_text = h1.get_text(strip=True) if h1 else ''
    
    # Hero image
    hero_img = ''
    hero_section = soup.find(class_=re.compile(r'hero', re.I))
    if hero_section:
        img_tag = hero_section.find('img')
        if img_tag and img_tag.get('src'):
            hero_img = img_tag['src']
        else:
            style = hero_section.get('style', '')
            bg_match = re.search(r'url\(["\']?([^"\')]+)["\']?\)', style)
            if bg_match:
                hero_img = bg_match.group(1)
    
    # Days in itinerary
    itinerary_items = soup.find_all(class_=re.compile(r'timeline-item|itinerary-item', re.I))
    
    # Check for Leaflet or map markers in script
    has_map = 'leaflet' in html.lower() or 'tour-route-map' in html.lower()
    
    results.append({
        'rel': rel,
        'fname': fname,
        'title': title,
        'h1': h1_text,
        'hero_img': hero_img,
        'days': len(itinerary_items),
        'has_map': has_map
    })

print(f"{'Original File':55} | {'Days':4} | {'Map':5} | {'H1'}")
print("-" * 100)
for r in results:
    print(f"{r['rel']:55} | {r['days']:4} | {str(r['has_map']):5} | {r['h1'][:35]}")
