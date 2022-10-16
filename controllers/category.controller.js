const { addCategoryService, getCategoryService } = require("../services/category.service")


module.exports.getCategory = async (req, res) => {
    try {
        const result = await getCategoryService()

        res.status(200).json({
            status: "fail",
            message: "Get data successfully",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get category",
            data: result
        })
    }
}


module.exports.addCategory = async (req, res) => {
    try {
        const result = await addCategoryService(req.body)

        res.status(200).json({
            status: "fail",
            message: "Insert data successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't category insert",
            error: error.message
        })
    }
}



