
import os
from PIL import Image

def count_images_in_folder(folder_path):
    # Ensure the folder path exists
    if not os.path.exists(folder_path):
        print(f"The folder {folder_path} does not exist.")
        return

    # Get the list of files in the folder
    files = os.listdir(folder_path)

    # Count the number of image files (assuming common image file extensions)
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
    image_count = sum(1 for file in files if os.path.isfile(os.path.join(folder_path, file)) and any(file.lower().endswith(ext) for ext in image_extensions))

    return image_count

