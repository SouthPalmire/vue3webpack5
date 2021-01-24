const express = require('express')
const app = express();

app.get('/random*', (req, res) => {

  const randomNumber = () => {
    const min = /(?<=min=).*?(?=&max)/.exec(req.url);
    const max = /(?<=max=).*/.exec(req.url);
    return (Math.floor(Math.random() * (max - min + 1)) + min)*1;
  }

  res.send(`${randomNumber()}`)
});

app.listen(1337, () => {
  console.log('.................')
});