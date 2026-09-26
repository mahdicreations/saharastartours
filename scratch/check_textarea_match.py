import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
pattern = re.compile(r'(<div class="form-group floated">\s*<textarea[^>]*id="contact-message")', re.DOTALL)

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    match = pattern.search(html)
    print(f"{fname:55} | match textarea: {bool(match)}")
