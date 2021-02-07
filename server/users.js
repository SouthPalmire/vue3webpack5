const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '5399',
    database : 'people'
});

connection.connect((err) => {
    if(err) {
        console.log(err);
        return err;
    } else {
        console.log('ok')
    }
})

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);

    if(request.body.firstname ==='') response.send('please enter your firstname');

    if(request.body.lastname ==='') response.send('please enter your lastname');

    if(request.body.password !== request.body.confirm_password) response.send('wrong password');

    if(request.body.password === '') response.send('please enter your password');

    if(request.body.email === '') response.send('please enter your e-mail');

    if(request.body.email.indexOf('@') === -1) response.send('wrong e-mail');

    if(request.body.date_of_birth === '') response.send('plese enter your date of birth');

    console.log(request.body);
    response.send(JSON.stringify(request.body));
});

const wer = 'SELECT * FROM someone';

const qwe = connection.query(wer, (err, result) => {
    console.log(err);
    console.log(result);
    return result;
});


app.get("/", function(request, response){
    response.send(`${qwe}`);
});
  
app.listen(1337, () => {
    console.log('............')
});