with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print('has navbar:', '<div class="navbar">' in text)
idx = text.find('<header')
if idx != -1:
    print(text[idx:idx+2000])
