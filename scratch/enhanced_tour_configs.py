import os
import re

# Key Destination Coordinates Database
GEO = {
    "casablanca": [33.589882, -7.603869],
    "mohammedia": [33.7063, -7.3888],
    "bouznika": [33.7892, -7.1597],
    "rabat": [34.020882, -6.841650],
    "asilah": [35.4650, -6.0340],
    "tangier": [35.7595, -5.8340],
    "tetouan": [35.5889, -5.3626],
    "chefchaouen": [35.171400, -5.269700],
    "volubilis": [34.072222, -5.554167],
    "meknes": [33.893791, -5.551624],
    "fes": [34.033134, -5.000280],
    "ifrane": [33.5273, -5.1054],
    "azrou": [33.4344, -5.2213],
    "midelt": [32.6828, -4.7337],
    "rich": [32.2600, -4.4900],
    "errachidia": [31.9315, -4.4266],
    "ziz_valley": [31.6500, -4.2500],
    "erfoud": [31.4328, -4.2324],
    "rissani": [31.2850, -4.2700],
    "merzouga": [31.1444, -4.0197],
    "tinghir": [31.5147, -5.5328],
    "todra": [31.5517, -5.5986],
    "dades": [31.5900, -5.9900],
    "boumalne": [31.3715, -5.9867],
    "rose_valley": [31.2464, -6.1281],
    "skoura": [31.0620, -6.5540],
    "ouarzazate": [30.9335, -6.9370],
    "ait_benhaddou": [31.0470, -7.1317],
    "telouet": [31.2870, -7.2370],
    "tichka": [31.2847, -7.3811],
    "marrakech": [31.629472, -7.981084],
    "essaouira": [31.5125, -9.7700],
    "chichaoua": [31.5360, -8.7610],
    "ouzoud": [32.0150, -6.7190],
    "ourika": [31.2180, -7.6740],
    "agafay": [31.4500, -8.2000],
    "taroudant": [30.4700, -8.8770],
    "agadir": [30.4278, -9.5981],
    "el_jadida": [33.2500, -8.5000]
}

def get_tour_config(fpath, content):
    """Detect appropriate tour destinations and coordinates based on filepath and content."""
    fname = os.path.basename(fpath).lower()
    full_path_lower = fpath.lower().replace("\\", "/")
    content_lower = content.lower()
    
    # 1. 15-Day / 16-Day Grand Tours (CHECK FIRST before 6-day to avoid substring match)
    if "16-day" in fname or "16-day" in full_path_lower or "15-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Atlantic Start", "desc": "Hassan II Mosque.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Capital", "desc": "Royal landmarks and oceanfront.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Tangier", "day": "Day 3", "subtitle": "Northern Gateway", "desc": "Mediterranean and Atlantic junction.", "coords": GEO["tangier"]},
            {"number": 4, "name": "Chefchaouen", "day": "Day 4", "subtitle": "Blue Pearl", "desc": "Rif Mountain magic.", "coords": GEO["chefchaouen"]},
            {"number": 5, "name": "Fes", "day": "Days 5 & 6", "subtitle": "Spiritual Capital", "desc": "UNESCO heritage walking tour.", "coords": GEO["fes"]},
            {"number": 6, "name": "Merzouga Sahara", "day": "Days 7 & 8", "subtitle": "Erg Chebbi Dunes", "desc": "Glamping and camel caravan.", "coords": GEO["merzouga"]},
            {"number": 7, "name": "Dades Gorges", "day": "Day 9", "subtitle": "Dramatic Canyons", "desc": "High rock formations.", "coords": GEO["dades"]},
            {"number": 8, "name": "Ouarzazate", "day": "Day 10", "subtitle": "Kasbah Road", "desc": "Ait Benhaddou and studios.", "coords": GEO["ait_benhaddou"]},
            {"number": 9, "name": "Taroudant", "day": "Day 11", "subtitle": "Little Marrakech", "desc": "Souss Valley ramparts.", "coords": GEO["taroudant"]},
            {"number": 10, "name": "Essaouira", "day": "Days 12 & 13", "subtitle": "Windy Coast Mogador", "desc": "Argan forests and ocean ramparts.", "coords": GEO["essaouira"]},
            {"number": 11, "name": "Marrakech", "day": "Days 14 & 15", "subtitle": "Red City Grand Finale", "desc": "Palaces, gardens, and Jemaa El-Fna.", "coords": GEO["marrakech"]},
            {"number": 12, "name": "Casablanca", "day": "Day 16", "subtitle": "Departure", "desc": "Return to Casablanca airport.", "coords": GEO["casablanca"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["tangier"], GEO["chefchaouen"], GEO["fes"], GEO["ifrane"], GEO["merzouga"], GEO["todra"], GEO["ouarzazate"], GEO["taroudant"], GEO["essaouira"], GEO["marrakech"], GEO["casablanca"]]
        days_num = "16 Days" if "16" in fname or "16" in full_path_lower else "15 Days"
        return f"{days_num} Grand Morocco Tour Map", "~2,650 km", days_num, "Grand Morocco Odyssey", dests, route

    # 2. 6-Day Tour from Casablanca to Marrakech
    if "6-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Atlantic Gateway & Hassan II Mosque", "desc": "Welcome meet & greet, majestic Hassan II Mosque visit, and scenic coastal road.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 1", "subtitle": "Capital City & Kasbah of the Udayas", "desc": "Hassan Tower, Mohammed V Mausoleum, and clifftop Andalusian Kasbah.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Days 1 & 2", "subtitle": "The Blue Pearl of the Rif", "desc": "Picturesque drive through the Rif Mountains into the world-famous blue medina.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Fes Medina", "day": "Days 2 & 3", "subtitle": "Spiritual Capital & UNESCO Heart", "desc": "Full guided tour: Al-Qarawiyyin, Bou Inania Medersa, and Chouara Tanneries.", "coords": GEO["fes"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Day 4", "subtitle": "Erg Chebbi Dunes & Luxury Camp", "desc": "Ziz Valley oasis, sunset camel trek into Erg Chebbi dunes, and overnight luxury glamping.", "coords": GEO["merzouga"]},
            {"number": 6, "name": "Todra & Dades Gorges", "day": "Day 5", "subtitle": "300m Rock Canyons", "desc": "Walk under vertical limestone cliffs and explore the dramatic Dades Gorge.", "coords": GEO["todra"]},
            {"number": 7, "name": "Ouarzazate & Ait Benhaddou", "day": "Day 6", "subtitle": "UNESCO Ksar & Film Studios", "desc": "Ancient fortified mudbrick village, film sets, and crossing Tizi n'Tichka pass.", "coords": GEO["ait_benhaddou"]},
            {"number": 8, "name": "Marrakech", "day": "Day 6", "subtitle": "The Red City Grand Finale", "desc": "Arrival in lively Marrakech, Jemaa El-Fna square, and airport departure transfer.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["mohammedia"], GEO["rabat"], [34.7, -5.9], GEO["chefchaouen"], [34.5, -5.4], GEO["fes"], GEO["ifrane"], GEO["azrou"], GEO["midelt"], GEO["errachidia"], GEO["merzouga"], GEO["tinghir"], GEO["todra"], GEO["boumalne"], GEO["ouarzazate"], GEO["ait_benhaddou"], GEO["tichka"], GEO["marrakech"]]
        return "6-Day Morocco Desert Tour Map", "~1,520 km", "6 Days", "Casablanca → Marrakech", dests, route

    # 3. 7-Day Casablanca Tour
    if "7-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Atlantic Gateway", "desc": "Welcome greeting, Hassan II Mosque and overland to Rabat.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat & Meknes", "day": "Day 2", "subtitle": "Imperial Capitals", "desc": "Kasbah des Oudayas, Volubilis Roman ruins, and Bab Mansour.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Fes Medina", "day": "Day 3 & 4", "subtitle": "UNESCO Spiritual Heart", "desc": "Guided exploration of medieval labyrinth medina and tanneries.", "coords": GEO["fes"]},
            {"number": 4, "name": "Merzouga Sahara", "day": "Day 4 & 5", "subtitle": "Erg Chebbi Glamping", "desc": "Atlas cedar forests, Ziz oasis, and sunset camel trek into dunes.", "coords": GEO["merzouga"]},
            {"number": 5, "name": "Todra & Dades", "day": "Day 5 & 6", "subtitle": "Grand Atlas Canyons", "desc": "Walk under 300m limestone cliffs and Valley of Roses.", "coords": GEO["todra"]},
            {"number": 6, "name": "Ait Benhaddou", "day": "Day 6", "subtitle": "UNESCO Mudbrick Kasbah", "desc": "Legendary fortress filmed in Gladiator, crossing Tizi n'Tichka.", "coords": GEO["ait_benhaddou"]},
            {"number": 7, "name": "Marrakech", "day": "Day 6 & 7", "subtitle": "Red City Grand Finale", "desc": "Jemaa El-Fna, Bahia Palace, and airport departure transfer.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["volubilis"], GEO["meknes"], GEO["fes"], GEO["ifrane"], GEO["midelt"], GEO["merzouga"], GEO["todra"], GEO["dades"], GEO["ouarzazate"], GEO["ait_benhaddou"], GEO["tichka"], GEO["marrakech"]]
        return "7-Day Morocco Highlights Tour Map", "~1,680 km", "7 Days", "Casablanca → Sahara → Marrakech", dests, route

    # 4. 8-Day Casablanca Tour
    if "8-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Atlantic Arrival", "desc": "Hassan II Mosque and scenic road to Rabat.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Imperial Capital", "desc": "Hassan Tower, Royal Palace, and Kasbah of the Udayas.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Day 3", "subtitle": "The Blue Pearl", "desc": "Enchanting blue-washed medina in the Rif Mountains.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Volubilis & Fes", "day": "Day 4 & 5", "subtitle": "Roman & Medieval Legacy", "desc": "Roman mosaics, Meknes, and spiritual Medina of Fes.", "coords": GEO["fes"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Day 5 & 6", "subtitle": "Erg Chebbi Glamping", "desc": "Ziz Valley, Middle Atlas, and luxury desert camp.", "coords": GEO["merzouga"]},
            {"number": 6, "name": "Todra & Dades", "day": "Day 6 & 7", "subtitle": "Atlas Gorges & Canyons", "desc": "Dramatic limestone canyons and Valley of Roses.", "coords": GEO["todra"]},
            {"number": 7, "name": "Ait Benhaddou", "day": "Day 7", "subtitle": "UNESCO Kasbah", "desc": "Iconic Hollywood film fortress and Ouarzazate studios.", "coords": GEO["ait_benhaddou"]},
            {"number": 8, "name": "Marrakech", "day": "Day 8", "subtitle": "Red City Grand Finale", "desc": "Majorelle, vibrant souks, and departure transfer.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["chefchaouen"], GEO["volubilis"], GEO["meknes"], GEO["fes"], GEO["ifrane"], GEO["midelt"], GEO["merzouga"], GEO["todra"], GEO["dades"], GEO["ouarzazate"], GEO["ait_benhaddou"], GEO["tichka"], GEO["marrakech"]]
        return "8-Day Morocco Imperial & Desert Map", "~1,780 km", "8 Days", "Casablanca → Chefchaouen → Marrakech", dests, route

    # 5. 9-Day Desert & Imperial Cities / Authentic
    if "9-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Arrival", "desc": "Hassan II Mosque and transfer.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Capital", "desc": "Hassan Tower and Kasbah.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Day 3", "subtitle": "Blue Medina", "desc": "Scenic alleys in the Rif.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Fes", "day": "Days 4 & 5", "subtitle": "UNESCO City", "desc": "Full guided tour.", "coords": GEO["fes"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Day 6", "subtitle": "Golden Dunes", "desc": "Camel trek and desert camp.", "coords": GEO["merzouga"]},
            {"number": 6, "name": "Todra & Dades", "day": "Day 7", "subtitle": "Canyons", "desc": "300m rock walls.", "coords": GEO["todra"]},
            {"number": 7, "name": "Ouarzazate", "day": "Day 8", "subtitle": "Ait Benhaddou", "desc": "Ancient earthen fortress.", "coords": GEO["ait_benhaddou"]},
            {"number": 8, "name": "Marrakech", "day": "Day 9", "subtitle": "Red City Finale", "desc": "Majorelle and Jemaa El-Fna.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["chefchaouen"], GEO["fes"], GEO["ifrane"], GEO["merzouga"], GEO["todra"], GEO["ouarzazate"], GEO["ait_benhaddou"], GEO["marrakech"]]
        return "9-Day Morocco Tour Map", "~1,650 km", "9 Days", "Casablanca → Desert → Marrakech", dests, route

    # 6. 10-Day Imperial Cities
    if "imperial-cities" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Atlantic Metropole", "desc": "Hassan II Mosque and Corniche boulevard.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Days 1 & 2", "subtitle": "Administrative Capital", "desc": "Hassan Tower, Royal Palace, and Kasbah of the Udayas.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Days 2 & 3", "subtitle": "The Blue Pearl", "desc": "Stunning blue alleys in the Rif Mountains.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Volubilis & Meknes", "day": "Day 4", "subtitle": "Roman & Imperial Legacy", "desc": "UNESCO Roman mosaics and Bab El Mansour gate.", "coords": GEO["volubilis"]},
            {"number": 5, "name": "Fes Medina", "day": "Days 5 & 6", "subtitle": "Spiritual Heartland", "desc": "Ancient medieval medina, tanneries, and artisans.", "coords": GEO["fes"]},
            {"number": 6, "name": "Ifrane & Cedar Forest", "day": "Day 7", "subtitle": "Middle Atlas Mountains", "desc": "Alpine architecture and Barbary ape sanctuaries.", "coords": GEO["ifrane"]},
            {"number": 7, "name": "Beni Mellal", "day": "Day 7", "subtitle": "Olive & Citrus Plains", "desc": "Scenic passage through the foothills of the Atlas.", "coords": [32.3373, -6.3498]},
            {"number": 8, "name": "Marrakech", "day": "Days 8, 9 & 10", "subtitle": "Imperial Red City", "desc": "Majorelle Garden, Bahia Palace, and vibrant souks.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["chefchaouen"], GEO["volubilis"], GEO["meknes"], GEO["fes"], GEO["ifrane"], [32.8, -5.8], [32.3373, -6.3498], GEO["marrakech"]]
        return "10-Day Imperial Cities Tour Map", "~1,280 km", "10 Days", "Casablanca → Imperial Cities", dests, route

    # 7. 10-Day Couple Tour / Classic Casablanca
    if "10-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Arrival & Hassan II Mosque", "desc": "Coastal introduction to Morocco.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Imperial Capital", "desc": "Hassan Tower and Kasbah des Oudayas.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Days 2 & 3", "subtitle": "Romantic Blue City", "desc": "Charming mountain medina and panoramic viewpoints.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Fes Medina", "day": "Days 4 & 5", "subtitle": "UNESCO World Heritage", "desc": "Full exploration of the sacred imperial capital.", "coords": GEO["fes"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Days 6 & 7", "subtitle": "Erg Chebbi Romantic Glamping", "desc": "Sunset camel ride, private luxury tent, and stargazing.", "coords": GEO["merzouga"]},
            {"number": 6, "name": "Dades & Todra Gorges", "day": "Day 8", "subtitle": "Grand Moroccan Canyons", "desc": "Towering red rock walls and Valley of the Roses.", "coords": GEO["todra"]},
            {"number": 7, "name": "Ait Benhaddou", "day": "Day 9", "subtitle": "Historic Fortress Kasbah", "desc": "Famous cinematic fortress and Hollywood film sets.", "coords": GEO["ait_benhaddou"]},
            {"number": 8, "name": "Marrakech", "day": "Days 9 & 10", "subtitle": "The Red City Grand Finale", "desc": "Jemaa El-Fna, Bahia Palace, and luxury spa hammam.", "coords": GEO["marrakech"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["chefchaouen"], GEO["fes"], GEO["ifrane"], GEO["midelt"], GEO["errachidia"], GEO["merzouga"], GEO["todra"], GEO["boumalne"], GEO["ouarzazate"], GEO["ait_benhaddou"], GEO["marrakech"]]
        return "10-Day Morocco Tour Map", "~1,750 km", "10 Days", "Casablanca → Marrakech", dests, route

    # 8. 11-Day Classic Tour
    if "11-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Hassan II Mosque", "desc": "Arrival and architectural tour.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Historic Capital", "desc": "Royal heritage and sea views.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Chefchaouen", "day": "Day 3", "subtitle": "Blue City of the Rif", "desc": "Magical blue alleys.", "coords": GEO["chefchaouen"]},
            {"number": 4, "name": "Fes Medina", "day": "Days 4 & 5", "subtitle": "Spiritual Capital", "desc": "Guided walk in ancient alleys.", "coords": GEO["fes"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Days 6 & 7", "subtitle": "Erg Chebbi Dunes", "desc": "Camel trek and desert camp.", "coords": GEO["merzouga"]},
            {"number": 6, "name": "Dades Gorge", "day": "Day 8", "subtitle": "Atlas Canyons", "desc": "Canyons and Valley of Roses.", "coords": GEO["dades"]},
            {"number": 7, "name": "Marrakech", "day": "Days 9 & 10", "subtitle": "Imperial Red City", "desc": "Souks, palaces, and gardens.", "coords": GEO["marrakech"]},
            {"number": 8, "name": "Casablanca", "day": "Day 11", "subtitle": "Departure", "desc": "Return journey along the coast.", "coords": GEO["casablanca"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["chefchaouen"], GEO["fes"], GEO["ifrane"], GEO["merzouga"], GEO["todra"], GEO["ouarzazate"], GEO["marrakech"], GEO["casablanca"]]
        return "11-Day Morocco Classic Tour Map", "~1,920 km", "11 Days", "Casablanca Loop", dests, route

    # 9. 12-Day / 13-Day Tours
    if "12-day" in fname or "13-day" in fname:
        dests = [
            {"number": 1, "name": "Casablanca", "day": "Day 1", "subtitle": "Arrival", "desc": "Hassan II Mosque visit.", "coords": GEO["casablanca"]},
            {"number": 2, "name": "Rabat", "day": "Day 2", "subtitle": "Capital", "desc": "Hassan Tower and Kasbah.", "coords": GEO["rabat"]},
            {"number": 3, "name": "Tangier", "day": "Day 3", "subtitle": "Strait of Gibraltar", "desc": "Cape Spartel and Hercules Caves.", "coords": GEO["tangier"]},
            {"number": 4, "name": "Chefchaouen", "day": "Day 4", "subtitle": "Blue Mountain Town", "desc": "Rif Mountain charm.", "coords": GEO["chefchaouen"]},
            {"number": 5, "name": "Fes", "day": "Days 5 & 6", "subtitle": "Medieval Medina", "desc": "Universities and tanneries.", "coords": GEO["fes"]},
            {"number": 6, "name": "Merzouga Desert", "day": "Days 7 & 8", "subtitle": "Erg Chebbi Camp", "desc": "Camel rides and starry night.", "coords": GEO["merzouga"]},
            {"number": 7, "name": "Dades & Todra", "day": "Day 9", "subtitle": "Canyons", "desc": "Scenic gorges and kasbahs.", "coords": GEO["todra"]},
            {"number": 8, "name": "Ouarzazate", "day": "Day 10", "subtitle": "Cinema City", "desc": "Ait Benhaddou fortress.", "coords": GEO["ait_benhaddou"]},
            {"number": 9, "name": "Marrakech", "day": "Days 11 & 12", "subtitle": "The Red City", "desc": "Grand imperial exploration.", "coords": GEO["marrakech"]},
            {"number": 10, "name": "Casablanca", "day": "Day 13", "subtitle": "Departure", "desc": "Return transfer and farewell.", "coords": GEO["casablanca"]}
        ]
        route = [GEO["casablanca"], GEO["rabat"], GEO["asilah"], GEO["tangier"], GEO["chefchaouen"], GEO["fes"], GEO["ifrane"], GEO["merzouga"], GEO["todra"], GEO["ouarzazate"], GEO["marrakech"], GEO["casablanca"]]
        days_num = "13 Days" if "13-day" in fname else "12 Days"
        return f"{days_num} Morocco Tour Map", "~2,250 km", days_num, "Grand Morocco Loop", dests, route

    # 10. 3-Day / 4-Day / 5-Day Desert Tours from Marrakech
    if "desert-tour-from-marrakech" in fname or "marrakech-desert-tour" in fname or "tour-from-marrakech-to-merzouga" in fname or "desert-tour" in fname:
        is_to_fes = "to-fes" in fname
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Day 1", "subtitle": "Departure over High Atlas", "desc": "Depart Marrakech crossing Tizi n'Tichka pass.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Ait Benhaddou", "day": "Day 1", "subtitle": "UNESCO World Heritage", "desc": "Explore the famous historic fortified kasbah.", "coords": GEO["ait_benhaddou"]},
            {"number": 3, "name": "Dades Valley", "day": "Day 1", "subtitle": "Valley of Thousand Kasbahs", "desc": "Scenic gorges and rose fields overnight.", "coords": GEO["dades"]},
            {"number": 4, "name": "Todra Gorges", "day": "Day 2", "subtitle": "Limestone Rock Canyon", "desc": "Walk along the 300m vertical rock cliffs.", "coords": GEO["todra"]},
            {"number": 5, "name": "Merzouga Sahara", "day": "Day 2", "subtitle": "Erg Chebbi Luxury Camp", "desc": "Sunset camel caravan trek and Berber drumming under the stars.", "coords": GEO["merzouga"]},
        ]
        if is_to_fes:
            dests.append({"number": 6, "name": "Midelt & Cedar Forest", "day": "Day 3", "subtitle": "Middle Atlas Mountains", "desc": "Ziz Valley oasis, cedar forest with Barbary apes, and Ifrane.", "coords": GEO["midelt"]})
            dests.append({"number": 7, "name": "Fes", "day": "Day 3", "subtitle": "Spiritual Capital Finale", "desc": "Arrival in ancient medieval Fes medina.", "coords": GEO["fes"]})
            route = [GEO["marrakech"], GEO["tichka"], GEO["ait_benhaddou"], GEO["ouarzazate"], GEO["boumalne"], GEO["dades"], GEO["todra"], GEO["erfoud"], GEO["merzouga"], GEO["errachidia"], GEO["midelt"], GEO["azrou"], GEO["ifrane"], GEO["fes"]]
            return "3-Day Marrakech to Fes Desert Map", "~1,050 km", "3 Days", "Marrakech → Merzouga → Fes", dests, route
        else:
            dests.append({"number": 6, "name": "Ouarzazate", "day": "Day 3/4", "subtitle": "Atlas Film Studios", "desc": "Film studios and Kasbah Taourirt.", "coords": GEO["ouarzazate"]})
            dests.append({"number": 7, "name": "Marrakech", "day": "Finale", "subtitle": "Return Transfer", "desc": "Crossing back through High Atlas to Marrakech.", "coords": GEO["marrakech"]})
            route = [GEO["marrakech"], GEO["tichka"], GEO["ait_benhaddou"], GEO["boumalne"], GEO["todra"], GEO["merzouga"], GEO["rissani"], GEO["ouarzazate"], GEO["tichka"], GEO["marrakech"]]
            days_str = "4 Days" if "4-day" in fname else ("5 Days" if "5-day" in fname else "3 Days")
            return f"{days_str} Marrakech Desert Tour Map", "~1,180 km", days_str, "Marrakech ↔ Merzouga Desert", dests, route

    # 11. Day Trips from Marrakech
    if "essaouira" in fname:
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Morning", "subtitle": "Departure", "desc": "Pick-up from your riad or hotel.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Argan Forest", "day": "Mid-way", "subtitle": "Argan Oil Cooperative", "desc": "Witness goats climbing argan trees and women producing pure argan oil.", "coords": [31.52, -9.2]},
            {"number": 3, "name": "Essaouira Port", "day": "Afternoon", "subtitle": "Historic Skala & Fishing Port", "desc": "Blue wooden boats, fresh seafood stalls, and sea bastions.", "coords": [31.51, -9.775]},
            {"number": 4, "name": "Essaouira Medina", "day": "Afternoon", "subtitle": "UNESCO Walled Medina", "desc": "Artisan woodcarvers, white-washed lanes, and Atlantic breeze.", "coords": GEO["essaouira"]}
        ]
        route = [GEO["marrakech"], GEO["chichaoua"], [31.52, -9.2], GEO["essaouira"]]
        return "Essaouira Day Trip Map", "~380 km Round-trip", "1 Day", "Marrakech ↔ Essaouira", dests, route

    if "ouzoud" in fname:
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Morning", "subtitle": "Departure", "desc": "Scenic morning drive through Tadla plains.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Middle Atlas Foothills", "day": "Mid-way", "subtitle": "Berber Villages", "desc": "Rolling olive groves and traditional mudbrick villages.", "coords": [31.85, -7.2]},
            {"number": 3, "name": "Ouzoud Waterfalls", "day": "Afternoon", "subtitle": "110m Cascades & Barbary Apes", "desc": "Hiking down to the natural pools, boat ride under the falls, and wild monkeys.", "coords": GEO["ouzoud"]}
        ]
        route = [GEO["marrakech"], [31.85, -7.2], [32.0, -6.8], GEO["ouzoud"]]
        return "Ouzoud Waterfalls Day Trip Map", "~310 km Round-trip", "1 Day", "Marrakech ↔ Ouzoud Waterfalls", dests, route

    if "ouarzazate" in fname or "ait-ben-haddou" in fname:
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Morning", "subtitle": "Departure", "desc": "Pick up and journey towards High Atlas.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Tizi n'Tichka", "day": "Mid-way", "subtitle": "High Atlas Pass (2,260m)", "desc": "Panoramic viewpoints overlooking winding mountain roads.", "coords": GEO["tichka"]},
            {"number": 3, "name": "Kasbah Ait Benhaddou", "day": "Lunch", "subtitle": "UNESCO World Heritage Fortress", "desc": "Climb through the ancient earthen ksar filmed in Gladiator.", "coords": GEO["ait_benhaddou"]},
            {"number": 4, "name": "Ouarzazate Film Studios", "day": "Afternoon", "subtitle": "Hollywood of Africa", "desc": "Atlas Film Studios and Kasbah Taourirt.", "coords": GEO["ouarzazate"]}
        ]
        route = [GEO["marrakech"], [31.47, -7.52], GEO["tichka"], GEO["ait_benhaddou"], GEO["ouarzazate"]]
        return "Ait Benhaddou & Ouarzazate Day Trip Map", "~400 km Round-trip", "1 Day", "Marrakech ↔ Ait Benhaddou", dests, route

    if "ourika" in fname:
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Morning", "subtitle": "Departure", "desc": "Drive along the lush Ourika river valley.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Berber Village", "day": "Mid-way", "subtitle": "Traditional Family Home", "desc": "Tea ceremony and local mountain lifestyle.", "coords": [31.35, -7.75]},
            {"number": 3, "name": "Setti Fatma Waterfalls", "day": "Afternoon", "subtitle": "7 Cascades Hike", "desc": "Guided hike along mountain boulders and riverfront lunch.", "coords": GEO["ourika"]}
        ]
        route = [GEO["marrakech"], [31.45, -7.85], [31.35, -7.75], GEO["ourika"]]
        return "Ourika Valley Day Trip Map", "~130 km Round-trip", "1 Day", "Marrakech ↔ Ourika Valley", dests, route

    if "agafay" in fname:
        dests = [
            {"number": 1, "name": "Marrakech", "day": "Afternoon", "subtitle": "Departure", "desc": "Pick up from hotel or meeting point.", "coords": GEO["marrakech"]},
            {"number": 2, "name": "Agafay Stone Desert", "day": "Sunset", "subtitle": "Camel Ride & White Dunes", "desc": "Camel trek in traditional nomadic attire as sun sets over Atlas peaks.", "coords": GEO["agafay"]},
            {"number": 3, "name": "Luxury Desert Camp", "day": "Evening", "subtitle": "Dinner Under the Stars", "desc": "Candlelit Moroccan banquet, fire show, and Gnawa music around campfire.", "coords": [31.43, -8.18]}
        ]
        route = [GEO["marrakech"], [31.55, -8.1], GEO["agafay"], [31.43, -8.18]]
        return "Agafay Desert Sunset & Dinner Map", "~80 km Round-trip", "Half Day", "Marrakech ↔ Agafay Desert", dests, route

    if "guided-tour" in fname:
        dests = [
            {"number": 1, "name": "Koutoubia Mosque", "day": "Morning", "subtitle": "12th Century Minaret", "desc": "Iconic landmark and Andalusian gardens.", "coords": [31.6247, -7.9936]},
            {"number": 2, "name": "Bahia Palace", "day": "Morning", "subtitle": "Grand Vizier Residence", "desc": "Intricate zellij tilework, painted cedarwood ceilings.", "coords": [31.6217, -7.9830]},
            {"number": 3, "name": "Saadian Tombs", "day": "Noon", "subtitle": "Mausoleum of the Dynasty", "desc": "Chamber of the Twelve Pillars in Carrara marble.", "coords": [31.6173, -7.9889]},
            {"number": 4, "name": "Ben Youssef Medersa", "day": "Afternoon", "subtitle": "Islamic College", "desc": "Courtyard with stucco and cedar calligraphy.", "coords": [31.6322, -7.9866]},
            {"number": 5, "name": "Jemaa El-Fna", "day": "Evening", "subtitle": "UNESCO Square", "desc": "Storytellers, musicians, and vibrant night food stalls.", "coords": [31.6258, -7.9891]},
            {"number": 6, "name": "Majorelle Garden", "day": "Late Afternoon", "subtitle": "Yves Saint Laurent Botanical Oasis", "desc": "Cobalt blue villa and exotic desert cacti.", "coords": [31.6416, -8.0033]}
        ]
        route = [[31.6247, -7.9936], [31.6217, -7.9830], [31.6173, -7.9889], [31.6258, -7.9891], [31.6322, -7.9866], [31.6416, -8.0033]]
        return "Marrakech Guided City Tour Map", "Historic Circuit", "Full Day", "Marrakech Medina & Landmarks", dests, route

    # Default / Activity fallback (Palmeraie / Marrakech surroundings)
    dests = [
        {"number": 1, "name": "Marrakech", "day": "Start", "subtitle": "Hotel Pick-up", "desc": "Private transfer from your Marrakech accommodation.", "coords": GEO["marrakech"]},
        {"number": 2, "name": "Marrakech Palmeraie Oasis", "day": "Activity", "subtitle": "Palm Grove & Trails", "desc": "Scenic palm oasis trails with Atlas Mountain backdrop.", "coords": [31.6660, -7.9750]},
        {"number": 3, "name": "Berber Oasis Camp", "day": "Tea Break", "subtitle": "Hospitality & Mint Tea", "desc": "Relax with fresh Moroccan mint tea and traditional pastries.", "coords": [31.6800, -7.9600]}
    ]
    route = [GEO["marrakech"], [31.645, -7.98], [31.6660, -7.9750], [31.6800, -7.9600]]
    act_title = fname.replace(".html", "").replace("-", " ").title()
    return f"{act_title} Map", "Local Activity", "Activity", "Marrakech & Oasis", dests, route
