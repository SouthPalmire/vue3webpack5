const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "someone",
  database: "users",
  password: "53995399"
})

let massive = []

const promiseFunction = new Promise((resolve, reject) => {
    connection.query("SELECT * FROM user", (err, data) => {
        if (err) {
            reject(err)
        } else resolve(data)
    })
    connection.end()
});

promiseFunction.then(data => massive = data).finally(() => console.log(massive))

(async () => {
    const getData = await promiseFunction
    massive = getData
    console.log(massive);
})()