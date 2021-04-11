# Google Vision Reader
Simple document and image reader with Google Vision and Node.js.

# Objective
Develop an application for reading documents and images using Google Vision.

# Requeriments
- Node.js
- Google Cloud Platform
  - Cloud Vision API actived

# How to use
- Clone repository
``git clone https://github.com/thazsobral/google-vision-reader``
- Install dependences
``npm install``
- Set credentials
  - Google Cloud Platform -> Navigation Menu -> credentials -> Service accounts -> Keys -> Add Key -> Create New Key -> Type Key: json -> 
Paste the **file** into the project directory.
  - Rename the file to *google-cloud-credentials.json*.

- Execute server
``npm run start``
