import pymupdf # PyMuPDF
import os

SAMPLES = [
    ("marrakech", "3-day-morocco-desert-tour-from-marrakech"),
    ("casablanca", "6-days-desert-tour-from-casablanca"),
    ("fes", "4-day-morocco-desert-tour-from-fes-to-marrakech"),
    ("tangier", "7-days-morocco-tour-itinerary-from-tangier-one-week"),
    ("ouarzazate", "morocco-3-day-desert-tour-ouarzazate-marrakech"),
    ("imperial", "10-days-imperial-cities-tour"),
    ("daytrip", "ourika-valley-nature-tour"),
    ("activity", "quad-biking-marrakech"),
]

PDF_DIR = "public/pdfs/tours"
OUT_DIR = "scratch/pdf_previews"
os.makedirs(OUT_DIR, exist_ok=True)

print("Rendering representative PDF pages using PyMuPDF...")

for category, slug in SAMPLES:
    pdf_path = os.path.join(PDF_DIR, f"{slug}.pdf")
    if not os.path.exists(pdf_path):
        print(f"ERROR: {pdf_path} not found!")
        continue
    
    doc = pymupdf.open(pdf_path)
    page_count = len(doc)
    print(f"\n[{category.upper()}] {slug}: {page_count} pages")
    
    # Render Page 1 (Cover) and Page 2 (Itinerary/Content)
    for p_num in range(min(page_count, 2)):
        page = doc[p_num]
        pix = page.get_pixmap(dpi=150)
        out_name = f"{OUT_DIR}/{category}_page_{p_num+1}.png"
        pix.save(out_name)
        print(f"  -> Saved {out_name} ({pix.width}x{pix.height})")

print("\nAll representative PDF samples rendered successfully!")
