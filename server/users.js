const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const sha1 = require('sha1');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '5399',
    database : 'testDB'
});

// const pool = mysql.createPool({
//     connectionLimit: 5,
//     host: "localhost",
//     user: "root",
//     database: "testDB",
//     password: "5399"
//   });

connection.connect((err) => {
    if(err) {
        console.log(err);
        return err;
    } else {
        console.log('sql connection')
    }
})

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);

    if(request.body.firstname ==='') {
        response.send('please enter your firstname');
        console.log('please enter your firstname');
    }

    if(request.body.lastname ==='') {
        response.send('please enter your lastname');
        console.log('please enter your lastname');
    }

    if(request.body.password !== request.body.confirm_password) {
        response.send('wrong password');
        console.log('wrong password');
    }

    if(request.body.password === '') {
        response.send('please enter your password');
        console.log('please enter your password');
    }

    if(request.body.email === '') {
        response.send('please enter your e-mail');
        console.log('please enter your e-mail');
    }

    if(request.body.email.indexOf('@') === -1) {
        response.send('wrong e-mail');
        console.log('wrong e-mail');
    }

    if(request.body.date_of_birth === '') {
        response.send('plese enter your date of birth');
        console.log('plese enter your date of birth');
    }
    
    console.log(sha1(request.body.password));
    response.send(JSON.stringify(request.body));
});

// const wer = 'SELECT * FROM someone';

// const qwe = connection.query(wer, (err, result) => {
//     console.log(err);
//     console.log(result);
//     return result;
// });


app.get("/", function(request, response){
    response.send();
});
  
app.listen(1337, () => {
    console.log('............')
});