In this project I explain . it's my opinion 


------------------------------------------------
1. Node.js

    * What is it ?
    => Node.js is a Javascript runtime built on CHrome's v8 engine, allowing you to run Javascript on the server side.

    * Why is it Important ?
    => It's the backbone of the project , enabling you to handle server request, interact database , and build APIs.


2. Express.js 

    * What is It ?
    => Express is web framework for Node.js that simplifies building server-side application and APIs.

    * Why is it Important ?
    => It provides an easy-to-use API for handling 
    HTTP routes (GET, POST, PUT, DELETE),
    middleware, and more. 
    Express helps structure the server-side code in a clean and manageable way

3. MongoDB

    * What is it? 
    => MongoDB is a NoSQl database that stores data in flexible, JSON-like documents.

    * Why is it Important ?
    => Use MongoDB to persist user data , understanding how MongoDB stores data,
    how documents and collections work , and how to query the database are essential for any CRUD operation.


4. Mongoose
    * What is it ? 
    => Mongoose is an object Data Modeling (ODM) library for MongoDB and Node.js
    and providing a Schema-based solution to model your application

    * Why is it Important ?
     => It simplifies MongoDB interections by providing and models for defining the structure of your data and simplifying CRUD operations. it allows you to perform database operations like Creating, Reading, Updating , Deleting. (CRUD)


5. CRUD Operations

    => CRUD represents the basic operations you can perform on a database .

    => These operations form the Core Functionality of any web app that interact with a database.
    Understanding each operation and how it maps to 
    HTTP methods (POST< GET< PUT< DELETE)


5. HTTPS Methods 
    => HTTP methods define the actions you can perform on resources(like data) via the web.

    * Importance
    => In RESTful APIs, these methods correspond to different CRUD operations. For instance.
        ~ POST: Create a new resources
        ~ GET: Retrieve one or more Resources
        ~ PUT: Update a Resources
        ~ DELETE: Remove a resource


6. Postman 
    – Tool for testing API endpoints

7. Middleware 
    (body-parser) – To handle incoming request bodies

8. Routing 
    – Handling different client requests in Express

9. Project Flow 
    – How everything connects (models, routes, server)

10. Error Handling 
    – Managing and responding to issues

11. JSON 
    – Data format used to exchange information

12. Promises/Async-Await 
    – Handling asynchronous database operations





----------------------------------------------------
----------------------------------------------------
----------------------------------------------------


1. Install Node.js and MongoDB
    > Node.js (server-side Javascript)
    > MongoDB (the database)

2. Initialize Node.js 
    > npm init --y

3. Install Dependencies
    -- Install the required libraries
    > npm install express
    > npm install mongoose
    > npm install body-parser 
    > npm install --save-dev nodemon 
    > npm install cors
    > npm install dotenv
    > npm install jsonwebtoken
    __________________________________________

    express: Web framework for handling routes.

    mongoose: Library for working with MongoDB

    body-parser: Middleware to parse incoming request bodies (JSON)

    Nodemon: Auto-restarts your server on file changes.

    dotenv: Manages secret keys in a .env file.

    Cors: Allows backend to talk to frontend from different domains.

    JWT: Creates tokens for user login.