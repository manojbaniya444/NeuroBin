import os

# Function to map characters based on the given mapping
def map_characters(char):
    character_map = {'0': '6', '1': '1', '2': '0', '3': '3', '4': '7', '5': '5', '6': '4', '7': '2', '8': '8'}
    return character_map.get(char, char)

# Create a new folder if it doesn't exist
output_folder = 'new_changed_labels'
os.makedirs(output_folder, exist_ok=True)

# Input folder containing txt files
input_folder = 'your_input_folder_path'

# Iterate through each txt file in the folder
for file_name in os.listdir(input_folder):
    if file_name.endswith(".txt"):
        input_file_path = os.path.join(input_folder, file_name)
        output_file_path = os.path.join(output_folder, file_name)

        with open(input_file_path, 'r') as input_file, open(output_file_path, 'w') as output_file:
            # Read content of each line and replace the first character
            for line in input_file:
                first_char = line.split()[0]
                new_first_char = map_characters(first_char)
                modified_line = line.replace(first_char, new_first_char, 1)
                output_file.write(modified_line)

print("Files processed and saved in the 'new_changed_labels' folder.")
