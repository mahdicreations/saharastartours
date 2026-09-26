import glob, os, re

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    has_form = 'id="booking-form"' in html or 'id="sidebar-booking-form"' in html or 'action="booking-success.html"' in html
    has_msg = 'id="contact-message"' in html or 'name="message"' in html
    has_alpine_data = 'bookingData' in html
    
    print(f"{fname:55} | form: {str(has_form):5} | msg: {str(has_msg):5} | alpine: {str(has_alpine_data):5}")
