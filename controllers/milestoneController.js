const express = require("express");

const milestones = express.Router();

const {
  getAllMilestones,
  getSingleMilestone,
  createMilestone,
  updateMilestone,
  deleteMilestone,
} = require("../queries/milestone.js");

milestones.get("/", async (req, res) => {
  const result = await getAllMilestones();
  process.stdout.write("GET Request recieved for ALL Milestones... ");
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

milestones.get("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(`GET Request received for milestones at id ${id}... `);
  const result = await getSingleMilestone(id);
  if (result) {
    console.log(`Found ${result.name}`);
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

milestones.post("/", async (req, res) => {
  process.stdout.write("POST Request received for 'milestones'... ");
  const result = await createMilestone(req.body);
  console.log(result);
  if (result.milestone_id) {
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
milestones.put("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(`PUT Request received for milestones at id ${id}... `);
  const result = await updateMilestone(id, req.body);
  if (result.milestone_id) {
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
milestones.delete("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(
    `DELETE Request received for milestones at id ${id}... `
  );
  const result = await deleteMilestone(id);
  if (result.milestone_id) {
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

module.exports = milestones;
