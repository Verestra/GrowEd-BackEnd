const { sendResponse, sendError } = require("../helpers/Response");
let { deleteUserModel } = require("../models/DeleteUser");
const DeleteUser = async (req, res) => {
    try {
        const idUser = req.params.id;
        const deleteUser = await deleteUserModel(idUser);
        return sendResponse(res, true, 200, "Delete User Succes",  deleteUser.json);
    } catch (err) {
        return sendError(res, err);
    }
};
module.exports = {
    DeleteUser
};