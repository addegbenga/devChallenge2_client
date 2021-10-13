<!-- Please update value in the {}  -->

<h1 align="center">Authentication app</h1>

<div align="center">
   Solution for a challenge from  <a href="https://investondaba.notion.site/Fullstack-Intermediate-Test-bffec121436f45ebac844fda2aa747ca" target="_blank">daba full stack intermediate coding exercise</a>.
</div>

<div align="center">
  <h3>
    <a href="https://myprofile007.netlify.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/addegbenga/devChallenge2_client">
      Solution for Client
    </a>
    <a href="https://github.com/addegbenga/devChallenge1">
      Solution for Server
    </a>
    <span> | </span>
    <a href="https://investondaba.notion.site/Fullstack-Intermediate-Test-bffec121436f45ebac844fda2aa747ca">
      Exercise
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://raw.githubusercontent.com/addegbenga/devChallenge2_client/main/public/authshot.png?raw=true")


- Working Demo

    <a href="https://myprofile007.netlify.app">
      Demo
    </a>

- My Little Experience Building this Project.

Building this project has sharpen my fullstack dev skill the more i got to work with React and Redux on the frontend and Express and mongoDB on the backend gained more experience on using google development console for social authorization and handling callback when a user is Authorized this was a challenge for me at first because not specifying the callback Uri in production will throw a Mismatch error.
I got familiar with deployment of SPA application to Netlify and various configuration to make so you dont get a NotFound error when you refresh other pages of your application.

Alot of experience gained from this little project and also i will be adding other features in my spare time.

Moving on i will keep working and building interseting stuff so watch out for me.
Thank you for reading to the end.



### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Nodejs](https://nodejs.org/en/)
- [Mongodb](https://www.mongodb.com/)
- [Tailwind](https://tailwindcss.com/)
- [Redux]

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

What features did you develop?

- **User story:** I can register a new account
- **User story:** I can log in
- **User story:** I can log in or register with at least one of the following services: `Google`, 
- **User story:** I can sign out
- **User story:** I can see my profile details
- **User story:** I can edit my details including: `photo`, `name`, `bio`, `phone`, `email` and `password`

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository for client code
$ git clone git@github.com:addegbenga/devChallenge2_client.git

## Add your env variable for your client code
$ REACT_APP_GOOGLE_TOKEN_ID = YOUR_CLIENT_ID FROM GOOGLE DEVELOPER 

# Install dependencies for client code
$ npm install

# Run Your client code
$ npm start

#Clone this repository for server code
$ git clone git@github.com:addegbenga/devChallenge1

## Add Your environment variables for the server code
$ MONGO_URI= YOUR MONGO URL

$ JWT_SECRET= mysecret

$ GOOGLE_CLIENT_ID = YOUR_CLIENT_ID FROM GOOGLE DEVELOPER CONSOLE

# Install dependencies for server code
$ npm install

# Run Your server code
$ npm start
```
