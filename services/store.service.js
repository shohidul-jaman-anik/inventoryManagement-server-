const Store = require('../model/Store')


module.exports.addStoreServices = async (data) => {
    const result = await Store.create(data)
    return result;
}

module.exports.getStoreService = async (data) => {
    const result = await Store.find({})
    return result;
}

module.exports.getStoreServiceById = async (id) => {
    const result = await Store.findOne({ _id: id })
    return result;
}