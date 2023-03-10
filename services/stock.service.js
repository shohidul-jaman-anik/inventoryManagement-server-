const Product = require('../model/Product')
const Brand = require('../model/Brand')


exports.getStocksService = async (filters, queries) => {
    console.log(filters)
    // const products = await Product.find({ filters })
    //     .select(queries.fields)
    //     .sort(queries.sortBy)
    const products = await Product.find()
    return products;

    // Our build in instance  method
    // const data = new Product()
    // const products = await data.findUnitByKg()
    // return products;
}



exports.addStockService = async (data) => {
    // const product = new Product(req.body)
    // if (product.quantity == 0) {
    //     product.status = 'out-of-stock'
    // }
    // const result = await product.save()

    const product = await Product.create(data)
    const { _id: productId, brand } = product;

    const res = await Brand.updateOne(
        { _id: brand.id },
        { $push: { products: productId } }
    )
    console.log(res.nModified)
    return product;
}


exports.updateStockService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    // const product =await Product.findById(productId)
    // const result = await product.set(data).save()

    return result;
}

exports.bulkUpdateStockService = async (data) => {
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

exports.deleteStockService = async (id) => {
    const result = await Product.deleteOne({ _id: id })

    return result
}

exports.bulkDeleteStocksService = async (ids) => {
    console.log(data.ids, 'ids')
    const result = await Product.deleteMany({ ids })

    console.log(result)
    return result;
}
