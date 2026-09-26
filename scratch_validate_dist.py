import os
import re
from bs4 import BeautifulSoup
from urllib.parse import urlparse

dist_dir = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\dist'

html_files = []
for dirpath, _, filenames in os.walk(dist_dir):
    for f in filenames:
        if f.endswith('.html'):
            html_files.append(os.path.join(dirpath, f))

print(f"Total HTML files generated in dist/: {len(html_files)}")

# Collect all existing paths in dist
existing_paths = set()
for dirpath, _, filenames in os.walk(dist_dir):
    for f in filenames:
        rel = os.path.relpath(os.path.join(dirpath, f), dist_dir).replace('\\', '/')
        existing_paths.add('/' + rel)

broken_links = []
broken_assets = []
missing_canonicals = []
missing_maps = []
missing_forms = []

# Filter to canonical pages (exclude redirect stubs with http-equiv="refresh")
canonical_pages = []
redirect_pages = []

for hfile in html_files:
    rel_h = os.path.relpath(hfile, dist_dir).replace('\\', '/')
    with open(hfile, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    
    if '<meta http-equiv="refresh"' in html:
        redirect_pages.append(rel_h)
        continue
    
    canonical_pages.append(rel_h)
    soup = BeautifulSoup(html, 'html.parser')
    
    # Check Canonical
    can = soup.find('link', rel='canonical')
    if not can or not can.get('href'):
        missing_canonicals.append(rel_h)
        
    # Check tour map and booking form if it's a tour page
    if rel_h.startswith('tours/'):
        if 'tour-route-map' not in html or 'L.map(' not in html:
            missing_maps.append(rel_h)
        if 'id="booking-form"' not in html:
            missing_forms.append(rel_h)
            
    # Check all internal links
    for a in soup.find_all('a', href=True):
        href = a['href'].strip()
        if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('http'):
            continue
        # clean anchor
        path_only = href.split('#')[0].split('?')[0]
        if not path_only:
            continue
        
        # Check if destination exists
        # In Astro static build:
        # /path -> /path/index.html or /path.html
        test1 = path_only.rstrip('/') + '/index.html'
        test2 = path_only
        test3 = path_only + '.html'
        if not (test1 in existing_paths or test2 in existing_paths or test3 in existing_paths):
            broken_links.append((rel_h, href))
            
    # Check all images
    for img in soup.find_all('img', src=True):
        src = img['src'].strip()
        if src.startswith('http') or src.startswith('data:'):
            continue
        path_only = src.split('?')[0].split('#')[0]
        if path_only not in existing_paths:
            broken_assets.append((rel_h, src))

print(f"\nCanonical pages: {len(canonical_pages)}")
print(f"Redirect pages:  {len(redirect_pages)}")

print(f"\nBroken internal links: {len(broken_links)}")
for src, dst in broken_links[:10]:
    print(f"  In {src} -> broken link to: {dst}")

print(f"\nBroken images/assets: {len(broken_assets)}")
for src, dst in broken_assets[:10]:
    print(f"  In {src} -> missing asset: {dst}")

print(f"\nMissing canonical tags: {len(missing_canonicals)}")
print(f"Missing maps on tour pages: {len(missing_maps)}")
print(f"Missing booking forms: {len(missing_forms)}")

# Check sitemap
sitemap_path = os.path.join(dist_dir, 'sitemap-index.xml')
has_sitemap = os.path.exists(sitemap_path)
print(f"\nsitemap-index.xml exists: {has_sitemap}")
if has_sitemap:
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        print("Sitemap snippet:\n", f.read()[:400])

# Check robots.txt
robots_path = os.path.join(dist_dir, 'robots.txt')
has_robots = os.path.exists(robots_path)
print(f"\nrobots.txt exists: {has_robots}")
if has_robots:
    with open(robots_path, 'r', encoding='utf-8') as f:
        print("Robots.txt content:\n", f.read())
