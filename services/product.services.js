const Product = require('../model/Product')


exports.getProductService = async (filters, queries) => {
    const products = await Product.find({}).select(queries.fields).sort(queries.sortBy)
    return products;
}

exports.addProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}


exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    // const product =await Product.findById(productId)
    // const result = await product.set(data).save()

    return result;
}

exports.bulkUpdateProductService = async (data) => {
    console.log(data.ids, 'ids')
    const result = await Product.updateMany({ _id: data.ids }, { $set: data.data }, { runValidators: true })

    // const products = [];
    // data.ids.forEach(product => {
    //     products.push(product.updateOne({ _id: product.id }, product.data))
    // })
    // const result = await Promise.all(products)

    console.log(result)
    return result;
}

exports.deleteProductService = async (id) => {
    const result = await Product.deleteOne({ _id: id })

    return result
}

exports.bulkDeleteProductService = async (ids) => {
    console.log(data.ids, 'ids')
    const result = await Product.deleteMany({})

    console.log(result)
    return result;
}
