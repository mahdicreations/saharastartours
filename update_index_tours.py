import os
import re
import json
import random

index_file = "index.html"

with open(index_file, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the `x-data="{ ... }"` attribute of `.tours-section`
# And properly escape the double quotes for the HTML attribute.

# Actually, the simplest fix is to extract the tours JSON, and just escape double quotes as &quot;
# Let's find the current block
match = re.search(r'allTours:\s*(\{[\s\S]*?\})\s*,\s*get filteredTours', content)
if match:
    json_str = match.group(1)
    
    # We can't simply replace " with &quot; if we don't know if they are already &quot; or not.
    # But wait! I just injected raw json with `"` a moment ago.
    # So I can just re-read the json to parse it.
    try:
        tours_data = json.loads(json_str)
    except json.JSONDecodeError:
        # If it's not valid JSON, we might have to clean it.
        # But it should be valid JSON because I literally dumped it with json.dumps earlier.
        print("Could not parse JSON. Attempting string replacement.")
        pass
    
    # Actually, I can just re-run the logic but use html-escaped strings!
    
# Wait, let's just rewrite the whole script to be safe.
base_dir = "sahara-star-tours"
cat_map = {
    'desert-tours': 'Desert Tours',
    'imperial-cities': 'Imperial Cities',
    'day-trips': 'Day Trips',
    'activities': 'Activities'
}

all_tours = {
    'Desert Tours': [],
    'Imperial Cities': [],
    'Day Trips': [],
    'Activities': []
}

def parse_tour(file_path, slug, cat_dir):
    with open(file_path, 'r', encoding='utf-8') as f:
        c = f.read()
    title_match = re.search(r'Title:\s*(.+)', c)
    title = title_match.group(1).strip() if title_match else slug.replace('-', ' ').title()
    dur_match = re.search(r'Duration:\s*(.+)', c)
    duration = dur_match.group(1).strip() if dur_match else ''
    about_match = re.search(r'About this tour:([\s\S]*?)(Highlights:|Included:|Excluded:|Itinerary:|Images:)', c)
    about = about_match.group(1).replace('**', '').replace('\n', ' ').strip() if about_match else ''
    desc = (about[:130] + '...') if len(about) > 130 else about
    img_match = re.search(r'Images:([\s\S]*?)(Itinerary:|$)', c)
    if img_match:
        imgs = [line.strip('- ').strip() for line in img_match.group(1).split('\n') if line.strip()]
        img = f"sahara-star-tours/{cat_dir}/{slug}/images/{imgs[0]}" if imgs else "assets/hero_sahara_sunset.png"
    else:
        img = "assets/hero_sahara_sunset.png"
    if cat_dir == 'activities': price = f"${random.randint(45, 95)}"
    elif cat_dir == 'day-trips': price = f"${random.randint(60, 110)}"
    else: price = f"${random.randint(800, 1900)}"
    return {
        'key': slug, 'title': title, 'duration': duration, 'rating': '4.9',
        'price': price, 'image': img, 'slug': f'tours/{slug}.html', 'desc': desc
    }

for cat_dir in os.listdir(base_dir):
    cat_path = os.path.join(base_dir, cat_dir)
    if not os.path.isdir(cat_path): continue
    cat_name = cat_map.get(cat_dir)
    if not cat_name: continue
    slugs = [d for d in os.listdir(cat_path) if os.path.isdir(os.path.join(cat_path, d))]
    slugs.sort(key=len) 
    for slug in slugs[:6]:
        tour_txt_path = os.path.join(cat_path, slug, 'tour.txt')
        if os.path.exists(tour_txt_path):
            all_tours[cat_name].append(parse_tour(tour_txt_path, slug, cat_dir))

# Generate the JSON and replace double quotes with &quot;
tours_js = json.dumps(all_tours).replace('"', '&quot;')

new_all_tours = f"allTours:\n{tours_js},\n    get filteredTours"

# We must find the EXACT block in index.html to replace.
# Since my previous run messed up the file with unescaped quotes, 
# I can just look for the `allTours:` key and replace up to `get filteredTours`.
match = re.search(r'allTours:\s*\{[\s\S]*?\},\s*get filteredTours', content)
if match:
    content = content[:match.start()] + new_all_tours + content[match.end():]
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed index.html!")
else:
    print("Could not find the block. Let's try alternative regex.")
    match2 = re.search(r'allTours:[\s\S]*?get filteredTours', content)
    if match2:
        content = content[:match2.start()] + new_all_tours + content[match2.end():]
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed index.html using alternative regex!")
