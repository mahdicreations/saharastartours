import os

p = 'tours/16-day-casablanca/index.html'
if os.path.exists(p):
    with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    print('exists:', p, 'has_socials:', '<div class="footer-socials">' in c, 'has_bottom:', '<div class="footer-bottom">' in c)
else:
    print('does not exist:', p)
