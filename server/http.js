const express = require('express')
const app = express();

app.get('/random*', (req, res) => {

  const randomNumber = () => {
    const min = req.query.min;
    const max = req.query.max;
    return (Math.floor(Math.random() * (max - min + 1)) + min)*1;
  }

  res.send(`${randomNumber()}`)
});

app.listen(1337, () => {
  console.log('.................')
});