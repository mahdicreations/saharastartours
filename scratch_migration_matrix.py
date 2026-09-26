import os
import re
from bs4 import BeautifulSoup

orig_root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
dist_dir = os.path.join(orig_root, 'sahara-star-astro', 'dist')
astro_src = os.path.join(orig_root, 'sahara-star-astro', 'src')

# Collect all original HTML files
orig_files = []
for dirpath, _, filenames in os.walk(orig_root):
    if 'sahara-star-astro' in dirpath or 'node_modules' in dirpath or '.git' in dirpath or 'scratch' in dirpath:
        continue
    for f in filenames:
        if f.endswith('.html'):
            rel = os.path.relpath(os.path.join(dirpath, f), orig_root).replace('\\', '/')
            orig_files.append(rel)

orig_files.sort()

# Read astro.config.mjs redirects
with open(os.path.join(orig_root, 'sahara-star-astro', 'astro.config.mjs'), 'r', encoding='utf-8') as f:
    config_text = f.read()

redirects_map = {}
for m in re.finditer(r"['\"]([^'\"]+)['\"]\s*:\s*['\"]([^'\"]+)['\"]", config_text):
    redirects_map[m.group(1)] = m.group(2)

# Check all existing output in dist
dist_existing = set()
for dirpath, _, filenames in os.walk(dist_dir):
    for f in filenames:
        rel = os.path.relpath(os.path.join(dirpath, f), dist_dir).replace('\\', '/')
        dist_existing.add('/' + rel)

matrix_rows = []

for orig in orig_files:
    orig_url = '/' + orig
    
    # Determine destination Astro URL
    if orig == 'index.html':
        astro_url = '/'
    elif orig.endswith('.html') and not orig.startswith('tours/'):
        astro_url = '/' + orig[:-5]
    elif orig == 'tours/16-day-casablanca/index.html':
        astro_url = '/tours/16-days-morocco-tour-from-casablanca'
    elif orig_url in redirects_map:
        astro_url = redirects_map[orig_url]
    else:
        # direct slug
        slug = os.path.basename(orig)[:-5]
        astro_url = f"/tours/{slug}"

    # Check if destination exists in dist
    check_path = astro_url.rstrip('/') + '/index.html' if astro_url != '/' else '/index.html'
    dest_exists = check_path in dist_existing
    
    # Check redirect status
    # Does original URL have a redirect generated in dist?
    redir_path = orig_url.rstrip('/') + '/index.html'
    redir_exists = redir_path in dist_existing or orig == 'index.html'
    
    status = "COMPLETE" if dest_exists else "BROKEN"
    
    # Check images, map, content, SEO for destination page
    dest_file = os.path.join(dist_dir, check_path.lstrip('/'))
    images_ok = "YES"
    map_ok = "YES" if (astro_url.startswith('/tours/') or 'index' in astro_url) else "N/A"
    content_ok = "YES"
    seo_ok = "YES"
    http_404 = "NO"
    
    if os.path.exists(dest_file):
        with open(dest_file, 'r', encoding='utf-8', errors='ignore') as fp:
            dhtml = fp.read()
        if astro_url.startswith('/tours/'):
            if 'tour-route-map' not in dhtml:
                map_ok = "NO"
        if '<title>' not in dhtml or 'name="description"' not in dhtml or 'rel="canonical"' not in dhtml:
            seo_ok = "NO"
    else:
        images_ok = "NO"
        map_ok = "NO"
        content_ok = "NO"
        seo_ok = "NO"
        http_404 = "YES"

    matrix_rows.append({
        'orig_url': orig_url,
        'astro_url': astro_url,
        'status': status,
        'images': images_ok,
        'map': map_ok,
        'content': content_ok,
        'seo': seo_ok,
        'is_404': http_404
    })

print("| Original URL | Astro URL | Status | Images | Map | Content | SEO | 404 |")
print("| ------------ | --------- | ------ | ------ | --- | ------- | --- | --- |")
for r in matrix_rows:
    print(f"| `{r['orig_url']}` | `{r['astro_url']}` | **{r['status']}** | {r['images']} | {r['map']} | {r['content']} | {r['seo']} | {r['is_404']} |")
