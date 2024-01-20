import os
import pandas as pd
import shutil

dataset_path = 'meta_df.csv'
df = pd.read_csv(dataset_path)

image_source_folder = 'data'


for index, row in df.iterrows():
    supercategory = row['supercategory']
    img_filename = row['img_file']

    # Create a folder based on the supercategory if it doesn't exist
    supercategory_folder = os.path.join(image_source_folder, supercategory)
    os.makedirs(supercategory_folder, exist_ok=True)

    # Determine the new filename based on the supercategory and existing filenames
    existing_images = [f for f in os.listdir(supercategory_folder) if f.startswith(supercategory)]
    new_filename = f"{supercategory}{len(existing_images) + 1}.jpg"

    # Copy and rename the image to the supercategory folder
    source_path = os.path.join(image_source_folder, img_filename)
    destination_path = os.path.join(supercategory_folder, new_filename)
    shutil.copyfile(source_path, destination_path)