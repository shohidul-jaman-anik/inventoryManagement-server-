const Product = require('../model/Product')


exports.getProductService = async () => {
    const products = await Product.find()
    return products;
}

exports.addProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}


exports.updateProductService = async (productId, data) => {
    const product = await Product.updateOne({ _id: productId }, { $set: data })
    return product;
}





