const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


// Controllers

const milestoneController = require('./controllers/milestoneController');
const routesController = require('./controllers/routesController');
const userStatisticsController = require('./controllers/userStatisticsController');
const userMilestoneController = require('./controllers/userMilestoneController')

// Controller Use app.use('/example', example)
app.use('/milestone', milestoneController);
app.use('/route', routesController);
app.use('/userMilestone', userMilestoneController);
app.use('/userStatistics', userStatisticsController);

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