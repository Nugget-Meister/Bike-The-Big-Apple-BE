const db = require("../db/dbConfig.js");

const getAllUserStatistics = async () => {
  try {
    const result = await db.any("SELECT * FROM user_statistics");
    return result;
  } catch (error) {
    return error;
  }
};
const getSingleUserStatistics = async (id) => {
  try {
    const result = await db.one(
      "SELECT * FROM user_statistics WHERE user_statistics_id=$1",
      id
    );
    return result;
  } catch (error) {
    return error;
  }
};
const createUserStatistics = async (data) => {
  try {
    const result = await db.one(
      "INSERT INTO user_statistics (total_distance, routes_completed, average_elevation,route_avoided, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.total_distance, data.routes_completed, data.average_elevation, data.route_avoided, data.user_id]
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateUserStatistics = async (id, data) => {
  try {
    const result = await db.one(
      "UPDATE user_statistics SET  total_distance=$1, routes_completed=$2, average_elevation=$3, route_avoided=$4, user_id=$5,  WHERE user_statistics_id=$6 RETURNING *",
      [data.total_distance, data.routes_completed, data.average_elevation, data.route_avoided, data.user_id, id]
    );
    return result;
  } catch (error) {
    return error;
  }
};

const deleteUserStatistics = async (id) => {
  try {
    const result = await db.one(
      "DELETE FROM user_statistics WHERE user_statistics_id=$1 RETURNING *",
      id
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserStatistics,
  getSingleUserStatistics,
  createUserStatistics,
  updateUserStatistics,
  deleteUserStatistics,
};
