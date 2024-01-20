import base64 
from flask import Flask, request, jsonify 
from werkzeug.utils import secure_filename 
from flask_cors import CORS 
import os
import shutil
import cv2
from ultralytics import YOLO

# classes = {0: 'Cup', 1: 'Bottle', 2: 'Plastic', 3: 'Can', 4: 'Straw', 5: 'Paper', 6: 'Bottlecap', 7: 'Carton', 8: 'Foil'}

app = Flask(__name__)
CORS(app)

app.config['UPLOAD_FOLDER'] = 'uploads'

def process_image(image_path):
    image = cv2.imread(image_path)

    resize_image = cv2.resize(image, (640,640))
    # gray_image = cv2.cvtColor(resize_image, cv2.COLOR_BGR2GRAY)

    #delete the runs folder
    if os.path.exists("runs/detect"):
        shutil.rmtree("runs/detect")

    model = YOLO('best.pt')
    prediction = model.predict(resize_image, save=True, imgsz=224, conf=0.1)

    imageResponse = cv2.imread("runs/detect/predict/image0.jpg")

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
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], photo.filename)
        photo.save(file_path)

        result_image = process_image(file_path)

        return jsonify({"message": " detected successfully", "result": result_image})

    return jsonify({"error": "Invalid file type"}), 400

if __name__ == "__main__":
    app.run(debug=True)
