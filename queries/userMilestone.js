const db = require("../db/dbConfig.js");

const getAllUserMilestones = async () => {
  try {
    const result = await db.any("SELECT * FROM user_milestone");
    return result;
  } catch (error) {
    return error;
  }
};
const getSingleUserMilestone = async (id) => {
  try {
    const result = await db.one(
      "SELECT * FROM user_milestone WHERE user_milestone_id=$1",
      id
    );
    return result;
  } catch (error) {
    return error;
  }
};
const createUserMilestone = async (data) => {
  try {
    const result = await db.one(
      "INSERT INTO user_milestone (milestone_id, user_id, route_id) VALUES ($1, $2, $3) RETURNING *",
      [data.milestone_id, data.user_id, data.route_id]
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateUserMilestone = async (id, data) => {
  try {
    const result = await db.one(
      "UPDATE user_milestone SET milestone_id=$1, user_id=$2, route_id=$3 WHERE user_milestone_id=$4 RETURNING *",
      [data.milestone_id, data.user_id, data.route_id, id]
    );
    return result;
  } catch (error) {
    return error;
  }
};
const deleteUserMilestone = async (id) => {
  try {
    const result = await db.one(
      "DELETE FROM user_milestone WHERE user_milestone_id=$1 RETURNING *",
      id
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserMilestones,
  getSingleUserMilestone,
  createUserMilestone,
  updateUserMilestone,
  deleteUserMilestone,
};
