# Visiri

## Automated Cell Counter and Image Markup Tool
## About Project
## Account Demo Login
## Screenshots
Sign up Page
![Signup page](./screenshot/signup.png)
## Technologies

# Project Name: Spaced Repetition

## About project

Visiri is an application that allows users to upload cell microscopy images and create datasets that will allow deep learning
models to automatically count cells.
Users can create calibrations that combine imaging factors particular to a laboratory and upload the data to the server.
The application provides a mobile friendly interface for labelling the image with cell markers.
Using this labelled data, the application will be able to train a convolutional neural network to classify image regions and 
in the future, function as an automated cell counter.

- Live Page: [Live](https://visiri.now.sh/)
- Server API endpoint: [Heroku](https://infinite-brushlands-69470.herokuapp.com/api/)
- API Server Code: [Server](https://github.com/zkhin/visiri-server)
- Client Code:[Client](https://github.com/zkhin/visiri-client)

-----------------------

## Account Demo Login

Username: admin

Password: pass

-----------------------

## Screenshot

Sign up Page
![Signup page](./screenshot/signup.png)

Login Page
![login page](./screenshot/login.png)

Dashboard Page
![Dashboard Page](./screenshot/dashboard.png)

Learning Page
![Learning Page](./screenshot/learning.png)

Correct Answer
![Correct Answer](./screenshot/correct.png)

Wrong Answer
![Wrong Anser](./screenshot/wrong.png)

-----------------------

## Techinologies Used

Client Side deployed on Zeit

- React.js
- JavaScript
- HTML
- CSS
- Cypress

API Server Side deployed on Heroku

- Express.js
- Node.js
- PostgreSQL
- JWT Decode

-----------------------

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

-----------------------

Copyright © Wesley Jacobs & Heesu Kang & Zayar Khin
