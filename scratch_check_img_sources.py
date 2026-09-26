import os
import re
from bs4 import BeautifulSoup
from collections import Counter

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
img_sources = Counter()

for dirpath, _, filenames in os.walk(root):
    if 'sahara-star-astro' in dirpath or 'node_modules' in dirpath or '.git' in dirpath or 'scratch' in dirpath:
        continue
    for f in filenames:
        if f.endswith('.html'):
            with open(os.path.join(dirpath, f), 'r', encoding='utf-8', errors='ignore') as fp:
                soup = BeautifulSoup(fp.read(), 'html.parser')
                for img in soup.find_all('img', src=True):
                    img_sources[img['src']] += 1

print(f"Total distinct img srcs: {len(img_sources)}")
for src, count in sorted(img_sources.items()):
    print(f"  {src:60} : {count}")
