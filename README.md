# Book Search Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## Description

This is a web app that allows users to create accounts, search for books by title using the Google Books API, as well as save any titles that look interesting to their accounts. This app was built via the MERN stack: MongoDB, Express, React, and Node.js, and uses the JSON Web Token package in order to authenticate users. It is hosted via the free tier of Render.

## Usage

Check it out [here!](https://book-search-engine-6olq.onrender.com/)

Start by clicking the "Login/Signup" button in the upper right-hand corner. You can create an account with an email address, username, and password. Once you've created an account, you'll be automatically signed in. You can logout at any time by clicking the "Logout" button in the upper right-hand corner.

![image](https://github.com/user-attachments/assets/f55ff5c3-315a-41f6-980b-74fe86795163)

The search engine is simple to use: simply type a title into the search bar and search! The page will be populated with books, the data for which comes from the Google Books API. If you'd like to save a book, click the "Save this book!" button under the book in question.

![image](https://github.com/user-attachments/assets/a5458a83-2924-44b4-9945-e689d4dc37d3)

To view your saved books, check out the "See Your Books" button in the upper right corner. If you've saved any books, they will appear. You can remove books by clicking "Delete this book!" under each saved book.

![image](https://github.com/user-attachments/assets/11023a00-d942-475d-9a4f-814b5772275c)

## Credits

The base code for this project was provided by edX, which initially had the same application built using RESTful APIs. I refactored it to be a GraphQL API.

To see the full list of packages used, check out the package.json files in the root directory, client, and server folders.

## License

This code is covered by the MIT license. For more information, click the badge at the top of the page, or check out the LICENSE file in the root of this directory.
