const { addSupplierService,getSupplierServices, updateSupplierService } = require("../services/supplier.service")


module.exports.addSupplier = async (req, res, next) => {
    console.log(req.body, "dataaaa")
    try {
        const result = await addSupplierService(req.body)

        res.status(200).json({
            status: "success",
            message: "Insert Supplier info successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Supplier couldn't insert successfully",
            error: error.message
        })
    }
}


module.exports.getSupplier = async (req, res) => {
    try {
        const result = await getSupplierServices(req.body)

        res.status(200).json({
            status: "success",
            message: "get supplier successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Couldn't get supplier successfully",
            error: error.message
        })
    }
}


exports.updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateSupplierService(id, req.body)
        res.status(200).json({
            status: "Success",
            message: "Supplier Update Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Supplier couldn't Update Successfully",
            error: error.message
        })
        console.log(error, 'error')
    }
}