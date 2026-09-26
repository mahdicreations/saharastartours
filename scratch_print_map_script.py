with open(r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\tours\7-day-morocco-tour-from-casablanca.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

idx = text.rfind('<script src="https://unpkg.com/leaflet')
print(text[idx:])
