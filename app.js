// import express
const express = require("express");

// set up the server instance
const app = express();


app.use(express.urlencoded({
    extended: false
}));

// parse application/json
app.use(express.json());


let students = require("./data");
//students "api"
app.get("/api", (req, res) => {
    return res.send({
        response: "Students API version 0.0.1"
    });
});
//get all students
app.get("/api/students", (req, res) => {
    return res.send({
        response: students
    })
});
//get student by id
app.get("/api/students/:id", (req, res) => {
    const student = students.find(student => student.id === Number(req.params.id));
    return res.send({
        response: student
    });
});

//POST
app.post("/api/students", (req, res) => {
    let newStudent = req.body;
    newStudent.id = ++currentId;
    students.push(newStudent);

    return res.send({
        response: {}
    });
});

//PUT
app.put('/api/students/:id', (req, res) => {
    let id = Number(req.params.id);

    const foundIndex = students.findIndex(student =>
        student.id === id)

    const updatedStudent = {
        ...students[foundIndex],
        ...req.body
    }; //create a new object qith all the key values 
    students[foundIndex] = updatedStudent;

    delete req.body.id;

    students[foundIndex] = updatedStudent;

    return res.send({
        response: students
    });
    // return res.send({response: students});

});

//DELETE
app.delete("/api/students/:id", (req, res) => {

    let id = Number(req.params.id);

    students = students.filter(student => {
        return student.id !== id;
    });
    return res.send({
        response: students
    });
});





//set the server to use static as a static folder
app.use(express.static('static'));

// sending the html index file 
// --> the root route is requested
//frontpage
app.get("/", (req, res) => {
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
//myAPIpage
app.get("/myapi", (req, res) => {
    return res.sendFile(__dirname + "/static/html/my_api/myapi.html");
});



const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});