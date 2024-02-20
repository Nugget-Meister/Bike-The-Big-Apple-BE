const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


// Controllers

// app.use('/example', example)


app.get("/", (req, res) => {
    res.send("This is the back-end for Bike the Big Apple.")
})

app.get("*", (req, res) => {
    res.status(404).json({ 
        message: "No such route exists.",
        data: null
    })
})

module.exports = app