const mysql = require('mysql')

// Database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'happy-pizza',
    port:3307
});

// Check DB
db.connect(err=>{
    if (err) {
        console.log(err)
    }
    console.log('Database connected')
})

module.exports = db