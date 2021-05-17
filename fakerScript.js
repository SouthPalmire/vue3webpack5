const express = require('express')
const app = express()
const PORT = 1333
const faker = require('faker')
const mysql = require('mysql2')
const crypto = require('crypto')
const salt = 'abc'

// const connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'someone',
//    password : '53995399',
//    database : 'users'
// })



const users = []
for ( let i = 0; i < 4; i++ ) {
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
}

const posts = []
for ( let i = 0; i < users.length; i++ ) {
    const user_id = i + 1
    const randomNumber = faker.datatype.number( max = 4 ) + 1

    for ( let i = 0; i < randomNumber; i++ ) {
        const theme = faker.lorem.sentence()
        const text = faker.lorem.paragraphs()
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

// const sortedPosts = posts.sort((a, b) => {
//     const dateA = new Date(a.date)
//     const dateB = new Date(b.date)
//     return dateA - dateB
// })

const comments = []
for ( i = 0; i < posts.length; i++ ) {
    const post_id = i + 1
    const date = posts[i].date.toISOString().slice(0, 10)
    const randomNumber = faker.datatype.number( max = 4 ) + 1

    for ( i = 0; i < randomNumber; i++ ) {
        const user_id = faker.datatype.number( max = 4 ) + 1
        const text = faker.lorem.paragraph()
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

console.log(comments)

// const startServer = () => {
//    try {
//        connection.connect((err) => {
//            if(err) console.log(err)
//            else console.log('SQL DB connected')
//        })
//        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
//    } catch (error) {
//        console.log(error)
//    }
// }

// startServer()