import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    print(f'{fname[:40]:40} | style tag count: {c.count("</style>")}')
