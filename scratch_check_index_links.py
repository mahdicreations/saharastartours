import re

with open(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\src\pages\index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

links = set(re.findall(r'href=["\']([^"\']+)["\']', content))
print("Links in src/pages/index.astro:")
for l in sorted(links):
    print(" ", l)
