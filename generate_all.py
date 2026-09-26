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
    
    source_match = re.search(r'Source URL:\s*(.+)', content)
    if source_match: data['source_url'] = source_match.group(1).strip()

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

    itinerary_raw = get_section('Itinerary:', ['Images:'])
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
        if itinerary_raw:
            data['itinerary'].append({
                'day': 'Itinerary',
                'title': data['title'],
                'desc': itinerary_raw
            })

    return data

# Read tours/16-day-casablanca.html to extract head, header, footer
with open('tours/16-day-casablanca.html', 'r', encoding='utf-8') as f:
    master_html = f.read()

head_match = re.search(r'(<head>.*?</head>)', master_html, re.DOTALL)
header_match = re.search(r'(<header id="main-header".*?</header>)', master_html, re.DOTALL)
footer_match = re.search(r'(<footer>.*?</footer>)', master_html, re.DOTALL)

head_base = head_match.group(1)
header_base = header_match.group(1)
footer_base = footer_match.group(1)

def format_text(text):
    # Parse bold **text** -> <strong>text</strong>
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    # Parse newlines -> <br><br>
    text = text.replace('\n', '<br><br>')
    return text

def generate_tour_html(tour_data, category, slug, rel_prefix='../'):
    head = head_base
    head = re.sub(r'<title>.*?</title>', f'<title>{tour_data["title"]} | Sahara Star Tours</title>', head)
    
    clean_desc = tour_data["about"].replace('"', "'").replace('\n', ' ')[:150]
    head = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{tour_data["title"]} - {clean_desc}..." />', head)
    
    h = header_base
    f_html = footer_base

    timeline_items_html = ""
    for item in tour_data['itinerary']:
        desc_formatted = format_text(item['desc'])
        timeline_items_html += f'''
              <div class="timeline-item">
                <div class="timeline-day-tag">{item['day']}</div>
                <h4>{item['title']}</h4>
                <p>{desc_formatted}</p>
              </div>'''

    inc_items_html = "\n".join([f'<li><i class="fa-solid fa-circle-check"></i> {item}</li>' for item in tour_data['included']])
    if not inc_items_html: inc_items_html = "<li><i class='fa-solid fa-circle-check'></i> All basic amenities included</li>"
    
    exc_items_html = "\n".join([f'<li><i class="fa-solid fa-circle-xmark"></i> {item}</li>' for item in tour_data['excluded']])
    if not exc_items_html: exc_items_html = "<li><i class='fa-solid fa-circle-xmark'></i> Personal expenses</li>"

    gallery_html = ""
    alpine_images = []
    
    base_img_path = f"{rel_prefix}sahara-star-tours/{category}/{slug}/images/"
    if not tour_data['images']:
        tour_data['images'] = ["thumbnail.jpg"]
    
    for idx, img in enumerate(tour_data['images']):
        img_src = f"{base_img_path}{img}"
        cap = tour_data['title'].replace("'", "\\'")
        gallery_html += f'''
              <div class="gallery-item" @click="openLightbox({idx})">
                <img src="{img_src}" alt="{cap}" loading="lazy" onerror="this.src='{rel_prefix}assets/hero_sahara_sunset.png'" />
                <div class="gallery-overlay">
                  <i class="fa-solid fa-maximize"></i>
                </div>
              </div>'''
        alpine_images.append(f"{{ src: '{img_src}', cap: '{cap}' }}")
        
    alpine_images_str = ",\n           ".join(alpine_images)

    hero_img = f"{base_img_path}{tour_data['images'][0]}" if tour_data['images'] else f"{rel_prefix}assets/tour_16day_casablanca.png"

    quick_meta_html = f'''<span><i class="fa-regular fa-clock"></i> <strong>{tour_data['duration']}</strong></span>'''
    if tour_data.get('from_city'):
        quick_meta_html += f'''<span><i class="fa-solid fa-location-dot"></i> From: <strong>{tour_data['from_city']}</strong></span>'''

    about_formatted = format_text(tour_data['about'])

    body_content = f"""
  <div id="tour-detail-page" 
       x-data="{{
         lightboxOpen: false,
         activeIndex: 0,
         images: [
           {alpine_images_str}
         ],
         bookingData: {{
           name: '',
           email: '',
           package: '{slug}',
           travelers: '2 Adults',
           date: '',
           message: ''
         }},
         showSuccessModal: false,
         successMsg: '',
         openLightbox(idx) {{
           this.activeIndex = idx;
           this.lightboxOpen = true;
         }},
         prevImage() {{
           this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
         }},
         nextImage() {{
           this.activeIndex = (this.activeIndex + 1) % this.images.length;
         }},
         submitBooking() {{
           this.successMsg = 'Shukran, ' + this.bookingData.name + '! Your inquiry for {tour_data["title"].replace("'", "\\'")} has been registered. Our travel designers in Marrakech will send your detailed personalized itinerary to ' + this.bookingData.email + ' within 24 hours.';
           this.showSuccessModal = true;
           document.body.style.overflow = 'hidden';
         }},
         closeModal() {{
           this.showSuccessModal = false;
           document.body.style.overflow = '';
         }}
       }}"
       @keydown.escape.window="if(lightboxOpen) lightboxOpen = false; if(showSuccessModal) closeModal();"
       @keydown.left.window="if(lightboxOpen) prevImage();"
       @keydown.right.window="if(lightboxOpen) nextImage();"
  >
    <!-- TOUR HERO SECTION -->
    <section class="tour-hero-section">
      <div class="tour-hero-bg">
        <img src="{hero_img}" alt="{tour_data['title']}" onerror="this.src='{rel_prefix}assets/hero_sahara_sunset.png'" />
      </div>
      <div class="tour-hero-gradient"></div>

      <div class="tour-hero-content">
        <span class="tour-tag">{tour_data['category_page']}</span>
        <h1>{tour_data['title']}</h1>
        <div class="tour-quick-meta">
          {quick_meta_html}
        </div>
      </div>
    </section>

    <!-- MAIN PAGE GRID CONTAINER -->
    <div class="tour-container" id="tour-detail-container">
      
      <!-- Left Column: Itinerary, Map, Gallery, Inclusions -->
      <div class="tour-main">
        
        <!-- About Section -->
        <div class="timeline-card reveal active">
          <h3>About This Tour</h3>
          <p style="margin-bottom: 20px; line-height: 1.8;">{about_formatted}</p>
          <h5>Highlights:</h5>
          <ul style="margin-top: 10px; padding-left: 20px; color: var(--text-muted); line-height: 1.8;">
            {"".join([f'<li style="margin-bottom: 8px;">{h}</li>' for h in tour_data['highlights']])}
          </ul>
        </div>
        
        <!-- Day-by-Day Timeline -->
        <div class="timeline-card reveal active">
          <h3>Program Itinerary</h3>
          <div class="timeline-steps-wrapper" id="timeline-steps">
            {timeline_items_html}
          </div>
        </div>

        <!-- Media Gallery -->
        <div class="gallery-card reveal active">
          <h3>Expedition Media Gallery</h3>
          <p>A visual glimpse of the spectacular landscapes awaiting you.</p>
          <div class="gallery-grid" id="gallery-grid">
            {gallery_html}
          </div>
        </div>

        <!-- Inclusions & Exclusions Split Card -->
        <div class="inclusions-card reveal active">
          <h3>Inclusions &amp; Trip Details</h3>

          <div class="inc-exc-split">
            <div class="modal-inc-col included">
              <h5><i class="fa-solid fa-circle-check" style="color:var(--sand-gold); margin-right:8px;"></i> What's Included</h5>
              <ul class="modal-inc-list" style="list-style:none; display:flex; flex-direction:column; gap:12px; margin-top:16px;">
                {inc_items_html}
              </ul>
            </div>

            <div class="modal-inc-col excluded">
              <h5><i class="fa-solid fa-circle-xmark" style="color:var(--terracotta); margin-right:8px;"></i> What's Excluded</h5>
              <ul class="modal-inc-list" style="list-style:none; display:flex; flex-direction:column; gap:12px; margin-top:16px;">
                {exc_items_html}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column: Sidebar Booking Form -->
      <div class="tour-sidebar">
        <div class="booking-sidebar-card reveal active" id="booking-form">
          <h3>Book This Expedition</h3>
          <p class="booking-price">Request a custom quote</p>

          <form class="contact-form" @submit.prevent="submitBooking()" style="display:flex; flex-direction:column; gap:18px;">
            <div class="form-group floated">
              <input 
                type="text" 
                name="name" 
                id="contact-name" 
                x-model="bookingData.name"
                placeholder=" " 
                required 
              />
              <label for="contact-name">Your Full Name</label>
            </div>

            <div class="form-group floated">
              <input 
                type="email" 
                name="email" 
                id="contact-email" 
                x-model="bookingData.email"
                placeholder=" " 
                required 
              />
              <label for="contact-email">Email Address</label>
            </div>

            <div class="form-group floated">
              <input 
                type="text" 
                name="travelers" 
                id="contact-travelers" 
                x-model="bookingData.travelers"
                placeholder=" " 
                required 
              />
              <label for="contact-travelers">Number of Travelers (e.g. 2 adults)</label>
            </div>

            <div class="form-group floated">
              <input 
                type="date" 
                name="date" 
                id="contact-date" 
                x-model="bookingData.date"
                required 
              />
              <label for="contact-date">Preferred Departure Date</label>
            </div>

            <div class="form-group floated">
              <textarea 
                name="message" 
                id="contact-message" 
                x-model="bookingData.message"
                placeholder=" " 
                rows="4"
              ></textarea>
              <label for="contact-message">Special Wishes (Diet, Riad category, flights...)</label>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; font-weight:600;">
              <i class="fa-solid fa-paper-plane" style="margin-right:8px;"></i> Submit Booking Request
            </button>
          </form>
        </div>
      </div>

    </div>

    <!-- Portable Lightbox Preview Modal -->
    <div class="lightbox-overlay" :class="lightboxOpen ? 'active' : ''" @click.self="lightboxOpen = false">
      <div class="lightbox-content-box" v-if="images[activeIndex]">
        <button class="lightbox-close" @click="lightboxOpen = false" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev" @click="prevImage()" aria-label="Previous Image">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <img class="lightbox-img" :src="images[activeIndex].src" :alt="images[activeIndex].cap" />
        <div class="lightbox-caption" x-text="images[activeIndex].cap"></div>
        <button class="lightbox-btn lightbox-next" @click="nextImage()" aria-label="Next Image">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Booking Confirmation Success Modal -->
    <div class="success-overlay" :class="showSuccessModal ? 'active' : ''" @click.self="closeModal()">
      <div class="success-card">
        <div class="success-icon-box">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3>Proposal Registered!</h3>
        <p x-text="successMsg"></p>
        <button class="btn btn-primary" @click="closeModal()" style="padding: 12px 30px;">
          Return to Tour Details
        </button>
      </div>
    </div>

  </div>
"""

    full_page = f"""<!DOCTYPE html>
<html lang="en">
{head}
<body>
{h}
{body_content}
{f_html}
</body>
</html>"""

    return full_page

def main():
    base_dir = "sahara-star-tours"
    tours_out_dir = "tours"
    os.makedirs(tours_out_dir, exist_ok=True)
    
    categories = [d for d in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, d))]
    
    generated_count = 0
    for cat in categories:
        cat_path = os.path.join(base_dir, cat)
        tour_slugs = [d for d in os.listdir(cat_path) if os.path.isdir(os.path.join(cat_path, d))]
        
        for slug in tour_slugs:
            tour_txt_path = os.path.join(cat_path, slug, 'tour.txt')
            if not os.path.exists(tour_txt_path):
                continue
                
            try:
                data = parse_tour_txt(tour_txt_path)
                html = generate_tour_html(data, cat, slug, rel_prefix='../')
                
                out_path = os.path.join(tours_out_dir, f"{slug}.html")
                if slug == "16-day-casablanca":
                    continue
                with open(out_path, 'w', encoding='utf-8') as f:
                    f.write(html)
                
                generated_count += 1
            except Exception as e:
                print(f"Failed to generate {slug}: {str(e)}")
                
    print(f"Total tours generated: {generated_count}")

if __name__ == "__main__":
    main()
