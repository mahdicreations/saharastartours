root_pages = [
    "activities.html",
    "day-trips.html",
    "desert-tours.html",
    "imperial-cities.html",
    "about.html",
    "index.html"
]

for p in root_pages:
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    has_planner = 'id="planner"' in text
    has_booking = 'id="booking-form"' in text
    print(f"{p}: has_planner={has_planner}, has_booking={has_booking}")
