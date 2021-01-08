const express = require('express')
const app = express();

const randomNumber = () => {
  return (Math.floor(Math.random() * (500 - 200 + 1)) + 200)*1;
}

app.get('/random', (req, res) => {
  res.send(`${randomNumber()}`)
});

app.listen(1337);