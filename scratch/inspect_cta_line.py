with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        if 'id="nav-cta"' in line:
            print("index.html:", repr(line))

with open('tours/7-day-morocco-tour-from-casablanca.html', 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        if 'id="nav-cta"' in line:
            print("7-day tour:", repr(line))
