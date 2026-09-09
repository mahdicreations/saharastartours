import os
import re

def parse_tour_txt(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    data = {
        'title': '',
        'category_menu': '',
        'category_page': '',
        'duration': '',
        'from_city': '',
        'source_url': '',
        'about': '',
        'highlights': [],
        'included': [],
        'excluded': [],
        'itinerary': [],
        'images': []
    }

    # Extract single-line fields
    title_match = re.search(r'Title:\s*(.+)', content)
    if title_match: data['title'] = title_match.group(1).strip()

    cat_menu_match = re.search(r'Category \(menu\):\s*(.+)', content)
    if cat_menu_match: data['category_menu'] = cat_menu_match.group(1).strip()

    cat_page_match = re.search(r'Category \(tour page\):\s*(.+)', content)
    if cat_page_match: data['category_page'] = cat_page_match.group(1).strip()

    dur_match = re.search(r'Duration:\s*(.+)', content)
    if dur_match: data['duration'] = dur_match.group(1).strip()

    from_match = re.search(r'From:\s*(.+)', content)
    if from_match: data['from_city'] = from_match.group(1).strip()

    # Extract multi-line fields
    sections = ['About this tour:', 'Highlights:', 'Included:', 'Excluded:', 'Itinerary:', 'Images:']
    
    def get_section(start_name, end_names):
        start_idx = content.find(start_name)
        if start_idx == -1: return ""
        start_idx += len(start_name)
        
        end_idx = len(content)
        for end_name in end_names:
            idx = content.find(end_name, start_idx)
            if idx != -1 and idx < end_idx:
                end_idx = idx
        return content[start_idx:end_idx].strip()

    data['about'] = get_section('About this tour:', sections[1:])
    
    highlights_raw = get_section('Highlights:', sections[2:])
    data['highlights'] = [line.strip('- ').strip() for line in highlights_raw.split('\n') if line.strip()]

    included_raw = get_section('Included:', sections[3:])
    data['included'] = [line.strip('- ').strip() for line in included_raw.split('\n') if line.strip() and "Not provided" not in line]

    excluded_raw = get_section('Excluded:', sections[4:])
    data['excluded'] = [line.strip('- ').strip() for line in excluded_raw.split('\n') if line.strip() and "Not provided" not in line]

    images_raw = get_section('Images:', [])
    data['images'] = [line.strip('- ').strip() for line in images_raw.split('\n') if line.strip()]

    # Parse Itinerary
    itinerary_raw = get_section('Itinerary:', ['Images:'])
    # Splitting by "Day X -"
    # Some itineraries might not have "Day X", let's handle "Day" or generic items
    day_matches = list(re.finditer(r'(Day \d+.*?)(?=\nDay \d+|$)', itinerary_raw, re.DOTALL))
    
    if day_matches:
        for match in day_matches:
            day_block = match.group(1).strip()
            lines = day_block.split('\n')
            if lines:
                title_line = lines[0].strip()
                day_prefix = ""
                title_desc = title_line
                if " - " in title_line:
                    day_prefix, title_desc = title_line.split(" - ", 1)
                else:
                    day_prefix = title_line
                    title_desc = ""
                
                desc = "\n".join(lines[1:]).strip()
                data['itinerary'].append({
                    'day': day_prefix.strip(),
                    'title': title_desc.strip(),
                    'desc': desc
                })
    else:
        # If no "Day X" pattern, just put it as one block
        if itinerary_raw:
            data['itinerary'].append({
                'day': 'Itinerary',
                'title': data['title'],
                'desc': itinerary_raw
            })

    return data

if __name__ == "__main__":
    import json
    path = "sahara-star-tours/day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars/tour.txt"
    print(json.dumps(parse_tour_txt(path), indent=2))
