const db =  require("../db/dbConfig.js");

const getAllUsers = async () => {
    try{
        const result = await db.any("SELECT * FROM user")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleUser = async (id) => {
    try{
        const result = await db.one("SELECT * FROM user WHERE user_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createUser = async (data) => {
    try{
        const result = await db.one("INSERT INTO user () VALUES () RETURNING *",[
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
const updateUser = async (id, data) => {
    try{
        const result = await db.one("UPDATE user SET user_id=$1, etc. WHERE x=$y RETURNING *", [
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
const deleteUser = async (id) => {
    try{
        const result = await db.one("DELETE FROM user WHERE user_id=$1 RETURNING *", id)
        return result
    }
    catch(error){
        return error
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}