import glob, os, re
from bs4 import BeautifulSoup

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
print(f'Total tour files found: {len(tour_files)}')

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    timeline_items = soup.find_all(class_='timeline-item')
    
    has_map = '<div class="route-map-card' in html
    has_travel_style = '<div class="travel-style-group' in html
    has_mobile_bar = 'id="mobile-booking-bar"' in html
    has_justify = 'EDITORIAL TEXT JUSTIFY SYSTEM' in html
    has_pattern = 'assets/moroccan_pattern.png' in html
    
    print(f'{fname:55} | items: {len(timeline_items):2} | map: {str(has_map):5} | style: {str(has_travel_style):5} | bar: {str(has_mobile_bar):5} | just: {str(has_justify):5} | pat: {str(has_pattern):5}')
