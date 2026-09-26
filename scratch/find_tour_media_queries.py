with open('tours/10-days-morocco-couple-tour-packages.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re
matches = re.findall(r'@media[^{]*\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', html)
for m in matches:
    if 'tour-container' in m or 'tour-sidebar' in m:
        print("MATCHED MEDIA QUERY:")
        print(m)
