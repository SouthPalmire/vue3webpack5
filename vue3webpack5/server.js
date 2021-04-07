// sudo sysctl -w fs.inotify.max_user_watches=100000
const express = require('express')
const PORT = 1337
const mysql = require('mysql2')
const crypto = require('crypto')
const salt = 'abc'
const app = express()

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'someone',
    password : '53995399',
    database : 'users'
})

app.use(express.json());

app.use(express.static(__dirname + '/dist'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/", function (request, response) {
    response.sendFile(__dirname + '/dist/index.html')
});

app.post('/api*', (req, res) => {    
    const { email, password, firstname, lastname, passwordCreate, date_of_birth } = req.body
    const { login, registration } = req.query

    if (login) {
        const checkPassword = crypto.createHmac('sha1', salt).update(password).digest('hex')

        connection.query("SELECT firstname, lastname, email, date_of_birth  FROM user WHERE `email` = ? AND `password` = ?", [email, checkPassword], function(err, data) {
            if (err) {
                res.status(520).json('something wrong, try again')
                console.log(err)
            }
            else if(data.length) {
                res.status(202).json(data)
                console.log('send response')
            } else {
                res.status(404).json('wrong email or password')
                console.log('wrong email or password')
            }
        })
    }

    if (registration) {
        const registrationPasswordCreate = crypto.createHmac('sha1', salt).update(passwordCreate).digest('hex')
        const createBirthDate = date_of_birth.split('-').join('')

        connection.query("SELECT * FROM user WHERE `email` = ?", [email], function(err, data) {
            if (err) {
                res.status(520).json('something wrong, try again')
                console.log(err)
            }
            else if(data.length) {
                res.status(400).json('email already exist')
                console.log('email already exist')
            } else {
                connection.query("INSERT INTO user (firstname, lastname, password, email, date_of_birth, registration_date) VALUES (?,?,?,?,?,UNIX_TIMESTAMP())", [firstname, lastname, registrationPasswordCreate, email, createBirthDate], function(err, data) {
                    if (err) {
                        res.status(520).json('something wrong, try again')
                        console.log(err)
                    } else {
                        connection.query("SELECT firstname, lastname, email, date_of_birth FROM user WHERE `email` = ? AND `password` = ?", [email, registrationPasswordCreate], function(err, data) {
                            if(err) {
                                res.status(520).json('something wrong, try again')
                                console.log(err)
                            } else {
                                res.status(201).json(data)
                                console.log('creating user')
                            }
                        })
                    }
                })
            }
        })
    }
})

const startServer = () => {
    try {
        connection.connect((err) => {
            if(err) console.log(err)
            else console.log('sql connected')
        })
        app.listen(PORT, () => console.log(`started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startServer()