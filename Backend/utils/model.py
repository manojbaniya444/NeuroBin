import pandas as pd
import numpy as np
import cv2

from tensorflow.keras.models import load_model




loaded_model = load_model("trained_model.h5")


# Load the image using OpenCV
image_path = "plastic.png"
img = cv2.imread(image_path)
img = cv2.resize(
    img, (60, 60)
)  # Ensure the image size matches the input size of the model
img = img / 255.0  # Normalize pixel values to the range [0, 1]

# Expand dimensions to match the model input shape
img = np.expand_dims(img, axis=0)

# Make predictions
predictions = loaded_model.predict(img)

# Assuming you have a list of class labels
class_labels = [
    "class_0",
    "class_1",
    "class_2",
    "class_3",
    "class_4",
    "class_5",
    "class_6",
    "class_7",
    "class_8",
    "class_9",
]

# Get the predicted class index
# predicted_class_index = np.argmax(predictions)

# Get the predicted class label
# predicted_class_label = class_labels[predicted_class_index]

# Print the results
# print("Predicted class:", predicted_class_label)
print("Predicted probabilities:", np.argmax(predictions))
