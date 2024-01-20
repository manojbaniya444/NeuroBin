import base64 
from flask import Flask, request, jsonify 
from werkzeug.utils import secure_filename 
from flask_cors import CORS 
import os
import shutil
import cv2
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = 'uploads'

def process_image(image_path):
    # Implement your image processing logic using a suitable library or algorithm
    # This example uses OpenCV for illustration purposes
    # Your image processing logic here
    # ...

    # Convert the resulting image to base64
    image = cv2.imread(image_path)

    
    # Your image processing logic here, e.g., detecting and highlighting
    resize_image = cv2.resize(image, (640,640))
    gray_image = cv2.cvtColor(resize_image, cv2.COLOR_BGR2GRAY)

    #delete the runs folder
    if os.path.exists("runs/detect"):
        shutil.rmtree("runs/detect")

    model = YOLO('yolov8n.pt')
    prediction = model.predict(resize_image, save=True, imgsz=320, conf=0.5)

    imageResponse = cv2.imread("runs/detect/predict/image0.jpg")

    #delete the uploaded folder

    # For illustration purposes, let's assume your processed image is stored in the variable 'processed_image'
    _, encoded_image = cv2.imencode(".png", imageResponse)
    base64_image = base64.b64encode(encoded_image).decode("utf-8")

    return base64_image

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Hello World!"})

@app.route("/upload_photo", methods=["POST"])
def upload_photo():
    if 'photo' not in request.files:
        return jsonify({"error": "No photo provided"}), 400

    photo = request.files['photo']

    if photo.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if photo:
        # filename = secure_filename(photo.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], photo.filename)
        photo.save(file_path)

        # Call your enhanced video processing function
        result_image = process_image(file_path)

        # Return the result with highlighted video
        return jsonify({"message": " detected successfully", "result": result_image})

    return jsonify({"error": "Invalid file type"}), 400

if __name__ == "__main__":
    app.run(debug=True)
