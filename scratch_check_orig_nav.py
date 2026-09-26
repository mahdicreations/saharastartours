from bs4 import BeautifulSoup

with open(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\index.html', 'r', encoding='utf-8', errors='ignore') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

nav = soup.find('nav') or soup.find('header')
if nav:
    for a in nav.find_all('a', href=True):
        href = a['href']
        text = a.get_text(strip=True)
        print(f"{text:45} -> {href}")
