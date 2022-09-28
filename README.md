# Hacking Challenge - Cotizador Seguro Vehicular SASS

Developer: Nick Correa Garcia

The app is deployed [here](https://nickcoga.github.io/Cotizador-Seguro-Vehicular-Sass/)

Test User: "id": 3, "name":"Nico", "dni": 46454443 , "phone": 954685231 ,"passport": 123456789, "email": "nicoga@gmail.com"

LightHouse Mobile: ![image](https://user-images.githubusercontent.com/68827067/192897701-08a07539-0f2f-4c23-b3a4-007409cf56ec.png)

LightHouse Desktop: ![image](https://user-images.githubusercontent.com/68827067/192897168-4479a98f-9b3b-4cb3-81f5-1d78cd1c13eb.png)

## Libraries/Tools used and why they were selected

The majority of the following tools that I've used on this project are the ones that I learned about first, and the ones that I have the most experience with.

### create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) because it helps me automatically setup these tools:

- automatic package.json created
- initial file structure
- default scripts (npm start, npm build)

# Styles in SASS

Definitions: Sass is a CSS renderer. A CSS preprocessor is a tool that allows us to automatically generate style sheets, adding features that CSS does not have, and that are typical of programming languages, such as variables, functions, nested selectors, inheritance, etc.

This library was used for my styles in components reusable.

### react-router-dom V6

Definitions: react-router-dom provides browser specific components for routing web apps and react-router-native provides specific components for react-native or mobile apps created with React Native.

This library was used for redirections my routes(pages or screens) Aplications React

### github-pages

Definitions: Calling this function will create a temporary clone of the current repository, create a gh-pages branch if one doesn't already exist, copy over all files from the base path, or only those that match patterns from the optional src configuration, commit all changes, and push to the origin remote. ( gh-pages --save-dev)

This library was used to deploy my project.

### My Json Server

Definitions: is a simple project that helps you to setup a REST API with CRUD operations very fast. The project website can be found at [https://github.com/typicode/]. ... js, to generate fake data for the REST API which is exposed by using JSON server.

Created db.json file to consume data (Fetch)
[https://my-json-server.typicode.com/nickcoga/Cotizador-Seguro-Vehicular]

users: [https://my-json-server.typicode.com/nickcoga/Cotizador-Seguro-Vehicular/users]
cars: [https://my-json-server.typicode.com/nickcoga/Cotizador-Seguro-Vehicular/cars]


### Media Queries

Definitions: In web development, media queries are a CSS3 module that allows the content representation to be adapted to device characteristics such as screen resolution (for example, a smartphone in front of high-definition screens) or the presence of accessibility features such as braille.

This css feature was used to achieve responsive design (view Web and view mobile min-width:768px) throughout all my aplicaction.

### Fetch API

Definition: The Fetch API allows you to asynchronously (Async) request for a resource. Use the fetch() method to return a promise that resolves into a Response object. To get the current data, you call one of the methods of the Response object e.g., text() or json(). These methods resolve into the actual data.

This method was used to receive and send query data through different endpoints.

### React Hooks

Definition: It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

This method was used in all components with differents props. One of the most important components was InputNumber in ContentPrice.

Hooks used:
useState to generate state for the application
useEffect to calculate price value
useHistory to move between pages (push and go back)

## How tasks were divided to completed the challenge

This link contains all To do of the components created in the project

[https://github.com/nickcoga/Cotizador-Seguro-Vehicular/projects/1]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to start the project

In the project directory, you can run:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Extra notes

### Scalable and Reusable Components

The Stepper component is scalable as it supports more than 2 steps (you can use 5 steps for example and it would work)

The InputText, Select, ProgressBar components is highly reusable because its features can be toggled by props and it always fits to their parent container

### Best-practices-structure-react

The file structure uses the following best practices found:

- Screens -> Components
- Services
- Shared -> Shared Components
- Helpers
- Contants
- Assets

### Tools for Escalable Design

Some components are scalable because we use the following tools:

- Property vw : hundredths of the viewport width
- Property vh : hundredths of the viewport height
- .svg over .png .jpg because its escalability and efficiency
- Used Figma for color definitions and measures on the design:[https://www.figma.com/file/EI5Bqma6XRMiL3SYDJdZAV/Hacking-Challenge-2021?node-id=2%3A7]

### Services with singleton

Definition: The Singleton is a design pattern used in object-oriented programming that ensures only a single instance of an object exists within a system at any given time. The singleton is useful for things like loggers, state managers, and other objects that need to be globally accessible across an application.

This tool was used validate only one instance in my applications.
