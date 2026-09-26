import glob, os

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))
for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    b_form = 'id="booking-form"' in c
    s_form = 'id="sidebar-booking-form"' in c
    print(f'{fname[:40]:40} | booking-form: {b_form} | sidebar-booking-form: {s_form}')
