# NeuroBin Waste Management WebApp

## Table of Contents

- [Introduction](#introduction)
- [Introduction](#description)
- [Tech Stacks](#tech-stacks)
- [Installation](#installation)
- [Usage](#usage)

## Introduction
NeuroBin is a deep learning based web application which helps us to classify waste and coordinate effective waste management.
Users can input waste image and then our model will classify the waste and then helps manage it.

Key features of NeuroBin:

- **Waste Classification:** Utilizes neural networks to analyze images of waste items and classify them.
- **User-friendly Interface:** A sleek and intuitive user interface built with React, providing users with a seamless experience.
- **Data Logging:** Keeps track of waste disposal patterns and provides insightful analytics to both users and administrators.

## Tech Stacks

- **Frontend:**

  - React
  - Tailwind CSS

- **Backend:**

  - Flask (Python web framework)

- **Image Processing:**
  - Neural Network ( YOLOV8, OPEN CV )

## Installation

Follow these steps to clone and set up NeuroBin on your local machine:

1. **Clone the repository:**

   ```bash
   https://github.com/manojbaniya444/Hackathon-ACES-6.0.git
   cd Hackathon-ACES-6.0
   ```

2. **Install frontend dependencies:**

   ```bash
   cd Frontend
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd ../Backend
   pip install -r requirements.txt
   ```
4. **Start the backend server:**

   ```bash
   python app.py
   ```

5. **Start the frontend development server:**
   ```bash
   cd ../Frontend
   npm run dev
   ```

Now, NeuroBin should be up and running on your local machine.

## Usage

To use NeuroBin, simply open your web browser and navigate to [http://localhost:3000](http://localhost:3000).