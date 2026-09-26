import os

root = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\public\sahara-star-tours'

inventory = {}
for cat in os.listdir(root):
    cat_dir = os.path.join(root, cat)
    if os.path.isdir(cat_dir):
        for tour in os.listdir(cat_dir):
            tour_dir = os.path.join(cat_dir, tour, 'images')
            if os.path.isdir(tour_dir):
                files = sorted(os.listdir(tour_dir))
                inventory[f"{cat}/{tour}"] = files

print(f"Total tour folders in sahara-star-tours: {len(inventory)}")
for k, files in sorted(inventory.items()):
    print(f"{k:65} : {len(files)} files -> {files[:3]} ... {files[-1:]}")
