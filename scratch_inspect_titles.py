import os
from bs4 import BeautifulSoup

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(root, 'tours')

files = sorted([f for f in os.listdir(tours_dir) if f.endswith('.html')])
print(f"Total HTML in tours/: {len(files)}")

for f in files:
    fp = os.path.join(tours_dir, f)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as fp_in:
        soup = BeautifulSoup(fp_in.read(), 'html.parser')
    h1 = soup.find('h1')
    h1_text = h1.get_text(" ", strip=True) if h1 else 'NO H1'
    title = soup.title.string.strip() if soup.title and soup.title.string else 'NO TITLE'
    print(f"FILE: {f}")
    print(f"  H1:    {h1_text}")
    print(f"  TITLE: {title}")
    print("-" * 60)
