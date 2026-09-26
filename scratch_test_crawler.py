import os
import http.server
import socketserver
import threading
import urllib.request
import time
import sys

dist_dir = r'c:\Users\el mahdi\Desktop\mahdicreations\saharastartours\sahara-star-astro\dist'
PORT = 8921

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=dist_dir, **kwargs)
    def log_message(self, format, *args):
        pass # suppress console logging

httpd = socketserver.TCPServer(("127.0.0.1", PORT), Handler)
server_thread = threading.Thread(target=httpd.serve_forever)
server_thread.daemon = True
server_thread.start()

print(f"Started local test HTTP server on http://127.0.0.1:{PORT}")
time.sleep(1)

# List of all canonical paths to test
from scratch_migration_matrix import matrix_rows

failures = []
successes = 0

for r in matrix_rows:
    path = r['astro_url']
    url = f"http://127.0.0.1:{PORT}{path}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            if status == 200:
                successes += 1
            else:
                failures.append((url, status))
    except Exception as e:
        failures.append((url, str(e)))

print(f"\n--- HTTP CRAWLER TEST RESULTS ---")
print(f"Total tested pages: {len(matrix_rows)}")
print(f"Successful (HTTP 200): {successes}")
print(f"Failures: {len(failures)}")
for f in failures:
    print("  FAILED:", f)

httpd.shutdown()
if len(failures) == 0:
    print("\nALL CANONICAL ASTRO PAGES RETURN HTTP 200 OK! ZERO 404s!")
