const Category = require('../model/Category')


module.exports.getCategoryService = async (req, res, next) => {
    const result = await Category.find({})
    return result;
}

module.exports.addCategoryService = async (req, res, next) => {
    const result = await Category.create(req.body)
    return result;
}

