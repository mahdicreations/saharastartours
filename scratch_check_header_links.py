import re
from bs4 import BeautifulSoup

header_path = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\src\components\Header.astro'
with open(header_path, 'r', encoding='utf-8') as f:
    content = f.read()

links = set(re.findall(r'href=["\']([^"\']+)["\']', content))
print("Header.astro internal links:")
for l in sorted(links):
    if not l.startswith('http') and not l.startswith('tel:') and not l.startswith('mailto:'):
        print(f"  {l}")
