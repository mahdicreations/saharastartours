import os
import glob
import re

ROOT_DIR = r"c:\Users\el mahdi\Desktop\mahdicreations\saharastartours"
TOURS_DIR = os.path.join(ROOT_DIR, "tours")

tour_files = sorted(glob.glob(os.path.join(TOURS_DIR, "*.html")))
sub_16 = os.path.join(TOURS_DIR, "16-day-casablanca", "index.html")
if os.path.exists(sub_16):
    tour_files.append(sub_16)

css_travel_style = """
/* --- TRAVEL STYLE SELECTOR --- */
.travel-style-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 4px 0;
  width: 100%;
}
.travel-style-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 0.3px;
}
.travel-style-label i {
  color: var(--terracotta);
  font-size: 0.95rem;
}
.travel-style-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
}
.travel-style-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1.5px solid rgba(232, 195, 158, 0.22);
  border-radius: 14px;
  padding: 13px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-align: center;
}
.travel-style-card:hover {
  border-color: rgba(217, 107, 67, 0.5);
  background: rgba(217, 107, 67, 0.05);
  transform: translateY(-2px);
}
.travel-style-card .ts-icon {
  font-size: 1.4rem;
  color: #8b96a5;
  transition: color 0.25s ease, transform 0.25s ease;
}
.travel-style-card .ts-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.25s ease;
}
.travel-style-card.active {
  border: 2px solid var(--terracotta) !important;
  background: rgba(217, 107, 67, 0.12) !important;
  box-shadow: 0 4px 15px rgba(217, 107, 67, 0.25);
  transform: translateY(-1px);
}
.travel-style-card.active .ts-icon {
  color: var(--terracotta) !important;
  transform: scale(1.08);
}
.travel-style-card.active .ts-name {
  color: var(--terracotta) !important;
  font-weight: 700;
}
"""

html_travel_style = """
            <!-- Travel Style Selector -->
            <div class="travel-style-group">
              <label class="travel-style-label">
                <i class="fa-solid fa-star"></i> Travel Style
              </label>
              <div class="travel-style-grid">
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Standard' ? 'active' : ''" 
                     @click="bookingData.style = 'Standard'">
                  <i class="fa-solid fa-wallet ts-icon"></i>
                  <span class="ts-name">Standard</span>
                </div>
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Comfort' ? 'active' : ''" 
                     @click="bookingData.style = 'Comfort'">
                  <i class="fa-solid fa-hotel ts-icon"></i>
                  <span class="ts-name">Comfort</span>
                </div>
                <div class="travel-style-card" 
                     :class="bookingData.style === 'Luxury' ? 'active' : ''" 
                     @click="bookingData.style = 'Luxury'">
                  <i class="fa-solid fa-crown ts-icon"></i>
                  <span class="ts-name">Luxury</span>
                </div>
              </div>
              <input type="hidden" name="travel_style" :value="bookingData.style" />
            </div>
"""

print(f"Injecting Travel Style HTML & CSS into {len(tour_files)} tour files...\n")

success_count = 0
for fpath in tour_files:
    fname = os.path.basename(fpath)
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    is_crlf = "\r\n" in html
    html = html.replace("\r\n", "\n")

    # 1. Update bookingData in Alpine x-data if style not yet present
    if "style: 'Standard'" not in html:
        html = re.sub(
            r"(date:\s*'',)",
            r"\1\n           style: 'Standard',",
            html,
            count=1
        )

    # 2. Inject CSS if not already present
    if "/* --- TRAVEL STYLE SELECTOR --- */" not in html and "</style>" in html:
        html = html.replace("</style>", css_travel_style.strip() + "\n  </style>")

    # 3. Inject HTML selector right before the Special Wishes textarea group
    if '<div class="travel-style-group">' not in html:
        pattern = re.compile(r'(<div class="form-group floated">\s*<textarea[^>]*id="contact-message")', re.DOTALL)
        if pattern.search(html):
            html = pattern.sub(html_travel_style.strip() + "\n\n            " + r"\1", html, count=1)
            success_count += 1
            print(f"  [INSERTED HTML] {fname}")
        else:
            print(f"  [ERROR: PATTERN NOT FOUND] {fname}")
    else:
        print(f"  [ALREADY HAS HTML] {fname}")
        success_count += 1

    if is_crlf:
        html = html.replace("\n", "\r\n")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(html)

print(f"\nCOMPLETED: Successfully injected Travel Style HTML into {success_count} / {len(tour_files)} files!")
