const { addStoreServices, getStoreService, getStoreServiceById } = require("../services/store.service")


module.exports.addStore = async (req, res, next) => {
    console.log(req.body, "dataaaa")
    try {
        const result = await addStoreServices(req.body)

        res.status(200).json({
            status: "success",
            message: "Insert Store info successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Store info couldn't insert successfully",
            error: error.message
        })
    }
}


module.exports.getStore = async (req, res) => {
    try {
        const result = await getStoreService(req.body)

        res.status(200).json({
            status: "success",
            message: "get store successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get store successfully",
            error: error.message
        })
    }
}

module.exports.getStoreById = async (req, res) => {
    const { id } = (req.params)
    try {
        const result = await getStoreServiceById(id)
        res.status(200).json({
            status: "Success",
            message: "Couldn't get store by id successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "get store by id",
            error: error.message
        })
    }
}