from flask import Flask, render_template, request
import torch
from torchvision import transforms
from PIL import Image
import io

app = Flask(__name__)

# Configure image uploading
app.config['UPLOADED_PHOTOS_DEST'] = 'uploads'

# Load the YOLO model
model = torch.load('best.pt', map_location=torch.device('cpu'))
model.eval()

# Define image transformation
transform = transforms.Compose([
    transforms.ToTensor(),
])

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST' and 'photo' in request.files:
        photo = request.files['photo']
        image = Image.open(io.BytesIO(photo.read()))

        # Preprocess the image
        img_tensor = transform(image).unsqueeze(0)

        # Make prediction using the model
        with torch.no_grad():
            prediction = model(img_tensor)

        # TODO: Process the prediction result as needed

        # Display the result (you may need to modify this based on your model's output)
        result = f"Prediction: {prediction}"

        return render_template('index.html', result=result)

    return render_template('index.html', result=None)

if __name__ == '__main__':
    app.run(debug=True)