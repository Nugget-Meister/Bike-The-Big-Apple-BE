const db =  require("../db/dbConfig.js");

const getAllRoutes = async () => {
    try{
        const result = await db.any("SELECT * FROM route")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleRoute = async (id) => {
    try{
        const result = await db.one("SELECT * FROM route WHERE route_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createRoute = async (data) => {
    try {
        const result = await db.one("INSERT INTO route (route_id, user_id, distance_total, distance_traveled, completed, properties, date_completed) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
            data.route_id,
            data.user_id,
            data.distance_total,
            data.distance_traveled,
            data.completed,
            data.properties,
            data.date_completed
        ]);
        return result;
    } catch (error) {
        return error;
    }
};
const updateRoute = async (id, data) => {
    try{
        const result = await db.one("UPDATE route SET user_id=$1, distance_total=$2, distance_traveled=$3, completed=$4, properties=$5, date_completed=$6 WHERE route_id=$7 RETURNING *", [
            data.route_id,
            data.user_id,
            data.distance_total,
            data.distance_traveled,
            data.completed,
            data.properties,
            data.date_completed,
            id
        ]) 
        return result
    }
    catch(error){
        return error
    }
}
const deleteRoute = async (id) => {
    try{
        const result = await db.one("DELETE FROM route WHERE route_id=$1 RETURNING *", id)
        return result
    }
    catch(error){
        return error
    }
}

module.exports = {
    getAllRoutes,
    getSingleRoute,
    createRoute,
    updateRoute,
    deleteRoute
}