const { updateProfilePicModel } = require('../models/User')
const { sendResponse, sendError, writeError, writeResponsePaginated } = require("../helpers/Response");

const updateProfilePic = async (req, res) => {
    try {
        const {files} = req
        if (files) {
            console.log(files)
            const newPathFile = files[0].filename;
            console.log(newPathFile)
            req.body.image = newPathFile;
          }
        let {id_user} = req.res.locals.userdata
        let { image } = req.body
        await updateProfilePicModel(image, id_user)
        return sendResponse(res, true, 200, ("Success Add Profile Picture"))
    } catch (err) {
        console.log(err)
        return sendError(res, err)
    }
}

module.exports = {
    updateProfilePic
}