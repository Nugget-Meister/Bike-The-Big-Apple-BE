const db =  require("../db/dbConfig.js");

const getAllUsers = async () => {
    try{
        const result = await db.any("SELECT * FROM app_user")
        return result
    }
    catch(error){
        return error
    }
}
const getSingleUser = async (id) => {
    try{
        const result = await db.one("SELECT * FROM app_user WHERE user_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}
const createUser = async (data) => {
    try{
        const result = await db.one("INSERT INTO app_user (user_id, first_name, last_name, email) VALUES ($1,$2,$3,$4) RETURNING *",[
            data.user_id,
            data.first_name,
            data.last_name,
            data.email,
        ])
        return result
    }
    catch(error){
        return error
    }
}
const updateUser = async (id, data) => {
    try {
        const result = await db.one("UPDATE app_user SET first_name=$1, last_name=$2, email=$3 WHERE user_id=$4 RETURNING *", [
            data.first_name,
            data.last_name,
            data.email,
            id
        ]);
        return result;
    } catch (error) {
        return error;
    }
};
const deleteUser = async (id) => {
    try{
        const result = await db.one("DELETE FROM app_user WHERE user_id=$1 RETURNING *", id)
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