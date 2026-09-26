import os
import re
import json
from bs4 import BeautifulSoup
import sys
sys.path.insert(0, r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\scratch')
import enhanced_tour_configs

orig_root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours'
tours_dir = os.path.join(orig_root, 'tours')
public_dir = os.path.join(orig_root, 'sahara-star-astro', 'public')

# Mapping from original HTML file to clean Astro slug & category
TOUR_MAPPING = [
    # Desert Tours (14 tours)
    {
        'file': 'itinerary-6-days-tour-from-casablanca.html',
        'slug': '6-days-desert-tour-from-casablanca',
        'category': 'desert-tours',
        'folder': 'desert-tours/itinerary-6-days-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $790/person',
        'heroAsset': '/assets/tour_6day_desert.png'
    },
    {
        'file': '7-day-morocco-tour-from-casablanca.html',
        'slug': '7-day-morocco-tour-from-casablanca',
        'category': 'desert-tours',
        'folder': 'desert-tours/7-day-morocco-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $890/person',
        'heroAsset': '/assets/tour_7day_casablanca.png'
    },
    {
        'file': '8-days-itinerary-tour-from-casablanca.html',
        'slug': '8-days-itinerary-tour-from-casablanca',
        'category': 'desert-tours',
        'folder': 'desert-tours/8-days-itinerary-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $990/person',
        'heroAsset': '/assets/tour_8day_casablanca.png'
    },
    {
        'file': '9-day-authentic-morocco-tour.html',
        'slug': '9-day-authentic-morocco-tour',
        'category': 'desert-tours',
        'folder': 'desert-tours/9-day-authentic-morocco-tour',
        'startingFrom': 'Casablanca',
        'price': 'From $1,090/person',
        'heroAsset': '/assets/tour_9day_authentic.png'
    },
    {
        'file': 'morocco-itinerary-9-days-desert-imperial-cities.html',
        'slug': '9-days-desert-imperial-cities',
        'category': 'desert-tours',
        'folder': 'desert-tours/morocco-itinerary-9-days-desert-imperial-cities',
        'startingFrom': 'Casablanca',
        'price': 'From $1,150/person',
        'heroAsset': '/assets/tour_9day_imperial.png'
    },
    {
        'file': '10-days-morocco-couple-tour-packages.html',
        'slug': '10-days-morocco-couple-tour',
        'category': 'desert-tours',
        'folder': 'desert-tours/10-days-morocco-couple-tour-packages',
        'startingFrom': 'Casablanca',
        'price': 'From $1,250/person',
        'heroAsset': '/assets/tour_10day_casablanca.png'
    },
    {
        'file': 'morocco-imperial-cities-tour-from-casablanca.html',
        'slug': '10-days-imperial-cities-tour',
        'category': 'desert-tours',
        'folder': 'desert-tours/morocco-imperial-cities-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $1,290/person',
        'heroAsset': '/assets/tour_10day_imperial.png'
    },
    {
        'file': '12-days-morocco-tour-from-casablanca.html',
        'slug': '12-days-tour-from-casablanca',
        'category': 'desert-tours',
        'folder': 'desert-tours/12-days-morocco-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $1,450/person',
        'heroAsset': '/assets/tour_12day_casablanca.png'
    },
    {
        'file': '12-days-morocco-tour.html',
        'slug': '12-days-morocco-tour',
        'category': 'desert-tours',
        'folder': 'desert-tours/12-days-morocco-tour',
        'startingFrom': 'Casablanca',
        'price': 'From $1,490/person',
        'heroAsset': '/assets/tour_12day_grand.png'
    },
    {
        'file': 'private-12-days-trip-to-desert-marrakech.html',
        'slug': 'private-12-days-desert-marrakech',
        'category': 'desert-tours',
        'folder': 'desert-tours/private-12-days-trip-to-desert-marrakech',
        'startingFrom': 'Casablanca',
        'price': 'From $1,550/person',
        'heroAsset': '/assets/tour_12day_desert.png'
    },
    {
        'file': '16-days-morocco-tour-from-casablanca.html',
        'slug': '16-days-morocco-tour-from-casablanca',
        'category': 'desert-tours',
        'folder': 'desert-tours/16-days-morocco-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $1,890/person',
        'heroAsset': '/assets/tour_16day_casablanca.png'
    },
    {
        'file': '3-days-desert-tour-from-marrakech-to-fes.html',
        'slug': '3-days-desert-tour-marrakech-to-fes',
        'category': 'desert-tours',
        'folder': 'desert-tours/3-days-desert-tour-from-marrakech-to-fes',
        'startingFrom': 'Marrakech',
        'price': 'From $420/person',
        'heroAsset': '/assets/tour_3day_marrakech.png'
    },
    {
        'file': '4-days-marrakech-desert-tour.html',
        'slug': '4-days-marrakech-desert-tour',
        'category': 'desert-tours',
        'folder': 'desert-tours/4-days-marrakech-desert-tour',
        'startingFrom': 'Marrakech',
        'price': 'From $540/person',
        'heroAsset': '/assets/tour_4day_marrakech.png'
    },
    {
        'file': '5-days-tour-from-marrakech-to-merzouga.html',
        'slug': '5-days-tour-marrakech-to-merzouga',
        'category': 'desert-tours',
        'folder': 'desert-tours/5-days-tour-from-marrakech-to-merzouga',
        'startingFrom': 'Marrakech',
        'price': 'From $680/person',
        'heroAsset': '/assets/tour_5day_merzouga.png'
    },

    # Imperial Cities Tours (3 tours)
    {
        'file': '11-days-morocco-classic-tour.html',
        'slug': '11-days-morocco-classic-tour',
        'category': 'imperial-cities',
        'folder': 'imperial-cities/11-days-morocco-classic-tour',
        'startingFrom': 'Casablanca',
        'price': 'From $1,350/person',
        'heroAsset': '/assets/tour_10day_imperial.png'
    },
    {
        'file': 'itinerary-13-days-casablanca-tour.html',
        'slug': '13-days-casablanca-tour',
        'category': 'imperial-cities',
        'folder': 'imperial-cities/itinerary-13-days-casablanca-tour',
        'startingFrom': 'Casablanca',
        'price': 'From $1,590/person',
        'heroAsset': '/assets/tour_12day_casablanca.png'
    },
    {
        'file': '15-days-tour-from-casablanca.html',
        'slug': '15-days-tour-from-casablanca',
        'category': 'imperial-cities',
        'folder': 'imperial-cities/15-days-tour-from-casablanca',
        'startingFrom': 'Casablanca',
        'price': 'From $1,750/person',
        'heroAsset': '/assets/tour_16day_casablanca.png'
    },

    # Day Trips (6 tours)
    {
        'file': 'agafay-desert-sunset-camel-ride-dinner-under-the-stars.html',
        'slug': 'agafay-desert-sunset-camel-ride',
        'category': 'day-trips',
        'folder': 'day-trips/agafay-desert-sunset-camel-ride-dinner-under-the-stars',
        'startingFrom': 'Marrakech',
        'price': 'From $85/person',
        'heroAsset': '/assets/camel_trek_dunes.png'
    },
    {
        'file': 'one-day-trip-from-marrakech-to-essaouira-mogador.html',
        'slug': 'day-trip-essaouira-mogador',
        'category': 'day-trips',
        'folder': 'day-trips/one-day-trip-from-marrakech-to-essaouira-mogador',
        'startingFrom': 'Marrakech',
        'price': 'From $65/person',
        'heroAsset': '/assets/tangier_coast.png'
    },
    {
        'file': 'one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-.html',
        'slug': 'day-trip-ait-ben-haddou',
        'category': 'day-trips',
        'folder': 'day-trips/one-day-trip-from-marrakech-to-ouarzazate-and-the-ait-ben-haddou-',
        'startingFrom': 'Marrakech',
        'price': 'From $75/person',
        'heroAsset': '/assets/atlas_mountains_valley.png'
    },
    {
        'file': 'one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-.html',
        'slug': 'day-trip-ouzoud-waterfalls',
        'category': 'day-trips',
        'folder': 'day-trips/one-day-trip-from-marrakech-to-the-ouzoud-waterfalls-and-berber-',
        'startingFrom': 'Marrakech',
        'price': 'From $60/person',
        'heroAsset': '/assets/atlas_mountains_valley.png'
    },
    {
        'file': 'one-day-guided-tour-of-marrakech-city.html',
        'slug': 'one-day-marrakech-city-tour',
        'category': 'day-trips',
        'folder': 'day-trips/one-day-guided-tour-of-marrakech-city',
        'startingFrom': 'Marrakech',
        'price': 'From $55/person',
        'heroAsset': '/assets/marrakech_riad_pool.png'
    },
    {
        'file': 'ourika-valley-nature-wildlife-tour.html',
        'slug': 'ourika-valley-nature-tour',
        'category': 'day-trips',
        'folder': 'day-trips/ourika-valley-nature-wildlife-tour',
        'startingFrom': 'Marrakech',
        'price': 'From $50/person',
        'heroAsset': '/assets/atlas_mountains_valley.png'
    },

    # Activities (6 tours)
    {
        'file': 'hot-air-balloon-in-marrakech.html',
        'slug': 'hot-air-balloon-marrakech',
        'category': 'activities',
        'folder': 'activities/hot-air-balloon-in-marrakech',
        'startingFrom': 'Marrakech',
        'price': 'From $190/person',
        'heroAsset': '/assets/hero_sahara_sunset.png'
    },
    {
        'file': 'horse-riding-in-morocco.html',
        'slug': 'horse-riding-morocco',
        'category': 'activities',
        'folder': 'activities/horse-riding-in-morocco',
        'startingFrom': 'Marrakech',
        'price': 'From $65/person',
        'heroAsset': '/assets/marrakech_riad_pool.png'
    },
    {
        'file': 'fantasia-chez-ali-marrakech.html',
        'slug': 'fantasia-chez-ali-marrakech',
        'category': 'activities',
        'folder': 'activities/fantasia-chez-ali-marrakech',
        'startingFrom': 'Marrakech',
        'price': 'From $70/person',
        'heroAsset': '/assets/marrakech_riad_pool.png'
    },
    {
        'file': 'quad-biking-in-marrakech.html',
        'slug': 'quad-biking-marrakech',
        'category': 'activities',
        'folder': 'activities/quad-biking-in-marrakech',
        'startingFrom': 'Marrakech',
        'price': 'From $60/person',
        'heroAsset': '/assets/camel_trek_dunes.png'
    },
    {
        'file': 'raid-buggy-in-marrakech.html',
        'slug': 'raid-buggy-marrakech',
        'category': 'activities',
        'folder': 'activities/raid-buggy-in-marrakech',
        'startingFrom': 'Marrakech',
        'price': 'From $110/person',
        'heroAsset': '/assets/camel_trek_dunes.png'
    },
    {
        'file': 'camel-riding.html',
        'slug': 'camel-riding',
        'category': 'activities',
        'folder': 'activities/camel-riding',
        'startingFrom': 'Marrakech',
        'price': 'From $35/person',
        'heroAsset': '/assets/camel_trek_dunes.png'
    }
]

print(f"Total tours mapped: {len(TOUR_MAPPING)}")

# Test parsing and gallery lookup for each
errors = 0
for tm in TOUR_MAPPING:
    fpath = os.path.join(tours_dir, tm['file'])
    if not os.path.exists(fpath):
        print(f"ERROR: file {tm['file']} not found!")
        errors += 1
        continue
    
    # check gallery images folder
    gal_folder = os.path.join(public_dir, 'sahara-star-tours', tm['folder'], 'images')
    if not os.path.exists(gal_folder):
        print(f"ERROR: gallery folder {tm['folder']}/images not found!")
        errors += 1
    else:
        files = os.listdir(gal_folder)
        if len(files) == 0:
            print(f"WARNING: gallery folder {tm['folder']}/images empty!")

if errors == 0:
    print("ALL 29 TOURS HAVE VALID SOURCE FILES AND GALLERY FOLDERS!")
