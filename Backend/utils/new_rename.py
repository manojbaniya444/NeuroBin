# import os

# def rename_files_in_subfolders(data_folder):
#     # Iterate through each subfolder in the 'data' folder
#     for subfolder in os.listdir(data_folder):
#         subfolder_path = os.path.join(data_folder, subfolder)

#         # Check if it's a directory
#         if os.path.isdir(subfolder_path):
#             # List all files in the subfolder
#             all_files = [f for f in os.listdir(subfolder_path) if os.path.isfile(os.path.join(subfolder_path, f))]

#             # Sort files to ensure consistent order
#             all_files.sort()

#             # Extract the root name from the first file
#             if all_files:
#                 first_file_name, _ = os.path.splitext(all_files[0])
#                 root_name = ''.join([char for char in first_file_name if not char.isdigit()])

#                 # Rename files with increasing numbers
#                 for index, file_name in enumerate(all_files, start=1):
#                     _, extension = os.path.splitext(file_name)
#                     new_file_name = f"{root_name}{index}{extension}"

#                     # Rename the file
#                     old_path = os.path.join(subfolder_path, file_name)
#                     new_path = os.path.join(subfolder_path, new_file_name)
#                     os.rename(old_path, new_path)

#                     print(f"Renamed: {file_name} -> {new_file_name}")

# # Specify the path to the 'data' folder
# data_folder_path = 'dataset'

# # Call the function to rename files in subfolders
# rename_files_in_subfolders(data_folder_path)




import os

def rename_images_in_subfolders(data_folder):
    # Iterate through each subfolder in the 'data' folder
    for subfolder in os.listdir(data_folder):
        subfolder_path = os.path.join(data_folder, subfolder)

        # Check if it's a directory
        if os.path.isdir(subfolder_path):
            # List all image files in the subfolder
            image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']
            image_files = [f for f in os.listdir(subfolder_path) if os.path.isfile(os.path.join(subfolder_path, f)) and any(f.lower().endswith(ext) for ext in image_extensions)]

            # Sort files to ensure consistent order
            image_files.sort()

            # Extract the prefix from the first file as the root name
            if image_files:
                first_file_name, _ = os.path.splitext(image_files[0])
                prefix = ''.join([char for char in first_file_name if not char.isdigit()])
                index_digits = len(str(len(image_files)))

                # Rename image files with increasing numbers
                for index, file_name in enumerate(image_files, start=1):
                    _, extension = os.path.splitext(file_name)
                    new_file_name = f"{prefix}{index:0{index_digits}}{extension}"

                    # Rename the file
                    old_path = os.path.join(subfolder_path, file_name)
                    new_path = os.path.join(subfolder_path, new_file_name)
                    os.rename(old_path, new_path)

                    print(f"Renamed: {file_name} -> {new_file_name}")

# Specify the path to the 'data' folder
data_folder_path = 'dataset'

# Call the function to rename image files in subfolders
rename_images_in_subfolders(data_folder_path)
