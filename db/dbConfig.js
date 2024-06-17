const pgp = require("pg-promise")();
require("dotenv").config();

const cn = process.env.PG_URL ? {
    connectionString: process.env.PG_URL,
    max: 30,
    ssl: true
} : {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    // password: process.env.PG_PASSWORD || null
};

const db = pgp(cn);

console.log('postgres: ',cn)

module.exports = db