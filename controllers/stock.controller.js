const {
    getStocksService,
    addStockService,
    updateStockService,
    bulkUpdateStockService,
    deleteStockService,
    bulkDeleteStocksService
} = require("../services/stock.service")


module.exports.getStocks = async (req, res, next) => {
    try {

        // query
        let filters = { ...req.query }

        // Sort , Page, Limit ==> exclude
        const excludeField = ['sort', 'page', 'limit',]
        excludeField.forEach(field => delete filters[field])

        // console.log('orginal object', req.query)
        // console.log('queryObject', filters)

        let filterstring = JSON.stringify(filters)
        filterstring = filterstring.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`)

        filters = JSON.parse(filterstring)


        const queries = {}

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
            console.log(sortBy)
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
            console.log(fields)
        }

        const products = await getStocksService(filters, queries)
        res.status(200).json({
            status: "Success",
            message: "Stock find Successfully",
            data: products
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Stock couldn't found Successfully",
            error: error.message
        })
    }
}



module.exports.addStock = async (req, res, next) => {
    try {
        const result = await addStockService(req.body)

        res.status(200).json({
            status: "Success",
            message: "Stock insert Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Stock couldn't insert Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateStockService(id, req.body)
        res.status(200).json({
            status: "Success",
            message: "Stock Update Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Stock couldn't Update Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.bulkUpdatestocks = async (req, res) => {
    try {
        const result = await bulkUpdateStockService(req.body)

        res.status(200).json({
            status: "Success",
            message: "Stocks Update Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Stocks couldn't Update Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}

exports.deleteStock = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deleteStockService(id)

        if (!result.deletedCount) {
            return res.status(400).json({
                status: "fail",
                error: "Could't delete the stocks"
            })
        }
        res.status(200).json({
            status: "Success",
            message: "Stock Delete Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Stock couldn't Delete Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}


exports.bulkDeleteStocks = async (req, res) => {
    try {
        const result = await bulkDeleteStocksService(req.body.ids)

        res.status(200).json({
            status: "Success",
            message: "Successfully given the deleted Stocks",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Couldn't delete the given Stocks",
            error: error.message
        })
        console.log(error, 'error')
    }
}



