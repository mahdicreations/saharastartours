import glob, os, re

all_html = glob.glob('*.html') + glob.glob('tours/*.html') + glob.glob('tours/*/*.html')
print(f"Total HTML files in project: {len(all_html)}")

errors = []
for fpath in all_html:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    
    # Check logo
    if 'logo.png' not in c:
        errors.append((fpath, 'Missing logo.png'))
    
    # Check unclosed tags or syntax issues
    if c.count('<body') != c.count('</body'):
        errors.append((fpath, 'Mismatched body tags'))
    if c.count('<html') != c.count('</html'):
        errors.append((fpath, 'Mismatched html tags'))
        
    # Check flag text leaks
    if '>ENG<' in c or '>ESP<' in c or '>ITA<' in c:
        errors.append((fpath, 'Flag text letters found'))

print(f"Audit completed. Total issues found: {len(errors)}")
for e in errors:
    print(f"Issue in {e[0]}: {e[1]}")
