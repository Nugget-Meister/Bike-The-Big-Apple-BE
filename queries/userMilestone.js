const db =  require("../db/dbConfig.js");

const getAllUserMilestones = async () => {
    try{
        const result = await db.any("SELECT * FROM milestone")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleUserMilestone = async (id) => {
    try{
        const result = await db.one("SELECT * FROM milestone WHERE milestone_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createUserMilestone = async (data) => {
    try{
        const result = await db.one("INSERT INTO milestone () VALUES () RETURNING *",[
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
const updateUserMilestone = async (id, data) => {
    try{
        const result = await db.one("UPDATE milestone SET milestone_id=$1, etc. WHERE x=$y RETURNING *", [
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
const deleteUserMilestone = async (id) => {
    try{
        const result = await db.one("DELETE FROM milestone WHERE milestone_id=$1 RETURNING *", id)
        return result
    }
    catch(error){
        return error
    }
}

module.exports = {
    getAllUserMilestones,
    getSingleUserMilestone,
    createUserMilestone,
    updateUserMilestone,
    deleteUserMilestone
}