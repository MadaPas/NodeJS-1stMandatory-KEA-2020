// import express
const express = require("express");

// set up the server instance
const app = express();

//set the server to use static as a static folder
app.use(express.static('static'));


// sending the html index file 
// --> the root route is requested
app.get("/", (req, res) =>{
    return res.sendFile(__dirname + "/static/html/index.html");
});

app.get("/about", (req, res) => {
    return res.sendFile(__dirname + "/static/html/about.html");
});

app.get("/express", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/express.html");
});

app.get("/nodemon", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/nodemon.html");
});

app.get("/request", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/request.html");
});

app.get("/nodejs", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/nodejs.html");
});

app.get("/jquery", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/jquery.html");
});

app.get("/clientserver", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/clientserver.html");
});

app.get("/restapi", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/restapi.html");
});

app.get("/callback", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/callback.html");
});

app.get("/postman", (req, res) => {
    return res.sendFile(__dirname + "/static/html/content/postman.html");
});



const port = process.env.port ? process.env.port : 3000;

// listen on port 3000, logging possible errors
app.listen(port, error => {

    if (error) 
    {
        console.log("Error occured! Error:", error);
    }
    console.log("Server is running on port", port);
});
