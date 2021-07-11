const express = require('express');
const session = require('express-session');
const SessionStore = require('express-mysql-session');
const mysql = require('mysql2');
const crypto = require('crypto');

const port = 1337;
const host = '127.0.0.1';
const salt = 'abc';
const config = {
  host: 'localhost',
  user: 'root',
  password: '53995399',
  database: 'users',
};

const app = express();

const connection = mysql.createPool(config).promise();

app.use(express.json());

app.use(session({
  name: 'session_name',
  secret: 'session_secret',
  store: new SessionStore(config),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: false,
}));

// app.use(express.static(__dirname + '/dist'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cookie, Set-Cookie');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const checkUser = (req, res, next) => {
  if (!req.session.userId) {
    res.sendStatus(401);
  } else {
    next();
  }
};

// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/dist/index.html')
// });

app.get('/api/profile', checkUser, (req, res) => {
  const queryString = `SELECT id, firstname, lastname, email, date_of_birth  
                   FROM user 
                   WHERE id = ?`;

  connection.query(queryString, [req.session.userId])
    .then(([data]) => {
      res.status(202).json(data);
      console.log(`profile id ${req.session.userId}`);
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
});

app.get('/api/guestbook/comments', checkUser, (req, res) => {
  const { id } = req.query;

  const queryString = `SELECT c.id, c.post_id, c.user_id, c.date_time, c.text, u.firstname, u.lastname 
                   FROM comment c 
                   JOIN user u ON c.user_id = u.id 
                   WHERE c.post_id = ?`;

  console.time('uploading comments');
  connection.query(queryString, [id])
    .then(([data]) => {
      res.status(200).json(data);
      console.log(`send all comments of post # ${id}`);
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('uploading comments');
});

app.get('/api/guestbook/posts', checkUser, (req, res) => {
  connection.query('select COUNT(id) AS number_of_posts from post')
    .then(([data]) => {
      res.status(200).json(data);
      console.log(`number of posts ${data[0].number_of_posts}`);
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
});

app.get('/api/guestbook', checkUser, (req, res) => {
  const reqLimit = 3;
  const reqOffset = req.query.offset * 3;

  const queryString = `SELECT p.id, c.post_id, p.theme, p.text, u.firstname, u.lastname, p.date_time, 
                   COUNT(c.id) AS number_of_comments, MAX(c.date_time) AS last_comment_time 
                   FROM user u 
                   JOIN post p ON u.id = p.user_id 
                   LEFT JOIN comment c ON p.id = c.post_id 
                   GROUP BY p.id 
                   ORDER BY p.id 
                   LIMIT ? OFFSET ?`;

  console.time('uploading posts');
  connection.query(queryString, [reqLimit, reqOffset])
    .then(([data]) => {
      res.status(200).json(data);
      console.log(`send ${reqLimit} notes, start from ${reqOffset}`);
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('uploading posts');
});

app.post('/api/guestbook', checkUser, (req, res) => {
  const { userId, userTheme, userText } = req.body;

  const queryString = `INSERT INTO post 
                   (user_id, theme, date_time, text) 
                   VALUES (?,?,now(),?)`;

  console.time('creating post');
  connection.query(queryString, [userId, userTheme, userText])
    .then((data) => {
      res.status(201).json(data);
      console.log('note created');
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('creating post');
});

app.post('/api/guestbook/comments', checkUser, (req, res) => {
  const { id, userId, filteredCommentText } = req.body;

  const queryString = `INSERT INTO comment 
                   (post_id, user_id, date_time, text) 
                   VALUES (?,?,now(),?)`;

  console.time('creating comment');
  connection.query(queryString, [id, userId, filteredCommentText])
    .then((data) => {
      res.status(201).json(data);
      console.log('comment created');
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('creating comment');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const checkPassword = crypto.createHash('sha1', salt).update(password).digest('hex');

  const queryString = `SELECT id, firstname, lastname, email, date_of_birth  
                   FROM user 
                   WHERE email = ? AND password = ?`;

  console.time('login');
  connection.query(queryString, [email, checkPassword])
    .then(([data]) => {
      if (data.length) {
        req.session.userId = data[0].id;
        res.status(202).json(data);
        console.log(`user whith email ${email} have been entered`);
      } else {
        res.status(404).json('wrong email or password');
        console.log('wrong email or password');
      }
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('login');
});

app.post('/api/register', (req, res) => {
  const {
    email, firstname, lastname, passwordCreate, date_of_birth,
  } = req.body;
  const createPasswordHash = crypto.createHash('sha1', salt).update(passwordCreate).digest('hex');
  const createBirthDate = date_of_birth.split('-').join('');

  const registrationQweryString = `INSERT INTO user 
                               (firstname, lastname, password, email, date_of_birth, registration_date) 
                               VALUES (?,?,?,?,?,UNIX_TIMESTAMP())`;
  const checkEmailQweryString = `SELECT * 
                             FROM user 
                             WHERE email = ?`;
  const selectUserQweryString = `SELECT id, firstname, lastname, email, date_of_birth 
                             FROM user 
                             WHERE id = ?`;

  console.time('registration');
  connection.query(checkEmailQweryString, [email])
    .then(([dataEmailCheck]) => {
      if (dataEmailCheck.length) {
        res.status(400).json('email already exist');
        console.log('email already exist');
      } else {
        connection.query(registrationQweryString, [firstname, lastname, createPasswordHash, email, createBirthDate])
          .then(([dataRegistrationInsert]) => {
            connection.query(selectUserQweryString, [dataRegistrationInsert.insertId])
              .then(([dataUser]) => {
                res.status(201).json(dataUser);
                console.log('user created');
              })
              .catch((err) => {
                res.status(520).json('something wrong, try again');
                console.log(err);
              });
          })
          .catch((err) => {
            res.status(520).json('something wrong, try again');
            console.log(err);
          });
      }
    })
    .catch((err) => {
      res.status(520).json('something wrong, try again');
      console.log(err);
    });
  console.timeEnd('registration');
});

(() => {
  try {
    app.listen(port, host, () => console.log(`start's on http://${host}:${port}`));
  } catch (err) {
    console.log(err);
  }
})();
