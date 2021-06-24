const express = require('express');
const session = require('express-session');
const SessionStore = require('express-mysql-session');
const mysql = require('mysql2');

const port = 3000;
const host = '127.0.0.1';

const app = express();

const config = {
  host: 'localhost',
  user: 'someone',
  password: '53995399',
  database: 'users',
};

app.use(express.json());

const connection = mysql.createPool(config).promise();

app.use(session({
  name: 'session_name',
  secret: 'session_secret',
  store: new SessionStore(config),
  cookie: {
    maxAge: 1000 * 60 * 60 * 102,
    sameSite: 'none',
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cookie, Set-Cookie');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/auth', (req, res) => {
  req.session.userId = req.body.id;
  console.log(req.session, `post session id: ${req.session.id}`, req.session.userId);
  res.sendStatus(200);
});

app.get('/auth', (req, res) => {
  console.log(`get session id: ${req.session.id}`, req.session.userId);
  res.sendStatus(200);
});

(() => {
  try {
    app.listen(port, host, () => {
      console.log(`server start's on http://${host}:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
