import os
import re

base_dir = "sahara-star-tours"

# --- Content Generation Dictionaries ---

standard_included_activities = """- Air-conditioned hotel pickup and drop-off
- Professional, English-speaking driver/guide
- Safety equipment and briefing (if applicable)
- Traditional Moroccan mint tea break
- Local taxes and travel insurance coverage"""

standard_excluded_activities = """- Personal expenses and souvenirs
- Gratuities for your guide and driver (optional)
- Extra meals and beverages not explicitly mentioned
- Entrance fees to monuments (if any)"""

specific_inclusions = {
    "camel-riding": """- Air-conditioned round-trip hotel transfers
- 1 to 2 hours camel ride through the Palm Grove
- Traditional Touareg scarf and clothing for photos
- Moroccan mint tea break at a local Berber house""",
    "fantasia-chez-ali-marrakech": """- Round-trip transportation from your Marrakech hotel
- Lavish traditional Moroccan dinner (Mechoui, Couscous, Pastilla)
- Spectacular Fantasia show with horseback acrobatics
- Live traditional music and belly dancing performances""",
    "horse-riding-in-morocco": """- Hotel pickup and drop-off in an AC vehicle
- High-quality saddlery and safety helmets
- 2 hours guided horseback riding experience
- Professional equestrian guide""",
    "hot-air-balloon-in-marrakech": """- Early morning 4x4 transfers from your hotel
- 45 to 60-minute hot air balloon flight over the Atlas foothills
- Authentic Berber breakfast in a traditional tent
- Official flight certificate signed by the pilot""",
    "quad-biking-in-marrakech": """- Hotel pickup and drop-off
- High-quality quad bike (ATV) and safety gear (helmet, goggles, gloves)
- 2-hour guided quad biking adventure through palm groves and desert trails
- Mint tea break in a traditional Berber village""",
    "raid-buggy-in-marrakech": """- Round-trip hotel transfers
- Premium 4WD Buggy and full safety equipment
- Professional off-road guide and briefing
- Refreshments and mint tea with local villagers""",
    "agafay-desert-sunset-camel-ride-dinner-under-the-stars": """- Private or small-group transfers from Marrakech
- Sunset camel ride across the Agafay Desert dunes
- Three-course traditional Moroccan dinner served in a luxury tent
- Live campfire music and fire show""",
    "one-day-guided-tour-of-marrakech-city": """- Certified local Marrakech city guide
- Visit to Bahia Palace, Saadian Tombs, and Koutoubia Mosque
- Guided walking tour through the Medina and vibrant souks
- Time for shopping and photography in Jemaa el-Fnaa square""",
    "one-day-trip-from-marrakech-to-essaouira-mogador": """- Comfortable, air-conditioned transportation
- Visit to an Argan oil women's cooperative
- Free time to explore the Essaouira Medina and Ramparts
- Stops for panoramic photos of the Atlantic coast""",
    "one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-": """- Scenic drive across the High Atlas Mountains via Tizi n'Tichka pass
- Guided visit to the UNESCO World Heritage Kasbah Ait Ben Haddou
- Stop at Ouarzazate (Hollywood of Africa) and Taourirt Kasbah
- English-speaking driver and guide""",
    "one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-": """- Transportation in an air-conditioned vehicle
- Scenic drive through Berber villages and olive groves
- Guided hike down to the spectacular Ouzoud Waterfalls
- Opportunity to see wild Barbary macaque monkeys""",
    "ourika-valley-nature-wildlife-tour": """- Pick-up and drop-off at your Marrakech accommodation
- Drive through the lush Ourika Valley along the river
- Guided hike to the seven waterfalls of Setti Fatma
- Visit to a traditional Berber home and Argan cooperative"""
}

# Extensive dynamic templates for Desert & Imperial Tours
def generate_seo_about(title):
    return f"""Embark on the ultimate {title}, a meticulously crafted journey designed to showcase the very best of Morocco. As a leading Moroccan travel agency, Sahara Star Tours invites you to experience an unforgettable expedition blending rich cultural heritage, breathtaking landscapes, and premium comfort. From the bustling ancient medinas and vibrant souks of our imperial cities to the serene majesty of the Sahara Desert, this itinerary captures the soul of Morocco. 
    
Whether you're traversing the dramatic peaks of the High Atlas Mountains, riding camels into the golden dunes of Merzouga at sunset, or resting in luxury desert camps and authentic riads, every moment is optimized for authentic immersion. Perfect for couples, families, and adventurous travelers, this tour offers a seamless, stress-free vacation with professional local guides, private air-conditioned transportation, and exclusive access to hidden gems. Book your {title} today and discover the magic of Morocco."""

def generate_seo_highlights(duration_days=0):
    return """- Explore the UNESCO World Heritage ancient Medinas and vibrant souks
- Traverse the majestic High Atlas Mountains via the scenic Tizi n'Tichka pass
- Visit the legendary Kasbah Ait Ben Haddou, famous for Hollywood blockbusters
- Experience an authentic sunset camel trek across the golden Sahara dunes
- Spend a magical night glamping under the stars in a luxury desert camp
- Discover breathtaking oases, dramatic gorges (Todra & Dades), and lush valleys
- Indulge in authentic Moroccan cuisine and traditional Berber hospitality"""

standard_included_tour = """- Pick-up and drop-off at your airport, hotel, or riad
- Private transportation in a modern, air-conditioned 4x4 or minivan
- English/Spanish speaking professional driver and local guides
- Overnight accommodations in highly-rated authentic Riads and Hotels
- 1 Night in a Luxury Desert Camp in the Sahara (private tent with ensuite bathroom)
- Sunset and sunrise camel trekking in the desert (one camel per person)
- Daily breakfasts and specified dinners (refer to itinerary)
- Local taxes and fuel surcharges"""

standard_excluded_tour = """- International flight tickets
- Travel and medical insurance
- Lunches and mid-day snacks
- Beverages and drinks during meals
- Entrance fees to historical monuments and museums
- Gratuities and tips for guides/drivers
- Personal expenses and souvenirs"""


def replace_section(content, section_name, new_text):
    """Replaces or adds a specific section in the tour.txt content."""
    sections_order = ['Title:', 'Category (menu):', 'Category (tour page):', 'Duration:', 'From:', 'Source URL:', 'About this tour:', 'Highlights:', 'Included:', 'Excluded:', 'Itinerary:', 'Images:']
    
    # Check if section exists
    start_idx = content.find(section_name)
    if start_idx != -1:
        # Find the end of this section (the start of the next known section)
        end_idx = len(content)
        search_start = start_idx + len(section_name)
        for s in sections_order:
            idx = content.find(s, search_start)
            if idx != -1 and idx < end_idx:
                end_idx = idx
        
        # Replace
        return content[:start_idx] + f"{section_name}\n{new_text}\n\n" + content[end_idx:]
    else:
        # Section doesn't exist, we must insert it before Itinerary
        itin_idx = content.find('Itinerary:')
        if itin_idx != -1:
            return content[:itin_idx] + f"{section_name}\n{new_text}\n\n" + content[itin_idx:]
        else:
            return content + f"\n\n{section_name}\n{new_text}\n"

# Process all files
fixed_count = 0
for root, dirs, files in os.walk(base_dir):
    if 'tour.txt' in files:
        txt_path = os.path.join(root, 'tour.txt')
        slug = os.path.basename(root)
        cat = os.path.basename(os.path.dirname(root))
        
        with open(txt_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        title_match = re.search(r'Title:\s*(.+)', content)
        title = title_match.group(1).strip() if title_match else slug.replace('-', ' ').title()
        
        original_content = content
        
        # Determine fixes based on category
        if cat in ['activities', 'day-trips']:
            inc = specific_inclusions.get(slug, standard_included_activities)
            exc = standard_excluded_activities
            
            # Day trips usually just need Included and Excluded replaced if they say "Not provided" or are very short
            included_current = re.search(r'Included:([\s\S]*?)(Excluded:|Itinerary:|Images:)', content)
            excluded_current = re.search(r'Excluded:([\s\S]*?)(Itinerary:|Images:)', content)
            
            if not included_current or "Not provided" in included_current.group(1) or len(included_current.group(1).strip()) < 30:
                content = replace_section(content, 'Included:', inc)
            if not excluded_current or "Not provided" in excluded_current.group(1) or len(excluded_current.group(1).strip()) < 30:
                content = replace_section(content, 'Excluded:', exc)
                
        else:
            # Desert Tours and Imperial Cities
            about_current = re.search(r'About this tour:([\s\S]*?)(Highlights:|Included:|Excluded:|Itinerary:|Images:)', content)
            hl_current = re.search(r'Highlights:([\s\S]*?)(Included:|Excluded:|Itinerary:|Images:)', content)
            inc_current = re.search(r'Included:([\s\S]*?)(Excluded:|Itinerary:|Images:)', content)
            exc_current = re.search(r'Excluded:([\s\S]*?)(Itinerary:|Images:)', content)
            
            if not about_current or len(about_current.group(1).strip()) < 150:
                content = replace_section(content, 'About this tour:', generate_seo_about(title))
                
            if not hl_current or len(hl_current.group(1).strip()) < 50 or "Not provided" in hl_current.group(1):
                content = replace_section(content, 'Highlights:', generate_seo_highlights())
                
            if not inc_current or len(inc_current.group(1).strip()) < 30 or "Not provided" in inc_current.group(1):
                content = replace_section(content, 'Included:', standard_included_tour)
                
            if not exc_current or len(exc_current.group(1).strip()) < 30 or "Not provided" in exc_current.group(1):
                content = replace_section(content, 'Excluded:', standard_excluded_tour)
                
        if content != original_content:
            with open(txt_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed SEO & Content for: {slug}")
            fixed_count += 1

print(f"\nSuccessfully updated {fixed_count} tours.")
