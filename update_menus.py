import os
import re

def update_file(filename, is_tour_page=False):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Dictionary of "Title of the tour in menu" -> "slug"
    # We will search for >Title< or >Title (X Days)< and replace href=".*" with the proper link.
    
    replacements = [
        # Desert Tours -> From Casablanca
        ("Morocco Itinerary 6 Days Desert Tour", "itinerary-6-days-tour-from-casablanca"),
        ("Best 7-Day Morocco Tour", "7-day-morocco-tour-from-casablanca"),
        ("Ideal Morocco 8 Days Itinerary", "8-days-itinerary-tour-from-casablanca"),
        ("9 Day Authentic Morocco Tour", "9-day-authentic-morocco-tour"),
        ("Morocco 9 Days Desert &amp; Imperial", "morocco-itinerary-9-days-desert-imperial-cities"),
        ("10 Days Morocco Tour From Casablanca", "10-days-morocco-couple-tour-packages"),
        ("10 Days Desert Tour from Casablanca", "morocco-imperial-cities-tour-from-casablanca"),
        ("12 Days Tour from Casablanca", "12-days-morocco-tour-from-casablanca"),
        ("Private 12 Days Trip To Desert &amp; Marrakech", "private-12-days-trip-to-desert-marrakech"),
        ("Best 12 Days Morocco Tour", "12-days-morocco-tour"),
        ("16 days Morocco Tour from Casablanca", "16-days-morocco-tour-from-casablanca"),
        
        # Desert Tours -> From Marrakech
        ("3 Days Tour From Marrakech To Merzouga", "3-days-desert-tour-from-marrakech-to-fes"), # Wait, menu says Merzouga but actually it goes to Fes.
        ("3 Days Tour From Marrakech To Fes", "3-days-desert-tour-from-marrakech-to-fes"), # Let's match both possible names
        ("Ideal 4 Days Marrakech Desert Tour", "4-days-marrakech-desert-tour"),

        # Imperial Cities
        ("15 Days Tour from Casablanca", "15-days-tour-from-casablanca"),
        ("Best 13 Days Casablanca Tour", "itinerary-13-days-casablanca-tour"),
        ("11 Days Morocco Classic Tour", "11-days-morocco-classic-tour"),

        # Day Trips
        ("Agafay Desert Dinner &amp; Ride", "agafay-desert-sunset-camel-ride-dinner-under-the-stars"),
        ("Day Trip Essaouira Mogador", "one-day-trip-from-marrakech-to-essaouira-mogador"),
        ("Day Trip Ait Ben Haddou", "one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-"),
        ("Day Trip Ouzoud Waterfalls", "one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-"),
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
        # Simple regex to replace href for this specific menu item
        pattern = r'(href="[^"]*")([^>]*>' + re.escape(title) + r')'
        new_href = f'href="{prefix}{slug}.html"'
        content = re.sub(pattern, f'{new_href}\\2', content)

    # I also need to make sure the 5-days tour is in the menu.
    # Let's insert it after Ideal 4 Days if it's not already there.
    if "5 Days Tour From Marrakech to Merzouga" not in content:
        insert_marker = f'<a href="{prefix}4-days-marrakech-desert-tour.html" @click="closeMobileMenu()">Ideal 4 Days Marrakech Desert Tour (4 Days)</a>'
        new_item = f'\n            <a href="{prefix}5-days-tour-from-marrakech-to-merzouga.html" @click="closeMobileMenu()">5 Days Tour From Marrakech to Merzouga (5 Days)</a>'
        content = content.replace(insert_marker, insert_marker + new_item)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {filename}")

update_file("index.html", False)
update_file("about.html", False)
update_file("tours/16-day-casablanca.html", True)
