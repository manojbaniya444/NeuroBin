import os
import random
import shutil

def split_and_move_images(data_folder):
    # Iterate through each subfolder in the 'data' folder
    for subfolder in os.listdir(data_folder):
        subfolder_path = os.path.join(data_folder, subfolder)

        # Check if it's a directory
        if os.path.isdir(subfolder_path):
            # List all files (images) in the subfolder
            all_images = [f for f in os.listdir(subfolder_path) if os.path.isfile(os.path.join(subfolder_path, f))]

            # Calculate the number of images to move (20% of total)
            num_images_to_move = int(0.2 * len(all_images))

            # Randomly select 20% of images
            selected_images = random.sample(all_images, num_images_to_move)

            # Create a new subfolder for validation images
            valid_subfolder_path = os.path.join(data_folder, f"{subfolder}_valid")
            os.makedirs(valid_subfolder_path, exist_ok=True)

            # Move selected images to the validation subfolder
            for image in selected_images:
                src_path = os.path.join(subfolder_path, image)
                dest_path = os.path.join(valid_subfolder_path, image)
                shutil.move(src_path, dest_path)
                print(f"Moved: {image} to {valid_subfolder_path}")

            print(f"Total Images in {subfolder}: {len(all_images)}")
            print(f"Validation Images in {subfolder}: {num_images_to_move}")
            print(f"Training Images in {subfolder}: {len(all_images) - num_images_to_move}")
            print()

# Specify the path to the 'data' folder
data_folder_path = 'dataset'

# Call the function to split and move images
split_and_move_images(data_folder_path)
