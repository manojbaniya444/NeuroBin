import os

def rename_files(folder_path):
    # Get the list of files in the folder
    files = os.listdir(folder_path)

    # Sort files to ensure consistent naming
    files.sort()

    # Iterate over the files and rename them
    for i, filename in enumerate(files):
        # Get the file extension
        _, file_extension = os.path.splitext(filename)

        # Construct the new file name
        new_name = f"food{i+1}{file_extension}"

        # Create the full paths for old and new names
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_path, new_path)

if __name__ == "__main__":
    folder_path = "dataset/food_waste"  # Replace with the actual folder path
    rename_files(folder_path)
