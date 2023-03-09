const Brand = require('../model/Brand')

exports.createBrandService = async (data) => {
    const result = await Brand.create(data)
    return result;
}

exports.getBrandService = async () => {
    const Brands = await Brand.find({}).populate("products")
    return Brands;
}

exports.getBrandByIdService = async (id) => {
    const brand = await Brand.findOne({ _id: id })
    return brand;
}

exports.updateBrandService = async (id, data) => {
    const result = await Brand.updateOne({ _id: id }, data, { runValidators: true })
    return result;
}

