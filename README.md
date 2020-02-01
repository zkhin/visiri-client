# Visiri - Automated Cell Counter and Image Markup Tool

![Splash](./screenshots/visiri-splash.jpg)
- Live Page: [Live](https://visiri.now.sh/)
- Server API endpoint: [Heroku](https://infinite-brushlands-69470.herokuapp.com/api/)
- API Server Code: [Server](https://github.com/zkhin/visiri-server)
- Client Code:[Client](https://github.com/zkhin/visiri-client)
___

## About Project

Visiri is an application that allows users to upload cell microscopy images and create datasets that will allow deep learning
models to automatically count cells.

Using a mobile device camera linked to the eyepiece of a microscope, a neural network must be trained with user's laboratory-specific imaging equipment and cells in order for automated counting to work.

This project is actively being developed in stages with the first being the frontend and data storage architectures for generating these calibration datasets.

In this current build, users can upload images of their cells and label the cells in a mobile-friendly browser-based interface.

The next build will establish the convolutional neural network models and deploying GPU-based architecture for training/prediction and task scheduling.
___
## Technologies Used

Client deployed on Zeit

- React
- JavaScript
- Konva (HTML5 Canvas rendering)
- HTML
- CSS

API Server deployed on Heroku

- Express
- Node
- PostgreSQL
- JWT Auth

---

## Account Demo Login

Important Note: Uploaded images other than provided samples will be cleared from AWS S3 bucket every few hours.
```
Username: demo

Password: password
```
---

## Screenshots

Experiments Page

![Dashboard Page](./screenshots/visiri-dashboard.jpg)

Upload/Markup Page

![Markup Page](./screenshots/visiri-labelling.jpg)

---

Copyright © 2020 Zayar Khin / Visiri
