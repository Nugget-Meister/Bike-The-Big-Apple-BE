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
    try{
        const result = await db.one("INSERT INTO route () VALUES () RETURNING *",[
            // data. ,
            // data. ,
            // data. ,
            // data.,
            // data.,
            // data.,
            // data.,
        ])
        return result
    }
    catch(error){
        return error
    }
}
const updateRoute = async (id, data) => {
    try{
        const result = await db.one("UPDATE route SET route_id=$1, etc. WHERE x=$y RETURNING *", [
             // data. ,
            // data. ,
            // data. ,
            // data.,
            // data.,
            // data.,
            // data.,
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