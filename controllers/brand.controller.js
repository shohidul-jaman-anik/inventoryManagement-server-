const {
    createBrandService,
    getBrandService,
    updateBrandService
} = require("../services/brand.service")

module.exports.createBrand = async (req, res, next) => {
    try {
        const result = await createBrandService(req.body)
        res.status(200).json({
            status: "Success",
            message: "Successfully create the brand",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Couldn't create the brand",
            error: error.message
        })
    }
}

module.exports.getBrands = async (req, res, next) => {
    try {
        const brands = await getBrandService(req.body)
        res.status(200).json({
            status: "Success",
            message: "Successfully get the brands",
            data: brands
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Couldn't get the brands",
            error: error.message
        })
    }
}

module.exports.getBrandById = async (req, res, next) => {
    const { id } = req.params
    try {
        const brand = await getBrandService(id)

        if (!brand) {
            res.status(400).json({
                status: "Fail",
                message: "Couldn't get the brand"
            })
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully create the brand",
            data: brand
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Couldn't get the brand",
            error: error.message
        })
    }
}

module.exports.updateBrand = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await updateBrandService(id, req.body)
        if (!result.nModified) {
            res.status(200).json({
                status: "Fail",
                message: "Couldn't update the brand"
            })
        }
        res.status(200).json({
            status: "Success",
            message: "Successfully update the brand",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "Fail",
            message: "Couldn't update the brand",
            error: error.message
        })
    }
}

