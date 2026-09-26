import os
import re

base_dir = "sahara-star-tours"
categories = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]

def check_section(content, start, ends):
    start_idx = content.find(start)
    if start_idx == -1: return ""
    start_idx += len(start)
    end_idx = len(content)
    for end in ends:
        idx = content.find(end, start_idx)
        if idx != -1 and idx < end_idx:
            end_idx = idx
    return content[start_idx:end_idx].strip()

sections = ['About this tour:', 'Highlights:', 'Included:', 'Excluded:', 'Itinerary:', 'Images:']

needs_fix = []

for cat in categories:
    cat_path = os.path.join(base_dir, cat)
    slugs = [d for d in os.listdir(cat_path) if os.path.isdir(os.path.join(cat_path, d))]
    
    for slug in slugs:
        txt_path = os.path.join(cat_path, slug, 'tour.txt')
        if not os.path.exists(txt_path): continue
        
        with open(txt_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        title = re.search(r'Title:\s*(.+)', content)
        title = title.group(1).strip() if title else slug
            
        about = check_section(content, 'About this tour:', sections[1:])
        highlights = check_section(content, 'Highlights:', sections[2:])
        included = check_section(content, 'Included:', sections[3:])
        excluded = check_section(content, 'Excluded:', sections[4:])
        
        issues = []
        if len(about) < 150: issues.append("About too short/missing")
        if len(highlights) < 50 or "Not provided" in highlights: issues.append("Highlights missing/poor")
        if "Not provided" in included or len(included) < 30: issues.append("Included missing")
        if "Not provided" in excluded or len(excluded) < 30: issues.append("Excluded missing")
        
        if issues:
            needs_fix.append(f"{cat}/{slug}: {', '.join(issues)}")

print(f"Total tours needing fixes: {len(needs_fix)}")
for fix in needs_fix:
    print(f"- {fix}")
