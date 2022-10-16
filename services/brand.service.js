const Brand = require('../model/Brand')

exports.createBrandService = async (data) => {
    const result = await Brand.create(data)
    return result;
}

exports.getBrandService = async () => {
    const Brands = await Brand.find({}).select(' -_id')
    return Brands;
}

exports.getBrandByIdService = async (id) => {
    const Brand = await Brand.findOne({ _id: id })
    return Brand;
}

exports.updateBrandService = async (id, data) => {
    const result = await Brand.updateOne({ _id: id }, data, { runValidators: true })
    return result;
}

