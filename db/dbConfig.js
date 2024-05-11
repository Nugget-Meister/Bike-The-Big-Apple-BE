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
const db = pgp(process.env.PG_URL)

// console.log(db)

module.exports = db