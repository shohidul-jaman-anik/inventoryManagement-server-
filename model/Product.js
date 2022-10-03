const mongoose = require("mongoose")

// Schema Design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at list 3 characters"],
        maxLength: [100, "Name is too learge"]
    },
    description: {
        type: String,
        required: true,
        min: [0, "Price can't be negative"],
        max: 100000,
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ['kg', 'liters', 'pcs'],
            message: "unit value can't be {VALUE}, must be kg/liters/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value)
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        },
        message: "Quantity must  be an integer"
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "Discontinuted"],
            message: "User can't be {VALUE}"
        }
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now
    // },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier"
    // },
    // categories: [{
    //   name: {
    //     type: String,
    //     required: true,
    //   },
    //   _id: mongoose.Schema.Types.ObjectId
    // }]
}, {
    timestamps: true
})

// mongoose middleware for saving data
productSchema.pre('save', function (next) {

    if (this.quantity == 0) {
        this.status = 'out-of-stock'
    }

    next()
})


// productSchema.post('save', function (doc, next) {
//     console.log('after saving data')

//     next()
// })


const Product = mongoose.model('Product', productSchema)

module.exports = Product;