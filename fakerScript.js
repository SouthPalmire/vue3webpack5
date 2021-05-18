const faker = require('faker')
const mysql = require('mysql2')
const crypto = require('crypto')
const salt = 'abc'

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'someone',
    password : '53995399',
    database : 'users'
})

if (connection) {
    const users = []
    for ( let i = 0; i < 1000; i++ ) {
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const password = faker.internet.password()
        const email = faker.internet.email()
        const dateOfBirth = faker.date.between('1900-01-01', '2021-01-01')

        const passwordHash = crypto.createHash('sha1', salt).update(password).digest('hex')
        const user = {
            firstName,
            lastName,
            passwordHash,
            email,
            dateOfBirth
        }

        users.push(user)

        connection.query("INSERT INTO user (firstname, lastname, password, email, date_of_birth, registration_date) VALUES (?,?,?,?,?,UNIX_TIMESTAMP())", [firstName, lastName, passwordHash, email, dateOfBirth], function(err, data) {
            if (err) {
                console.log(err)
            }
        })
    }

    const posts = []
    for ( let i = 0; i < users.length; i++ ) {
        const user_id = i + 1
        const randomNumber = Math.ceil(Math.random()*1000)

        for ( let i = 0; i < randomNumber; i++ ) {
            const theme = faker.lorem.sentence()
            const text = faker.lorem.sentence()
            const date = faker.date.between('2001-01-01', '2021-01-01')

            const post = {
                user_id,
                theme,
                text,
                date
            }

            posts.push(post)
        }
    }

    const sortedPosts = posts.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA - dateB
    })

    for (let i = 0; i < sortedPosts.length; i++) {
        const user_id = sortedPosts[i].user_id
        const theme = sortedPosts[i].theme
        const text = sortedPosts[i].text
        const date = sortedPosts[i].date
    
        connection.query("INSERT INTO gb (user_id, theme, date_time, text) VALUES (?,?,?,?)", [ user_id, theme, date, text ], function(err, data) {
            if (err) {
                console.log(err)
            }        
        })
    }

    const comments = []
    for ( let i = 0; i < posts.length; i++ ) {
        const post_id = i + 1
        const date = posts[i].date.toISOString().slice(0, 10)
        const randomNumber = Math.ceil(Math.random()*1000)

        for ( let i = 0; i < randomNumber; i++ ) {
            const user_id = Math.ceil(Math.random()*1000)
            const text = faker.lorem.sentence()
            const dateTime = faker.date.between(date, '2021-01-01')

            const comment = {
                post_id,
                user_id,
                text,
                dateTime
            }

            comments.push(comment)
        }
    }

    const sortedComments = comments.sort((a, b) => {
        const dateA = new Date(a.dateTime)
        const dateB = new Date(b.dateTime)
        return dateA - dateB
    })

    for (let i = 0; i < sortedComments.length; i++) {
        const post_id = sortedComments[i].post_id
        const user_id = sortedComments[i].user_id
        const text = sortedComments[i].text
        const dateTime = sortedComments[i].dateTime
    
        connection.query("INSERT INTO gb_comments (gb_comment_id, gb_user_id, comment_date_time, comment_text) VALUES (?,?,?,?)", [ post_id, user_id, dateTime, text ], function(err, data) {
            if (err) {
                console.log(err)
            }
        })
    }

    console.log('end')
} else console.log('no connection');