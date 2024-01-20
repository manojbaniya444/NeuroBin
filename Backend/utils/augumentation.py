from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
import os
from count import count_images_in_folder


# # Define the path to your dataset
dataset_path = "final_data/Cup"
# count_image = count_images_in_folder(dataset_path)


# # Create an ImageDataGenerator instance with augmentation parameters
datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode="nearest",
)

# Specify the directory to save augmented images
save_dir = "final_data/Cup"

# Make sure the save directory exists
os.makedirs(save_dir, exist_ok=True)

# Iterate over the images in your dataset
for root, dirs, files in os.walk(dataset_path):
    for file in files:
        img_path = os.path.join(root, file)
        print(img_path)

        # # Load the image
        img = image.load_img(img_path, target_size=(150, 150))
        x = image.img_to_array(img)
        x = x.reshape((1,) + x.shape)

        # # Generate augmented images and save them to the specified directory
        i = 0
        for batch in datagen.flow(
            x,
            batch_size=1,
            save_to_dir=save_dir,
            save_prefix=f"cup{i}",
            save_format="jpg",
        ):
            i = +1
            count_image = count_images_in_folder(dataset_path)
            if count_image == 250:
                break
