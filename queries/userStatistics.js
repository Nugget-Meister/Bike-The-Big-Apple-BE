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

const getUserFromEmail = async (email) => {
  try{
    const result = await db.one(
      "SELECT * FROM user_statistics WHERE user_email=$1",
      email
    );
    return result
  } catch(error){
    return error
  }
}


const createUserStatistics = async (data) => {
  try {
    const result = await db.one(
      "INSERT INTO user_statistics (total_distance, routes_completed, average_elevation,route_avoided,total_checkpoints, user_email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [data.total_distance, data.routes_completed, data.average_elevation, data.route_avoided, data.total_checkpoints, data.user_email]
    );
    return result;
  } catch (error) {
    return error;
  }
};

const updateUserStatistics = async (id, data) => {
  try {
    const result = await db.one(
      "UPDATE user_statistics SET  total_distance=$1, routes_completed=$2, average_elevation=$3, route_avoided=$4, total_checkpoints=$5, user_email=$6 WHERE user_statistics_id=$7 RETURNING *",
      [data.total_distance, data.routes_completed, data.average_elevation, data.route_avoided, data.total_checkpoints, data.user_email, id]
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
  getUserFromEmail
};
