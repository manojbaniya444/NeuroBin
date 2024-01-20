# from PIL import Image
# import os

# def resize_and_replace(folder_path, target_width, target_height):
#     # List all files in the folder
#     all_files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

#     # Sort files to ensure consistent order
#     all_files.sort()

#     # Resize and replace files
#     for file_name in all_files:
#         _, extension = os.path.splitext(file_name)
#         new_file_name = f"{file_name[:-len(extension)]}_resized{extension}"

#         # Resize the image
#         old_path = os.path.join(folder_path, file_name)
#         new_path = os.path.join(folder_path, new_file_name)

#         with Image.open(old_path) as img:
#             resized_img = img.resize((target_width, target_height))

#             # Save the resized image, replacing the original file
#             resized_img.save(new_path)
#             os.remove(old_path)
#             os.rename(new_path, old_path)

#             print(f"Resized and Replaced: {file_name} -> {new_file_name}")

# # Specify the path to the folder you want to resize
# folder_to_resize = 'dataset/food_waste_valid'

# # Specify the target width and height for resizing
# target_width = 640
# target_height = 640

# # Call the function to resize and replace images in the folder
# resize_and_replace(folder_to_resize, target_width, target_height)




from PIL import Image
import os

def resize_and_replace(folder_path, target_width, target_height):
    # Iterate over each file in the folder
    for filename in os.listdir(folder_path):
        # Create the full path for the file
        file_path = os.path.join(folder_path, filename)

        # Open the image
        img = Image.open(file_path)

        # Resize the image
        resized_img = img.resize((target_width, target_height))

        # Convert to RGB mode if not already in RGB
        if resized_img.mode != 'RGB':
            resized_img = resized_img.convert('RGB')

        # Create the new path for the resized image
        new_path = os.path.join(folder_path, filename)

        # Save the resized image
        resized_img.save(new_path)

if __name__ == "__main__":
    folder_to_resize = "dataset/food_waste"  # Replace with the actual folder path
    target_width = 640 # Replace with your target width
    target_height = 640 # Replace with your target height

    resize_and_replace(folder_to_resize, target_width, target_height)

