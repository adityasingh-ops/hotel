import random
import string
import time

file_path = 'output1.txt'  # Change to your desired file

duration_seconds = 20 * 60 * 60  # 20 hours = 72,000 seconds
letters = string.ascii_letters

print("Starting appending letters for 20 hours...")

try:
    for i in range(duration_seconds):
        letter = random.choice(letters)
        with open(file_path, 'a') as f:
            f.write(letter)

        # Optional: show progress every hour
        if i % 3600 == 0:
            print(f"{i // 3600} hour(s) done...")

        time.sleep(1)

    print("Finished appending letters for 20 hours.")
except KeyboardInterrupt:
    print("Stopped manually.")