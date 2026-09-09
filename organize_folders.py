import os
import shutil

base_dir = "sahara-star-tours"

# Mapping of old_name -> new_name
rename_map = {
    # Desert Tours
    "desert-tours/10-days-casablanca-tour-morocco-couple-tour-packages": "desert-tours/10-days-morocco-couple-tour-packages",
    "desert-tours/10-days-morocco-imperial-cities-tour-from-casablanca": "desert-tours/morocco-imperial-cities-tour-from-casablanca",
    "desert-tours/5-days-tour-from-marrakech-to-merzouga-desert": "desert-tours/5-days-tour-from-marrakech-to-merzouga",
    "desert-tours/best-12-days-morocco-tour-from-casablanca": "desert-tours/12-days-morocco-tour",
    "desert-tours/best-7-day-morocco-tour-from-casablanca-to-marrakech": "desert-tours/7-day-morocco-tour-from-casablanca",
    "desert-tours/grand-itinerary-12-days-morocco-tour-from-casablanca": "desert-tours/12-days-morocco-tour-from-casablanca",
    "desert-tours/ideal-4-days-marrakech-desert-tour-to-merzouga-morocco-trip": "desert-tours/4-days-marrakech-desert-tour",
    "desert-tours/ideal-morocco-8-days-itinerary-tour-from-casablanca": "desert-tours/8-days-itinerary-tour-from-casablanca",
    "desert-tours/morocco-itinerary-6-days-desert-tour-from-casablanca-to-marrakech": "desert-tours/itinerary-6-days-tour-from-casablanca",

    # Imperial Cities
    "imperial-cities/11-days-morocco-classic-tour-private-tour-package": "imperial-cities/11-days-morocco-classic-tour",
    "imperial-cities/the-best-morocco-itinerary-13-days-casablanca-tour": "imperial-cities/itinerary-13-days-casablanca-tour",

    # Day Trips
    "day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-kasbah": "day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-",
    "day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-villages": "day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-"
}

for old, new in rename_map.items():
    old_path = os.path.join(base_dir, old)
    new_path = os.path.join(base_dir, new)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old} to {new}")

# Delete generated tours (except 16-day-casablanca.html which is our master)
tours_dir = "tours"
for f in os.listdir(tours_dir):
    if f.endswith(".html") and f != "16-day-casablanca.html":
        os.remove(os.path.join(tours_dir, f))
print("Deleted old generated tours.")
