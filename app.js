const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Controllers

const milestonesController = require('./controllers/milestoneController');
const routesController = require('./controllers/routesController');
const userStatisticsController = require('./controllers/userStatisticsController');
const userMilestonesController = require('./controllers/userMilestoneController')

// Controller Use app.use('/example', example)
app.use('/milestones', milestonesController);
app.use('/routes', routesController);
app.use('/userMilestones', userMilestonesController);
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