from bs4 import BeautifulSoup

with open(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\imperial-cities.html', 'r', encoding='utf-8', errors='ignore') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("Title:", soup.title.string if soup.title else '')
h1 = soup.find('h1')
print("H1:", h1.get_text(strip=True) if h1 else '')
meta = soup.find('meta', attrs={'name': 'description'})
print("Meta Desc:", meta['content'] if meta else '')

cards = soup.find_all(class_=lambda c: c and ('card' in c or 'tour' in c))
print("Cards/Tours count:", len(cards))
for a in soup.find_all('a', href=True):
    if 'tours/' in a['href'] or '.html' in a['href']:
        print("  Tour link:", a['href'], "->", a.get_text(strip=True)[:40])
