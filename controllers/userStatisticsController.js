const express = require("express");

const userStatistics = express.Router();

const {
  getAllUserStatistics,
  getSingleUserStatistics,
  createUserStatistics,
  updateUserStatistics,
  deleteUserStatistics,
} = require("../queries/userStatistics.js");

userStatistics.get("/", async (req, res) => {
  const result = await getAllUserStatistics();
  process.stdout.write("GET Request recieved for ALL User Statistics... ");
  if (result) {
    if (result.severity) {
      console.log("Error detected.");
      res.status(500).json({
        message: "BAD",
        data: result,
      });
    } else {
      console.log("Attempting to dispense.");
      if (result.length == 0) {
        console.log(`Warning - Database returned no results.`);
      }
      res.status(200).json({
        message: "OK",
        data: result,
      });
    }
  } else {
    console.log("500 - Unable to access SQL server.");
    res.status(500).json({
      message: "Unable to access server.",
      data: null,
    });
  }
});

userStatistics.get("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(
    `GET Request received for user_statistics at id ${id}... `
  );
  const result = await getSingleUserStatistics(id);
  if (result) {
    console.log(`Found ${result.user_id}`);
    res.status(200).json({
      message: "OK",
      data: result,
    });
  } else {
    console.log(`ERROR - No item found with id ${id}`);
    res.status(500).json({
      message: "No item found.",
      data: null,
    });
  }
});

userStatistics.post("/", async (req, res) => {
  process.stdout.write("POST Request received for 'user_statistics'... ");
  const result = await createUserStatistics(req.body);
  console.log(result);
  if (result.total_distance) {
    console.log("Success");
    res.status(200).json({
      message: "Added data to table",
      data: result,
    });
  } else {
    console.log("Failed.");
    res.status(500).json({
      message: "Failed to add data to table",
      data: null,
    });
  }
});

userStatistics.put("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(
    `PUT Request received for user_statistics at id ${id}... `
  );
  const result = await updateUserStatistics(id, req.body);
  if (result.total_distance) {
    console.log(`Wrote data at id ${id}`);
    res.status(200).json({
      message: `Successfully changed data at id ${id}`,
      data: result,
    });
  } else {
    console.log(`Failed to write at id ${id}`);
    res.status(404).json({
      message: `Failed to change data at ${id}. May not exist`,
      data: null,
    });
  }
});

userStatistics.delete("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(
    `DELETE Request received for user_statistics at id ${id}... `
  );
  const result = await deleteUserStatistics(id);
  if (result.user_id) {
    console.log("Success!");
    res.status(200).json({
      message: `Deleted item at id ${id}`,
      data: result,
    });
  } else {
    console.log("Failed");
    console.log(result);
    res.status(404).json({
      message: `Item with id ${id} not found`,
      data: null,
    });
  }
});

module.exports = userStatistics;
