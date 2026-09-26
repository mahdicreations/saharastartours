import glob, os, re

with open('tours/10-days-morocco-couple-tour-packages.html', 'r', encoding='utf-8') as f:
    html = f.read()

idx = html.find('<div class="inclusions-card')
print("Found HTML inclusions-card at index:", idx)
if idx != -1:
    print("--- CONTENT AROUND INCLUSIONS CARD ---")
    print(html[idx:idx+1500])
    
    # Also find what follows it
    # find closing div of inclusions-card
    end_idx = html.find('</div>\n\n      <!-- Right Column', idx)
    if end_idx == -1:
        end_idx = html.find('<!-- Right Column', idx)
    if end_idx == -1:
        end_idx = html.find('class="tour-sidebar"', idx)
    print("--- AFTER INCLUSIONS CARD BEFORE SIDEBAR ---")
    print(html[end_idx-300:end_idx+200])
