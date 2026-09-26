import os
import re

astro_root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\src'

links_by_file = {}
all_links = set()

for dirpath, _, filenames in os.walk(astro_root):
    for f in filenames:
        if f.endswith(('.astro', '.ts', '.js')):
            fpath = os.path.join(dirpath, f)
            rel = os.path.relpath(fpath, astro_root)
            with open(fpath, 'r', encoding='utf-8') as fp:
                content = fp.read()
            found = re.findall(r'href=["\']([^"\']+)["\']', content)
            file_links = set()
            for l in found:
                if l.startswith('/') and not l.startswith('//'):
                    file_links.add(l)
                    all_links.add(l)
            if file_links:
                links_by_file[rel] = sorted(file_links)

print("ALL INTERNAL LINKS REFERENCED IN ASTRO PROJECT:")
for l in sorted(all_links):
    print(f"  {l}")

print("\nBY FILE:")
for rel, links in sorted(links_by_file.items()):
    print(f"\n[{rel}] ({len(links)} links):")
    for l in links[:10]:
        print(f"  {l}")
    if len(links) > 10:
        print(f"  ... and {len(links)-10} more")
