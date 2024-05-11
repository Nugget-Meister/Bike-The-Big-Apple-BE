const pgp = require("pg-promise")();
require("dotenv").config();


const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD || null
};


console.log(cn)

// const db = pgp(cn);
const db = pgp('postgres://btba_sql_user:qdzCpOiwXQaqXNEIUYakQtZa9PvcthfG@dpg-coin4m8l5elc73dafqf0-a/btba_sql')

// console.log(db)

module.exports = db