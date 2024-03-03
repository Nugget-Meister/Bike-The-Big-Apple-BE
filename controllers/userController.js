const express = require("express");

const user = express.Router();

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../queries/user.js");

user.get("/", async (req, res) => {
  const result = await getAllUsers();
  process.stdout.write("GET Request recieved for ALL Users... ");
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

user.get("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(`GET Request received for Users at id ${id}... `);
  const result = await getSingleUser(id);
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

user.post("/", async (req, res) => {
  process.stdout.write("POST Request received for 'Users'... ");
  const result = await createUser(req.body);
  console.log(result);
  if (result.user_id) {
    console.log("Success");
    res.status(200).json({
      message: "Added data to User table",
      data: result,
    });
  } else {
    console.log("Failed.");
    res.status(500).json({
      message: "Failed to add data to User table",
      data: null,
    });
  }
});
user.put("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(`PUT Request received for Users at id ${id}... `);
  const result = await updateUser(id, req.body);
  if (result.route_id) {
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
user.delete("/:id", async (req, res) => {
  const { id } = req.params;
  process.stdout.write(`DELETE Request received for Users at id ${id}... `);
  const result = await deleteUser(id);
  if (result.route_id) {
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

module.exports = user;
