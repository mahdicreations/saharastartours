import re

with open('tours/16-day-casablanca/index.html', 'r', encoding='utf-8') as f:
    c = f.read()

print('16-day/index.html has map img:', 'morocco_travel_map.png' in c)
for m in re.finditer(r'src="[^"]*morocco_travel_map\.png"', c):
    print('found:', m.group(0))
