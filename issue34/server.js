const express = require('express');
// const bodyParser = require("body-parser");
// const mysql = require('mysql2');
// const sha1 = require('sha1');

const app = express();

app.use(express.static(__dirname + '/'));

app.get("*", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});
  
app.listen(1337, () => {
    console.log('online')
});