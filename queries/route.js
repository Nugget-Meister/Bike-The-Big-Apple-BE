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
        const result = await db.one("INSERT INTO route (starting_destination_latitude, starting_destination_longitude,ending_destination_latitude,ending_destination_longitude) VALUES ($1,$2,$3,$4) RETURNING *", [
            data.starting_destination_latitude,
            data.starting_destination_longitude,
            data.ending_destination_latitude,
            data.ending_destination_longitude
        ]);
        return result;
    } catch (error) {
        return error;
    }
};
const updateRoute = async (id, data) => {
    try{
        const result = await db.one("UPDATE route SET starting_destination=$1, ending_destination=$2 WHERE route_id=$3 RETURNING *", [
            data.starting_destination,
            data.ending_destination,
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