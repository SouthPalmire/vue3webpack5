const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const sha1 = require('sha1');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'someone',
    password : '53995399',
    database : 'users'
});

connection.connect((err) => {
    if(err) console.log(err);
    else console.log('sql connection')
})

app.use(express.static(__dirname + '/'));

app.get("*", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api", urlencodedParser, function (request, response) {
    connection.query("SELECT * FROM user", function(err, data) {
        if(err) console.log(err);
        response.send(JSON.stringify(data));
    });});
  
app.listen(1337, () => {
    console.log('online')
});