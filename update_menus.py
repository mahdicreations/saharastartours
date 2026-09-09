import os

def update_file(filename, is_tour_page=False):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Dictionary of "Title of the tour in menu" -> "slug"
    # We will search for >Title< or >Title (X Days)< and replace href="#tours" with the proper link.
    # Note: we are replacing href="#tours" with href="tours/slug.html" or href="slug.html"
    
    replacements = [
        # Desert Tours -> From Casablanca
        ("Morocco Itinerary 6 Days Desert Tour", "morocco-itinerary-6-days-desert-tour-from-casablanca-to-marrakech"),
        ("Best 7-Day Morocco Tour", "best-7-day-morocco-tour-from-casablanca-to-marrakech"),
        ("Ideal Morocco 8 Days Itinerary", "ideal-morocco-8-days-itinerary-tour-from-casablanca"),
        ("9 Day Authentic Morocco Tour", "9-day-authentic-morocco-tour"),
        ("Morocco 9 Days Desert &amp; Imperial", "morocco-itinerary-9-days-desert-imperial-cities"),
        ("10 Days Morocco Tour From Casablanca", "10-days-casablanca-tour-morocco-couple-tour-packages"),
        ("10 Days Desert Tour from Casablanca", "10-days-morocco-imperial-cities-tour-from-casablanca"),
        ("12 Days Tour from Casablanca", "grand-itinerary-12-days-morocco-tour-from-casablanca"),
        ("Private 12 Days Trip To Desert &amp; Marrakech", "private-12-days-trip-to-desert-marrakech"),
        ("Best 12 Days Morocco Tour", "best-12-days-morocco-tour-from-casablanca"),
        ("16 days Morocco Tour from Casablanca", "16-day-casablanca"),
        
        # Desert Tours -> From Marrakech
        ("3 Days Tour From Marrakech To Merzouga", "3-days-desert-tour-from-marrakech-to-fes"),
        ("Ideal 4 Days Marrakech Desert Tour", "ideal-4-days-marrakech-desert-tour-to-merzouga-morocco-trip"),

        # Imperial Cities
        ("15 Days Tour from Casablanca", "15-days-tour-from-casablanca"),
        ("Best 13 Days Casablanca Tour", "the-best-morocco-itinerary-13-days-casablanca-tour"),
        ("11 Days Morocco Classic Tour", "11-days-morocco-classic-tour-private-tour-package"),

        # Day Trips
        ("Agafay Desert Dinner &amp; Ride", "agafay-desert-sunset-camel-ride-dinner-under-the-stars"),
        ("Day Trip Essaouira Mogador", "one-day-trip-from-marrakech-to-essaouira-mogador"),
        ("Day Trip Ait Ben Haddou", "one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-kasbah"),
        ("Day Trip Ouzoud Waterfalls", "one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-villages"),
        ("One Day Marrakech City Tour", "one-day-guided-tour-of-marrakech-city"),
        ("Ourika Valley Nature Tour", "ourika-valley-nature-wildlife-tour"),

        # Activities
        ("Hot Air Balloon in Marrakech", "hot-air-balloon-in-marrakech"),
        ("Horse Riding in Morocco", "horse-riding-in-morocco"),
        ("Fantasia Chez Ali Marrakech", "fantasia-chez-ali-marrakech"),
        ("Quad Biking In Marrakech", "quad-biking-in-marrakech"),
        ("Raid Buggy In Marrakech", "raid-buggy-in-marrakech"),
        ("Camel Riding Palm Groves", "camel-riding")
    ]

    prefix = "" if is_tour_page else "tours/"

    for title, slug in replacements:
        # We need to replace href="#tours" only for the specific line that contains the title.
        # A simple approach is to split into lines and replace in the matching line.
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if title in line and 'href="#tours"' in line:
                lines[i] = line.replace('href="#tours"', f'href="{prefix}{slug}.html"')
            elif title in line and 'href="tours/16-day-casablanca.html"' in line and is_tour_page:
                lines[i] = line.replace('href="tours/16-day-casablanca.html"', f'href="{slug}.html"')

        content = '\n'.join(lines)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filename}")

update_file("index.html", False)
update_file("about.html", False)
update_file("tours/16-day-casablanca.html", True)
