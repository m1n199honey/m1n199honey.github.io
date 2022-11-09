const express = require('express');
const session = require('express-session');
const path = require('path');
const login = require(path.join(__dirname, "login"));
const dashboard = require(path.join(__dirname, "dashboard"));
const { v4:uuidv4 } = require('uuid');
const bodyparser = require('body-parser');
const app = express();
// const mysql = require('mysql');

// const connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'nodelogin'
    // });

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({
        extended: true
    }));
    
    // app.use(express.json());
    // app.use(express.urlencoded({
    //     extended: true
    // }));
    
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "assets")));
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use("/", login);
app.use("/", dashboard);
app.get("/dashboard", function (request, response) {
    response.end("dashbord !");
});
app.get('/', function (request, response) {
    // Render login template
    // response.sendFile(path.join(__dirname + '/login.html'));
    response.render('body', { title: "SJ Residence"});
});
app.listen(3000, ()=>{console.log("server is up !")});






// // http://localhost:3000/


// // http://localhost:3000/auth
// app.post('/auth', function (request, response) {
//     // Capture the input fields
//     let username = request.body.username;
//     let password = request.body.password;
//     // Ensure the input fields exists and are not empty
//     if (username && password) {
//         // Execute SQL query that'll select the account from the database based on the specified username and password
//         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
//             // If there is an issue with the query, output the error
//             if (error) throw error;
//             // If the account exists
//             if (results.length > 0) {
//                 // Authenticate the user
//                 request.session.loggedin = true;
//                 request.session.username = username;
//                 // Redirect to home page
//                 response.redirect('/home');
//             } else {
//                 response.send('Incorrect Username and/or Password!');
//             }
//             response.end();
//         });
//     } else {
//         response.send('Please enter Username and Password!');
//         response.end();
//     }
// });

// // http://localhost:3000/home
// app.get('/home', function (request, response) {
//     // If the user is loggedin
//     if (request.session.loggedin) {
//         // Output username
//         response.send('Welcome back, ' + request.session.username + '!');
//     } else {
//         // Not logged in
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

// app.listen(3000);