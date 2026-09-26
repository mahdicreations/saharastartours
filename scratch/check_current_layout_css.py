with open('tours/10-days-morocco-couple-tour-packages.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
m = re.search(r'\.tour-container\s*\{[^}]*\}', html)
if m:
    print("tour-container:", m.group(0))

m2 = re.search(r'\.tour-main\s*\{[^}]*\}', html)
if m2:
    print("tour-main:", m2.group(0))

m3 = re.search(r'\.tour-sidebar\s*\{[^}]*\}', html)
if m3:
    print("tour-sidebar:", m3.group(0))

m4 = re.search(r'\.booking-sidebar-card\s*\{[^}]*\}', html)
if m4:
    print("booking-sidebar-card:", m4.group(0))
