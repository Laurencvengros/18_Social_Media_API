## 18_Social_Media_API

## Table-of-Contents

1. [Description](#description)

2. [User Story](#user-story)

3. [Installation](#installation)

4. [Usage](#usage)

5. [Application Demo](#application-demo)

6. [Technologies](#technologies)

8. [Contact Me](#contact-me)


## Description

A social network API that uses Mongo DB as a database, Mongoose ODM, Express.JS and seeds data through insomnia. It allows you to create your own user, share your thoughts, add others as friends and add reactions to your friends thoughts.

With this API you can also complete other CRUD operations. The photo below shows all the requests you may send including GET, POST, PUT and DELETE users, thoughts, friends and reactions

![Insomnia Screenshot](./assets/Images/GET_users.jpg "screenshot of insomnia showing API requests" )


## User Story 

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

```

## Installation

Here Is a guide to run the application on your own local computer

* Clone the repository using this link:
 https://github.com/Laurencvengros/18_Social_Media_API.git

 * Ensure you have the correct dependencies installed in your package-json by running the following commands:
    1. npm init
    2. npm install (you may also install them individually)
        - npm i express (Express.js)
        - npm i mongoose (mongoose)
        - npm i moment (to add the timestamps using moment.js)

* You must also have MongoDB installed to your computer

* After you have everything installed, open your terminal and run ``` npm start ```

* To view the database open Mongo Compass and connect to the Mongo DB URI ``` mongodb://localhost:27017 ```. You can then view the databases by clicking "socialMediDB" to see your "thought" and "user" collections.

* Finally, open insomnia to create your seed data and view the routes


## Usage

* This application utilizes all API the CRUD functionality to GET/POST/PUT and DELETE data for users, thoughts, friends and reactions. Below demonstartes in detail the functionality the API has.

1. ### USER API ROUTES

    * GET all users ``` /api/users ```

    * GET user by id ``` /api/users/: userId ```

    * POST a new user ``` /api/users```

        ```
            json
            {
            "username": "example",
            "email": "exampleemail@gmail.com"
            }
        ```
    * PUT to update a users information ``` /api/users/:userId```

        ```
            json
            {
            "username": "Updatedexample",
            "email": "updatedEmail@gmail.com"
            }
        ```

    * DELETE a user ```/api/users/:user:id```


2. ### THOUGHT API ROUTES

    * GET all thoughts ```/api/thoughts```

    * GET thought by ID ```/api/thoughts/:thoughtId```

    * POST a new thought ```/api/thoughts```

        ```
            json
            {
            "thoughtText": "example thought",
            "username": "example user",
            "userId": "5edff358a0fcb779aa7b118b"
            }
        ```

    * PUT to update a thought ``` /api/thoughts/thoughtId```

        ```
            json
            {
            "thoughtText": "example thought UPDATED",
            "username": "example user",
            "userId": "5edff358a0fcb779aa7b118b"
            }
        ```

    * DELETE a thought  ```api/thoughts/thoughtId```


3. ### FRIEND API ROUTES

    ```/api/users/:userId/friends/:friendId```

    * ```POST``` to add a new friend from friend list

    * ```DELETE``` to delete a friend from friend list



4. ### REACTION API ROUTES

    ```/api/thoughts/:thoughtId/reactions```

    * ```POST``` to add a reaction to a thought

    * ```DELETE``` to delete a reaction from a thought

```
Note to see a demonstration of all the routes in insomnia check out the application demo section below.

```

## Application Demo

[User Routes](./assets/Videos/USER%20ROUTES_%20GET%20all%2C%20GET%20by%20ID%2C%20POST%2C%20PUT%2CDELETE.webm )

[Thought Routes](./assets/Videos/THOUGHT%20ROUTES_%20GET%20all%2C%20GET%20by%20ID%2C%20POST%2C%20PUT%2C%20DELETE%20(and%20associated%20thought%20delete).webm

[Friend Routes](./assets/Videos/POST%20and%20DELETE%20friend.webm)

[Reaction Routes](./assets/Videos/POST%20and%20DELETE%20friend.webm)

## Contact Me

This Application was created by me.

For questions/comments/concerns please contact me via the information below

* Author: Lauren Cvengros
* Email: L.Cvengros@icloud.com
* github: Lauurencvengros -> https://github.com/Laurencvengros



    