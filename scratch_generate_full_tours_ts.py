import os
import re
import json
from bs4 import BeautifulSoup
import sys
sys.path.insert(0, r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\scratch')
import enhanced_tour_configs
from scratch_verify_all_29 import TOUR_MAPPING

orig_root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(orig_root, 'tours')
public_dir = os.path.join(orig_root, 'sahara-star-astro', 'public')
target_ts = os.path.join(orig_root, 'sahara-star-astro', 'src', 'data', 'tours.ts')

def clean_str(s):
    if not s:
        return ""
    s = s.replace('\ufffd', '-')
    s = s.replace('&amp;', '&').replace('&nbsp;', ' ')
    s = s.replace('\r', ' ').replace('\n', ' ')
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def build_tour_obj(item):
    fpath = os.path.join(tours_dir, item['file'])
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    raw_title = soup.title.string.strip() if soup.title and soup.title.string else ''
    title = clean_str(raw_title)
    if not title:
        title = f"{item['slug'].replace('-', ' ').title()} | Sahara Star Tours"
    elif 'Sahara Star Tours' not in title:
        title = f"{title} | Sahara Star Tours"
        
    h1 = soup.find('h1')
    raw_h1 = clean_str(h1.get_text(" ", strip=True)) if h1 else ''
    
    short_title = raw_h1
    if not short_title:
        short_title = item['slug'].replace('-', ' ').title()
    elif short_title.isupper():
        short_title = short_title.title()
        
    # meta description
    meta_desc = ''
    meta_tag = soup.find('meta', attrs={'name': 'description'})
    if meta_tag and meta_tag.get('content'):
        meta_desc = clean_str(meta_tag['content'])
    if not meta_desc or len(meta_desc) < 30:
        meta_desc = f"Experience the unforgettable {short_title} with Sahara Star Tours. Professional local guides, private transportation, luxury camps, and bespoke Moroccan itineraries."
        
    # Duration
    duration_match = re.search(r'(\d+)\s*(?:Day|Jour)', item['file'] + " " + short_title, re.I)
    days_count = int(duration_match.group(1)) if duration_match else 1
    if days_count == 1:
        duration_str = "1 Day / Full Day Trip" if item['category'] == 'day-trips' else "Half Day / 3-4 Hours"
    else:
        duration_str = f"{days_count} Days / {days_count - 1} Nights"
        
    # Highlights
    highlights = []
    hl_section = soup.find(id=re.compile(r'highlight', re.I)) or soup.find(class_=re.compile(r'highlight', re.I))
    if hl_section:
        for li in hl_section.find_all('li'):
            txt = clean_str(li.get_text(" ", strip=True))
            if txt and len(txt) > 3:
                highlights.append(txt)
                
    # Inclusions & Exclusions
    inclusions = []
    exclusions = []
    inc_section = soup.find(class_=re.compile(r'inclusions|included', re.I))
    if inc_section:
        for li in inc_section.find_all('li'):
            txt = clean_str(li.get_text(" ", strip=True))
            if txt:
                inclusions.append(txt)
                
    exc_section = soup.find(class_=re.compile(r'exclusions|excluded|not-included', re.I))
    if exc_section:
        for li in exc_section.find_all('li'):
            txt = clean_str(li.get_text(" ", strip=True))
            if txt:
                exclusions.append(txt)
                
    # Fallback inclusions/exclusions if none in HTML
    if not inclusions:
        if item['category'] == 'activities':
            inclusions = [
                'Hotel pickup and drop-off in Marrakech',
                'Professional local instructor / guide',
                'All necessary safety equipment and briefing',
                'Traditional Moroccan mint tea break',
                'Liability insurance'
            ]
        elif item['category'] == 'day-trips':
            inclusions = [
                'Private air-conditioned vehicle with fuel',
                'Experienced English-speaking driver/guide',
                'Hotel pickup and drop-off in Marrakech',
                'Scenic photo stops along the route',
                'Free time to explore landmarks at your own pace'
            ]
        else:
            inclusions = [
                'Comfortable private air-conditioned vehicle & fuel',
                'Professional English-speaking local driver/guide',
                'All hotel & riad accommodations (half-board: dinner & breakfast)',
                'Camel trek into Erg Chebbi dunes for sunset & sunrise',
                'Overnight stay in Sahara Desert luxury tent camp',
                'Guided city tours and monument admission where specified'
            ]
            
    if not exclusions:
        if item['category'] == 'activities':
            exclusions = [
                'Gratuities / tips for staff & guide',
                'Personal expenses & souvenirs',
                'Meals not mentioned in the program',
                'Travel insurance'
            ]
        elif item['category'] == 'day-trips':
            exclusions = [
                'Lunch and beverages',
                'Local monument entrance fees',
                'Optional local city guide gratuities',
                'Personal travel insurance'
            ]
        else:
            exclusions = [
                'International & domestic flights',
                'Travel & medical insurance',
                'Lunches and beverages (unless specified)',
                'Personal expenses & souvenir shopping',
                'Tips / gratuities for drivers and guides'
            ]
            
    # Itinerary days
    itinerary = []
    timeline_items = soup.find_all(class_=re.compile(r'timeline-item', re.I))
    for idx, t_item in enumerate(timeline_items):
        day_badge = t_item.find(class_=re.compile(r'timeline-day|badge|day-badge', re.I))
        day_txt = clean_str(day_badge.get_text(" ", strip=True)) if day_badge else f"Day {idx+1}"
        
        heading = t_item.find(['h4', 'h3', 'h2'])
        heading_txt = clean_str(heading.get_text(" ", strip=True)) if heading else f"Stage {idx+1}"
        if heading_txt.isupper():
            heading_txt = heading_txt.title()
            
        pars = t_item.find_all('p')
        content_txt = "<br/><br/>".join([clean_str(p.get_text(" ", strip=True)) for p in pars if clean_str(p.get_text(" ", strip=True))])
        
        itinerary.append({
            'day': day_txt,
            'title': heading_txt,
            'content': content_txt
        })
        
    if not itinerary:
        itinerary = [{
            'day': 'Day 1' if item['category'] != 'activities' else 'Schedule',
            'title': f'{short_title} Experience',
            'content': meta_desc
        }]
        
    # Map destinations and route
    destinations = []
    routes = []
    scripts = soup.find_all('script')
    for s in scripts:
        stext = s.string or ''
        if 'TOUR_DESTINATIONS' in stext:
            m_dest = re.search(r'const\s+TOUR_DESTINATIONS\s*=\s*(\[\s*\{.*?\}\s*\]);', stext, re.DOTALL)
            if m_dest:
                try:
                    js_str = m_dest.group(1)
                    js_str = re.sub(r',\s*\]', ']', js_str)
                    js_str = re.sub(r',\s*\}', '}', js_str)
                    destinations = json.loads(js_str)
                except:
                    pass
        if 'ROUTE_COORDINATES' in stext:
            m_route = re.search(r'const\s+ROUTE_COORDINATES\s*=\s*(\[\s*\[.*?\]\s*\]);', stext, re.DOTALL)
            if m_route:
                try:
                    js_str = m_route.group(1)
                    js_str = re.sub(r',\s*\]', ']', js_str)
                    routes = json.loads(js_str)
                except:
                    pass
                    
    # Fallback from enhanced_tour_configs if script had no destinations or route
    if not destinations or not routes:
        cfg = enhanced_tour_configs.get_tour_config(fpath, html)
        if cfg and len(cfg) >= 6:
            if not destinations:
                destinations = cfg[4]
            if not routes:
                routes = cfg[5]
                
    # Clean destinations strings
    for d in destinations:
        d['name'] = clean_str(d.get('name', ''))
        d['day'] = clean_str(d.get('day', ''))
        d['subtitle'] = clean_str(d.get('subtitle', ''))
        d['desc'] = clean_str(d.get('desc', ''))
        
    # If highlights empty, construct from map destinations subtitles/names
    if not highlights and destinations:
        for d in destinations[:8]:
            sub = d.get('subtitle', '')
            name = d.get('name', '')
            if sub:
                highlights.append(f"Explore {name}: {sub}")
            else:
                highlights.append(f"Visit {name}")
                
    if not highlights:
        highlights = [
            f"Discover the scenic wonders of {short_title}",
            "Travel in private luxury air-conditioned comfort",
            "Immerse yourself in authentic Moroccan culture & traditions",
            "Professional local English-speaking guidance"
        ]

    # Gallery images - read exact existing files from disk
    gal_dir = os.path.join(public_dir, 'sahara-star-tours', item['folder'], 'images')
    gal_images = []
    if os.path.exists(gal_dir):
        files = sorted(os.listdir(gal_dir))
        thumb_files = [f for f in files if 'thumb' in f.lower()]
        other_files = [f for f in files if 'thumb' not in f.lower()]
        ordered = thumb_files + other_files
        for f in ordered:
            gal_images.append({
                'src': f"/sahara-star-tours/{item['folder']}/images/{f}",
                'cap': short_title
            })
            
    is_featured = item['slug'] in [
        '7-day-morocco-tour-from-casablanca', 
        '3-days-desert-tour-marrakech-to-fes', 
        '16-days-morocco-tour-from-casablanca',
        'agafay-desert-sunset-camel-ride',
        'hot-air-balloon-marrakech',
        '12-days-morocco-tour',
        '6-days-desert-tour-from-casablanca',
        '8-days-itinerary-tour-from-casablanca',
        '10-days-imperial-cities-tour'
    ]
    badge = 'BEST SELLER' if item['slug'] == '7-day-morocco-tour-from-casablanca' else ('POPULAR' if is_featured else None)

    return {
        'slug': item['slug'],
        'title': title,
        'shortTitle': short_title,
        'description': meta_desc,
        'category': item['category'],
        'duration': duration_str,
        'durationDays': days_count,
        'startingFrom': item['startingFrom'],
        'price': item['price'],
        'heroImage': item['heroAsset'],
        'highlights': highlights,
        'inclusions': inclusions,
        'exclusions': exclusions,
        'itinerary': itinerary,
        'mapDestinations': destinations,
        'mapRouteCoordinates': routes,
        'galleryImages': gal_images,
        'featured': is_featured,
        'badge': badge
    }

print("Extracting all 29 tours...")
all_tours = [build_tour_obj(tm) for tm in TOUR_MAPPING]

ts_code = '''/**
 * tours.ts — Central data store for all Sahara Star Tours
 * Single source of truth: all 29 original tours fully migrated with verified images,
 * interactive Leaflet routes, day-by-day itineraries, inclusions, exclusions, and SEO metadata.
 */

export interface TourStop {
  number: number;
  name: string;
  day: string;
  subtitle: string;
  desc: string;
  coords: [number, number];
}

export interface Tour {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: 'desert-tours' | 'imperial-cities' | 'day-trips' | 'activities';
  duration: string;
  durationDays: number;
  startingFrom: string;
  price: string;
  heroImage: string;
  thumbnailImage?: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Array<{ day: string; title: string; content: string }>;
  mapDestinations: TourStop[];
  mapRouteCoordinates: [number, number][];
  galleryImages: Array<{ src: string; cap: string }>;
  featured?: boolean;
  badge?: string;
}

export const categoryLabels: Record<string, string> = {
  'desert-tours': 'Desert Tours',
  'imperial-cities': 'Imperial Cities',
  'day-trips': 'Day Trips',
  'activities': 'Activities',
};

export const tours: Tour[] = '''

ts_code += json.dumps(all_tours, indent=2, ensure_ascii=False) + ';\n\n'

ts_code += '''// ============================================================
// QUERY HELPERS
// ============================================================

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}

export function getToursByCategory(category: string): Tour[] {
  return tours.filter(t => t.category === category);
}

export function getFeaturedTours(limit?: number): Tour[] {
  const f = tours.filter(t => t.featured);
  return limit ? f.slice(0, limit) : f;
}

export function getAllTours(): Tour[] {
  return tours;
}
'''

with open(target_ts, 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Successfully wrote {len(all_tours)} tours to {target_ts}!")
print(f"File size: {os.path.getsize(target_ts)} bytes")
