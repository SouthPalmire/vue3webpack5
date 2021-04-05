// sudo sysctl -w fs.inotify.max_user_watches=100000
const express = require('express')
const PORT = 1337
const mysql = require('mysql2')
// const bcrypt = require('bcryptjs')
// const salt = bcrypt.genSaltSync(33)
const sha1 = require('sha1')
const app = express()

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'someone',
    password : '53995399',
    database : 'users'
})

connection.connect((err) => {
    if(err) console.log(err)
    else console.log('sql connected')
})

app.use(express.json());

app.use(express.static(__dirname + '/dist'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/dist/index.html")
});

app.post('/api*', (req, res) => {    
    const { email, password, firstname, lastname, confirmPasswordCreate, passwordCreate, date_of_birth } = req.body
    const { login, registration } = req.query

    if (login) {
        // const checkPassword = bcrypt.hashSync(password, salt)
        const checkPassword = sha1(password)


        if (password === '') {
            res.send('please enter your password')
            console.log('please enter your password')
        }
        if (email === '') {
            res.send('please enter your e-mail')
            console.log('please enter your e-mail')
        }
        if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) {
            res.send('wrong e-mail')
            console.log('wrong e-mail')
        }

        connection.query("SELECT firstname, lastname, email, date_of_birth  FROM user WHERE `email` = ? AND `password` = ?", [email, checkPassword], function(err, data) {
            if(err) console.log(err)
                res.status(202).json(data)
                console.log('send response')
            }
        )
    }

    if (registration) {
        // const registrationPasswordCreate = bcrypt.hashSync(passwordCreate, salt)
        const registrationPasswordCreate = sha1(passwordCreate)
        const createBirthDate = date_of_birth.split('-').join('')

        if(firstname ==='') {
            res.send('please enter your firstname')
            console.log('please enter your firstname')
        }
        if (lastname ==='') {
            res.send('please enter your lastname')
            console.log('please enter your lastname')
        }
        if (passwordCreate !== confirmPasswordCreate) {
            res.send('wrong password')
            console.log('wrong password')
        }
        if (passwordCreate === '') {
            res.send('please enter your password')
            console.log('please enter your password')
        }
        if (confirmPasswordCreate === '') {
            res.send('please enter your password')
            console.log('please confirm your password')
        }
        if (email === '') {
            res.send('please enter your e-mail')
            console.log('please enter your e-mail')
        }
        if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) {
            res.send('wrong e-mail')
            console.log('wrong e-mail')
        }
        if (date_of_birth === '') {
            res.send('plese enter your date of birth')
            console.log('plese enter your date of birth')
        }

        connection.query("INSERT INTO user (firstname, lastname, password, email, date_of_birth, registration_date) VALUES (?,?,?,?,?,UNIX_TIMESTAMP())", [firstname, lastname, registrationPasswordCreate, email, createBirthDate], function(err, data) {
            if (err) console.log(err)
            else {
                connection.query("SELECT firstname, lastname, email, date_of_birth FROM user WHERE `email` = ? AND `password` = ?", [email, registrationPasswordCreate], function(err, data) {
                if(err) console.log(err)
                res.status(201).send(JSON.stringify(data))
                console.log('accepted')
            })}
        });
    }
})

const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startServer()