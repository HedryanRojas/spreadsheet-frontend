# SpreadSheet

This project aims to create a web spreadsheet where users can perform the basic operations that can be performed in others spreadsheets like google sheets, this data will be stored and it could be accessible by the user who has created it later if the user wants to.

[Live demo](https://hedryanrojas.github.io/spreadsheet-frontend/#/)
# Supported Use-Cases

  - System must support at least 1000 rows and 1000 columns.
  - Users can cut, copy, paste and delete cells individually or by range.
  - Each cell will support only text or numbers.
  - System must perform this operations:  addition( + ),  subtraction ( - ),  multiplication( * ),  division( / ), exponentiation ( ^ )  keeping the evaluation precedence when it has parentesys. Example (1 + 2) * 3  = 9. 
  - These functions will be available: Sum, Multiplicative, Calculate the largest number, Calculate the smallest number,
  - Calculate the mean, Standard deviation, Variance, Mode, Median.
  - System could combine math operations in order to create more complex operations.
  - System must support multiple users.
  - Each user will be able to create as many spreadsheets as the user wants but each spreadsheet only will have 1 sheet in it.
  - User will be able to delete any spreadsheet that user does not need anymore 

# Out of scope

   - Offline working 
   - Search functionality
   - Cell range selection dragging mouse pointer over them

### Tech

spreadsheet uses a number of open source projects to work properly:

* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces!
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [React-toastify](https://fkhadra.github.io/react-toastify/introduction/) - Allows you to add notifications to your app with ease.
* [React virtualized](https://bvaughn.github.io/react-virtualized/#/components/List) - React components for efficiently rendering large lists and tabular data.
* [Firebase](https://firebase.google.com/) -  Provides developers with a variety of tools and services (Backend-as-a-Service).
* [Formula-parser](https://github.com/handsontable/formula-parser) - Provides a Parser class that evaluates excel and mathematical formulas.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

### Installation

Requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd spreadsheet-frontend
$ cp .env.example .env  
$ npm install -d
```
Before start you need to add firebase credentials to .env file
```sh 
$ npm start
```
The application will run in dummy mode by default, this means all the data will be saved in the localstorage to change it you have to change REACT_APP_ONLY_DUMMY from true to false 
```sh
REACT_APP_ONLY_DUMMY = true
```
and add your API url to 
```sh
REACT_APP_API=
```

### Todos

 - Write Tests
