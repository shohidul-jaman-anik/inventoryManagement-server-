const Product = require('../model/Product')


exports.getProductService = async (filters, queries) => {
    console.log(filters)
    const products = await Product.find({filters})
        .select(queries.fields)
        .sort(queries.sortBy)
    return products;

    // Our build in instance  method
    // const data = new Product()
    // const products = await data.findUnitByKg()
    // return products;
}



exports.addProductService = async (data) => {
    // const product = new Product(req.body)
    // if (product.quantity == 0) {
    //     product.status = 'out-of-stock'
    // }
    // const result = await product.save()

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
    // console.log(data.ids, 'ids')
    // const result = await Product.updateMany({ _id: data.ids }, { $set: data.data }, { runValidators: true })

    const products = [];
    data.ids.forEach(product => {
        products.push(Product.updateOne({ _id: product.id }, { $set: product.data }))
    })
    const result = await Promise.all(products)

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
