import os
import re
from bs4 import BeautifulSoup
import json

def parse_tour_html(fpath):
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Title
    title = soup.title.string.strip() if soup.title and soup.title.string else ''
    
    # Meta description
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = meta_tag['content'].strip()
        
    # H1
    h1 = soup.find('h1')
    h1_text = h1.get_text(" ", strip=True) if h1 else ''
    
    # Highlights
    highlights = []
    # Check for highlights list
    hl_section = soup.find(id=re.compile(r'highlight', re.I)) or soup.find(class_=re.compile(r'highlight', re.I))
    if hl_section:
        for li in hl_section.find_all('li'):
            txt = li.get_text(" ", strip=True)
            if txt and len(txt) > 3:
                highlights.append(txt)
    
    # Inclusions & Exclusions
    inclusions = []
    exclusions = []
    inc_section = soup.find(class_=re.compile(r'inclusions|included', re.I))
    if inc_section:
        for li in inc_section.find_all('li'):
            txt = li.get_text(" ", strip=True)
            if txt:
                inclusions.append(txt)
                
    exc_section = soup.find(class_=re.compile(r'exclusions|excluded|not-included', re.I))
    if exc_section:
        for li in exc_section.find_all('li'):
            txt = li.get_text(" ", strip=True)
            if txt:
                exclusions.append(txt)
                
    # Itinerary days
    itinerary = []
    timeline_items = soup.find_all(class_=re.compile(r'timeline-item', re.I))
    for item in timeline_items:
        day_badge = item.find(class_=re.compile(r'timeline-day|badge|day-badge', re.I))
        day_txt = day_badge.get_text(" ", strip=True) if day_badge else ''
        
        heading = item.find(['h3', 'h4', 'h2'])
        heading_txt = heading.get_text(" ", strip=True) if heading else ''
        
        # content paragraphs
        pars = item.find_all('p')
        content_txt = " ".join([p.get_text(" ", strip=True) for p in pars if p.get_text(" ", strip=True)])
        
        if heading_txt or content_txt:
            itinerary.append({
                'day': day_txt or f"Day {len(itinerary)+1}",
                'title': heading_txt,
                'content': content_txt
            })
            
    # Check for Leaflet script with TOUR_DESTINATIONS and ROUTE_COORDINATES
    destinations = []
    routes = []
    scripts = soup.find_all('script')
    for s in scripts:
        stext = s.string or ''
        if 'TOUR_DESTINATIONS' in stext or 'const TOUR_DESTINATIONS' in stext:
            # extract JSON
            m_dest = re.search(r'const\s+TOUR_DESTINATIONS\s*=\s*(\[\s*\{.*?\}\s*\]);', stext, re.DOTALL)
            if m_dest:
                try:
                    # Clean up JS to JSON
                    js_str = m_dest.group(1)
                    # replace trailing commas
                    js_str = re.sub(r',\s*\]', ']', js_str)
                    js_str = re.sub(r',\s*\}', '}', js_str)
                    destinations = json.loads(js_str)
                except Exception as e:
                    pass
        if 'ROUTE_COORDINATES' in stext:
            m_route = re.search(r'const\s+ROUTE_COORDINATES\s*=\s*(\[\s*\[.*?\]\s*\]);', stext, re.DOTALL)
            if m_route:
                try:
                    js_str = m_route.group(1)
                    js_str = re.sub(r',\s*\]', ']', js_str)
                    routes = json.loads(js_str)
                except Exception as e:
                    pass
                    
    return {
        'title': title,
        'meta_desc': meta_desc,
        'h1': h1_text,
        'highlights_count': len(highlights),
        'inclusions_count': len(inclusions),
        'exclusions_count': len(exclusions),
        'itinerary_count': len(itinerary),
        'dests_count': len(destinations),
        'routes_count': len(routes),
        'itinerary': itinerary[:2],
        'first_dest': destinations[0] if destinations else None
    }

# Test on 6-days and 10-days
fpath1 = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\tours\itinerary-6-days-tour-from-casablanca.html'
res1 = parse_tour_html(fpath1)
print("6-days tour parse result:")
print(f"H1: {res1['h1']}")
print(f"Highlights: {res1['highlights_count']}, Inc: {res1['inclusions_count']}, Exc: {res1['exclusions_count']}, Days: {res1['itinerary_count']}")
print(f"Dests: {res1['dests_count']}, Routes: {res1['routes_count']}")
if res1['first_dest']:
    print(f"First dest: {res1['first_dest']}")
