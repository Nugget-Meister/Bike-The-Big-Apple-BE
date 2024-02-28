const db =  require("../db/dbConfig.js");

const getAllMilestones = async () => {
    try{
        const result = await db.any("SELECT * FROM milestone")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleMilestone = async (id) => {
    try{
        const result = await db.one("SELECT * FROM milestone WHERE milestone_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createMilestone = async (data) => {
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
const updateMilestone = async (id, data) => {
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
const deleteMilestone = async (id) => {
    try{
        const result = await db.one("DELETE FROM milestone WHERE milestone_id=$1 RETURNING *", id)
        return result
    }
    catch(error){
        return error
    }
}

module.exports = {
    getAllMilestones,
    getSingleMilestone,
    createMilestone,
    updateMilestone,
    deleteMilestone
}