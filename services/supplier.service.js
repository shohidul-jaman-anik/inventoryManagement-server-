const Supplier = require("../model/Supplier");

module.exports.addSupplierService = async (data) => {
    const result = await Supplier.create(data)
    return result;
}

module.exports.getSupplierServices= async (data) => {
    const result = await Supplier.find({})
    return result;
}

exports.updateSupplierService = async (id, data) => {
    const result = await Supplier.updateOne({ _id: id }, data, { runValidators: true })
    return result;
}
