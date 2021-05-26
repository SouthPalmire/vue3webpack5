const mysql = require('mysql2')

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config)
    }

    query(queryString, queryArgs) {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, queryArgs, (err, data) => {
                if (err) {
                    return reject(err)
                } 
                else resolve(data)
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end( err => {
                if (err) {
                    return reject(err)
                } 
                else resolve()
            })
        })
    }
}

module.exports = Database