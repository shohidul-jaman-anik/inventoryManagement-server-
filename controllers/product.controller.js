const {
    getProductService,
    addProductService,
    updateProductService,
    bulkUpdateProductService,
    deleteProductService,
    bulkDeleteProductService
} = require('../services/product.services')

module.exports.getProducts = async (req, res, next) => {
    try {
        // const products = await Product
        //     .where('name').equals(/\w/)
        //     .where('quantity').gt(100).lt(600)
        //     .limit(4).sort({ quantity: -1 })

        // const product = await Product.findById('633a98c76c231504cc092379')

        const products = await getProductService()

        res.status(200).json({
            status: "Success",
            message: "Data find Successfully",
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data couldn't found Successfully",
            error: error.message
        })
    }
}

module.exports.addProduct = async (req, res, next) => {
    try {

        // const product = new Product(req.body)
        // console.log(product, 'hellooooo')
        // if (product.quantity == 0) {
        //     product.status = 'out-of-stock'
        // }
        // const result = await product.save()

        const result = await addProductService(req.body)

        res.status(200).json({
            status: "Success",
            message: "Data insert Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data couldn't insert Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body)
        res.status(200).json({
            status: "Success",
            message: "Data Update Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data couldn't Update Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.bulkUpdateProduct = async (req, res) => {
    try {
        const result = await bulkUpdateProductService(req.body)

        res.status(200).json({
            status: "Success",
            message: "Data Update Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data couldn't Update Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deleteProductService(id)

        if (!result.deletedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Could't delete the product"
            })
        }
        res.status(200).json({
            status: "Success",
            message: "Data Delete Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Data couldn't Delete Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}


exports.bulkDeleteProduct = async (req, res) => {
    try {
        const result = await bulkDeleteProductService(req.body.ids)

        res.status(200).json({
            status: "Success",
            message: "Successfully given the deleted products",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Couldn't delete the given products",
            error: error.message
        })
        console.log(error, 'error')
    }
}