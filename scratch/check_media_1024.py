with open('tours/10-days-morocco-couple-tour-packages.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
m = re.search(r'@media\s*\(max-width:\s*1024px\)\s*\{[^}]*\}', html)
if m:
    print(m.group(0))
