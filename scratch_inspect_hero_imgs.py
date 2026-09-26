import os
import re
from bs4 import BeautifulSoup

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(root, 'tours')

files = sorted([f for f in os.listdir(tours_dir) if f.endswith('.html')])

for f in files:
    fp = os.path.join(tours_dir, f)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as fp_in:
        content = fp_in.read()
        soup = BeautifulSoup(content, 'html.parser')
    
    # check hero
    hero = soup.find(class_=re.compile(r'hero', re.I))
    hero_imgs = []
    if hero:
        for img in hero.find_all('img'):
            hero_imgs.append(img.get('src', ''))
        style = hero.get('style', '')
        bgs = re.findall(r'url\(["\']?([^"\')]+)["\']?\)', style)
        hero_imgs.extend(bgs)
    
    # Also check og:image
    og_img = ''
    og = soup.find('meta', property='og:image')
    if og:
        og_img = og.get('content', '')
        
    print(f"{f[:45]:45} | OG: {og_img[:30]:30} | Hero: {hero_imgs}")
