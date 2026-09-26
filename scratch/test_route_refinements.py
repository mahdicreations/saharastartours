import glob, os, re
from bs4 import BeautifulSoup

tour_files = sorted(glob.glob('tours/*.html') + glob.glob('tours/*/*.html'))

# City normalization mapping
KNOWN_CITIES = [
    ("Casablanca", ["casablanca", "casa airport"]),
    ("Rabat", ["rabat", "sale"]),
    ("Asilah", ["asilah", "assilah"]),
    ("Tangier", ["tangier", "tanger"]),
    ("Tetouan", ["tetouan", "tetoun"]),
    ("Chefchaouen", ["chefchaouen", "chaouen", "blue city"]),
    ("Volubilis", ["volubilis", "walili"]),
    ("Meknes", ["meknes"]),
    ("Fes", ["fes", "fez"]),
    ("Ifrane", ["ifrane"]),
    ("Azrou", ["azrou"]),
    ("Midelt", ["midelt"]),
    ("Ziz Valley", ["ziz valley", "ziz"]),
    ("Erfoud", ["erfoud"]),
    ("Rissani", ["rissani"]),
    ("Merzouga Sahara", ["merzouga", "erg chebbi", "sahara desert", "desert dunes"]),
    ("Todra Gorge", ["todra", "toudgha"]),
    ("Dades Valley", ["dades", "boumalne"]),
    ("Rose Valley", ["rose valley", "kalaat"]),
    ("Skoura", ["skoura"]),
    ("Ouarzazate", ["ouarzazate"]),
    ("Ait Benhaddou", ["ait benhaddou", "ait ben haddou"]),
    ("Tizi n'Tichka", ["tichka"]),
    ("Marrakech", ["marrakech"]),
    ("Essaouira", ["essaouira", "mogador"]),
    ("Ouzoud Waterfalls", ["ouzoud"]),
    ("Ourika Valley", ["ourika"]),
    ("Agafay Desert", ["agafay"]),
    ("Taroudant", ["taroudant"]),
    ("Agadir", ["agadir"])
]

def extract_tour_route(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    h1 = soup.find('h1')
    title_text = h1.get_text(strip=True) if h1 else fname.replace('.html', '').replace('-', ' ').title()
    title_text = re.sub(r'\s+', ' ', title_text)
    
    items = soup.find_all(class_='timeline-item')
    
    # Day trips / activities
    fname_lower = fname.lower()
    if len(items) <= 1:
        if "essaouira" in fname_lower:
            return "Essaouira Day Trip Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "08:00 AM"},
                {"name": "Argan Oil Cooperative & Tree Goats", "day": "Midway"},
                {"name": "Essaouira Port & Ramparts", "day": "Noon"},
                {"name": "UNESCO Medina & Skala", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "19:00 PM"}
            ]
        elif "ouzoud" in fname_lower:
            return "Ouzoud Waterfalls Day Trip Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "08:00 AM"},
                {"name": "Middle Atlas Berber Foothills", "day": "Midway"},
                {"name": "Ouzoud Waterfalls (110m Cascades)", "day": "Guided Hike"},
                {"name": "River Barge & Wild Barbary Apes", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "18:30 PM"}
            ]
        elif "ouarzazate" in fname_lower or "ait-ben-haddou" in fname_lower:
            return "Ait Benhaddou & Ouarzazate Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "07:30 AM"},
                {"name": "Tizi n'Tichka Pass (2,260m)", "day": "High Atlas"},
                {"name": "Kasbah Ait Benhaddou (UNESCO)", "day": "Historic Tour"},
                {"name": "Ouarzazate & Cinema Studios", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "19:30 PM"}
            ]
        elif "ourika" in fname_lower:
            return "Ourika Valley & Atlas Mountains Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "09:00 AM"},
                {"name": "Traditional Berber Village & Tea", "day": "Midway"},
                {"name": "Setti Fatma Waterfalls Trail", "day": "Hike"},
                {"name": "Riverside Lunch by the Cascades", "day": "Afternoon"},
                {"name": "Return to Marrakech", "day": "17:00 PM"}
            ]
        elif "agafay" in fname_lower:
            return "Agafay Desert Sunset & Dinner Route Map", [
                {"name": "Marrakech (Pick-up)", "day": "16:00 PM"},
                {"name": "Agafay Rocky Desert Golden Dunes", "day": "Sunset"},
                {"name": "Nomad Camel Trek in Traditional Robes", "day": "Trek"},
                {"name": "Luxury Desert Camp Banquet & Fire Show", "day": "Dinner"},
                {"name": "Return to Marrakech", "day": "22:30 PM"}
            ]
        elif "balloon" in fname_lower:
            return "Marrakech Hot Air Balloon Experience Route Map", [
                {"name": "Marrakech (Sunrise Pick-up)", "day": "05:30 AM"},
                {"name": "Launch Site & Inflation Ceremony", "day": "Pre-flight"},
                {"name": "Atlas Sunrise Flight (1,000m Altitude)", "day": "1 Hour Flight"},
                {"name": "Berber Royal Breakfast & Flight Certificate", "day": "Celebration"},
                {"name": "Return to Marrakech Hotel", "day": "10:30 AM"}
            ]
        elif "camel" in fname_lower:
            return "Marrakech Palm Grove Camel Ride Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Palmeraie Oasis Palm Groves", "day": "Arrival"},
                {"name": "Nomad Cheche & Camel Caravan Trek", "day": "Activity"},
                {"name": "Berber Hospitality & Mint Tea Break", "day": "Tea Time"},
                {"name": "Drop-off at Marrakech Hotel", "day": "Return"}
            ]
        elif "horse" in fname_lower:
            return "Marrakech Horse Riding Experience Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Equestrian Club & Safety Briefing", "day": "Briefing"},
                {"name": "Palmeraie Trails & Berber Villages Ride", "day": "Horse Trek"},
                {"name": "Panoramic Atlas Viewpoints & Mint Tea", "day": "Relax"},
                {"name": "Return to Marrakech Hotel", "day": "Return"}
            ]
        elif "quad" in fname_lower or "buggy" in fname_lower:
            act_type = "Quad Biking" if "quad" in fname_lower else "Raid Buggy"
            return f"Marrakech {act_type} Adventure Route Map", [
                {"name": "Marrakech Accommodation Pick-up", "day": "Start"},
                {"name": "Oasis Basecamp & Safety Instructions", "day": "Preparation"},
                {"name": "Palmeraie Desert Trails & Rocky Hills", "day": "Adrenaline Run"},
                {"name": "Berber Village Mint Tea & Photo Stop", "day": "Tea Break"},
                {"name": "Return to Marrakech Hotel", "day": "Return"}
            ]
        elif "fantasia" in fname_lower:
            return "Fantasia Chez Ali Marrakech Dinner & Show Route Map", [
                {"name": "Marrakech Hotel Pick-up", "day": "20:00 PM"},
                {"name": "Palace Gates Welcome & Folkloric Troupes", "day": "Reception"},
                {"name": "Traditional Caidal Tent Moroccan Feast", "day": "Banquet"},
                {"name": "Fantasia Cavalry Horsemanship & Fireworks", "day": "Spectacle"},
                {"name": "Return Transfer to Marrakech Riad", "day": "Midnight"}
            ]
        elif "guided-tour" in fname_lower:
            return "Marrakech Historic Guided City Tour Route Map", [
                {"name": "Koutoubia Mosque & Gardens", "day": "Morning"},
                {"name": "Bahia Palace & Jewish Mellah", "day": "Mid-morning"},
                {"name": "Saadian Tombs & Bab Agnaou", "day": "Noon"},
                {"name": "Ben Youssef Medersa & Souks", "day": "Afternoon"},
                {"name": "Jemaa El-Fna Square & Majorelle Garden", "day": "Late Afternoon"}
            ]

    # Specific multi-day special routes for desert tours:
    if "3-days-desert-tour-from-marrakech-to-fes" in fname_lower:
        return "3-Day Marrakech to Fes Desert Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "High Atlas & Ait Benhaddou", "day": "Day 1"},
            {"name": "Dades Valley & Gorges", "day": "Day 1"},
            {"name": "Todra Gorges & Palm Groves", "day": "Day 2"},
            {"name": "Merzouga Sahara & Luxury Camp", "day": "Day 2"},
            {"name": "Ziz Valley & Middle Atlas Cedars", "day": "Day 3"},
            {"name": "Fes Medina (Grand Finale)", "day": "Day 3"}
        ]

    if "4-days-marrakech-desert-tour" in fname_lower:
        return "4-Day Marrakech Desert Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "Ait Benhaddou & Dades Gorges", "day": "Day 1"},
            {"name": "Todra Canyon & Tinghir", "day": "Day 2"},
            {"name": "Merzouga Sahara Erg Chebbi", "day": "Day 2 & 3"},
            {"name": "Rissani & Draa Valley Oasis", "day": "Day 3"},
            {"name": "Ouarzazate Kasbahs", "day": "Day 3 & 4"},
            {"name": "High Atlas to Marrakech (End)", "day": "Day 4"}
        ]

    if "5-days-tour-from-marrakech-to-merzouga" in fname_lower:
        return "5-Day Marrakech to Merzouga Tour Route Map", [
            {"name": "Marrakech (Start)", "day": "Day 1"},
            {"name": "Tizi n'Tichka & Ait Benhaddou", "day": "Day 1"},
            {"name": "Dades & Todra Valleys", "day": "Day 2"},
            {"name": "Merzouga Dunes & Camel Trek", "day": "Day 3"},
            {"name": "Nomad Families & Gnawa Music", "day": "Day 4"},
            {"name": "Ouarzazate & Cinema Studios", "day": "Day 5"},
            {"name": "Marrakech Grand Finale (End)", "day": "Day 5"}
        ]

    # General Multi-day Tours
    waypoints = []
    for idx, it in enumerate(items):
        day_num = idx + 1
        h4 = it.find('h4')
        h4_text = h4.get_text(strip=True) if h4 else f"Day {day_num}"
        
        # Clean h4 text
        h4_clean = re.sub(r'^[Dd]ay\s*\d+[\s:\-–—]+', '', h4_text)
        h4_clean = re.sub(r'[:–—\-]+$', '', h4_clean).strip()
        
        day_title_lower = h4_text.lower()
        matched_city = None
        for city_name, keywords in KNOWN_CITIES:
            for kw in keywords:
                if kw in day_title_lower:
                    matched_city = city_name
                    break
            if matched_city:
                break
        
        name = matched_city if matched_city else h4_clean[:30]
        if not waypoints or waypoints[-1]["name"] != name:
            waypoints.append({"name": name, "day": f"Day {day_num}"})
        else:
            waypoints[-1]["day"] += f" & {day_num}"

    # If first or last waypoint doesn't specify Start/End
    if waypoints:
        if "start" not in waypoints[0]["name"].lower() and len(waypoints) > 2:
            waypoints[0]["name"] += " (Start)"
        if "finale" not in waypoints[-1]["name"].lower() and "departure" not in waypoints[-1]["name"].lower() and "end" not in waypoints[-1]["name"].lower() and len(waypoints) > 2:
            waypoints[-1]["name"] += " (End)"

    return f"{title_text} Route Map", waypoints

for fpath in tour_files:
    fname = os.path.basename(fpath)
    map_title, wps = extract_tour_route(fpath)
    names = " -> ".join([f"{w['name']} [{w['day']}]" for w in wps[:4]])
    if len(wps) > 4:
        names += f" -> ... -> {wps[-1]['name']} [{wps[-1]['day']}]"
    print(f"{fname:55} | {len(wps)} stops: {names}")
