with open('tours/16-day-casablanca.html', 'r', encoding='utf-8') as f:
    c = f.read()

import re
idx = c.find('class="route-map-card')
if idx != -1:
    print(c[idx-30:idx+1200])
else:
    print("Not found")
