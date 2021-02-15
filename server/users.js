const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const sha1 = require('sha1');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    passwsord : '5399',
    database : 'testDB'
});

connection.connect((err) => {
    if(err) console.log(err);
    else console.log('sql connection')
})

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) response.sendStatus(400);

    if(request.body.firstname ==='') {
        response.send('please enter your firstname');
        console.log('please enter your firstname');
    }

    if (request.body.lastname ==='') {
        response.send('please enter your lastname');
        console.log('please enter your lastname');
    }

    if (request.body.password !== request.body.confirm_password) {
        response.send('wrong password');
        console.log('wrong password');
    }

    if (request.body.password === '') {
        response.send('please enter your password');
        console.log('please enter your password');
    }

    if (request.body.email === '') {
        response.send('please enter your e-mail');
        console.log('please enter your e-mail');
    }

    if (request.body.email.indexOf('@') === -1) {
        response.send('wrong e-mail');
        console.log('wrong e-mail');
    }

    if (request.body.date_of_birth === '') {
        response.send('plese enter your date of birth');
        console.log('plese enter your date of birth');
    }

    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const password = sha1(request.body.password);
    const email =  request.body.email;
    const date_of_birth = request.body.date_of_birth.split('-').join('');

    connection.query("INSERT INTO user (firstname, lastname, password, email, date_of_birth, registration_date) VALUES (?,?,?,?,?,UNIX_TIMESTAMP())", [firstname, lastname, password, email, date_of_birth], function(err, data) {
        if (err) console.log(err);
        console.log('accepted');
    });

    connection.query("SELECT * FROM user WHERE id = LAST_INSERT_id()", function(err, data) {
        if(err) console.log(err);
        response.send(JSON.stringify(data));
    });
});

app.get("/", function(request, response) {
    connection.query("SELECT * FROM user", function(err, data) {
        if (err) {
            console.log(err);
            response.send(err);
        }
        response.send(JSON.stringify(data));
    });
});
  
app.listen(1337, () => {
    console.log('online')
});