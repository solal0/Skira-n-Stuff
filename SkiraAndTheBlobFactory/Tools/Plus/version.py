import random
import string

chars = string.ascii_letters + string.digits
random_string = ''.join(random.choices(chars, k=100))

content = f"SkiraCompilerKey_{random_string}"

with open("version.txt", "w") as file:
    file.write(content)

print("version.txt has been created with the key.")
