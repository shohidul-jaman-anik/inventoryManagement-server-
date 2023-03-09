const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types;


// Schema Design
const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required:true,
        ref: "Product"
    },
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        lowercase: true,
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
            values: ['kg', 'liters', 'pcs', 'bag'],
            message: "unit value can't be {VALUE}, must be kg/liters/bg /pcs"
        }
    },
    imageUrls: [{
        type: String,
        required: true,
        validate: {
            validator: (values) => {
                if (!Array.isArray(values)) {
                    return false;
                }
                let isValid = true;
                values.forEach(url => {
                    if (validator.isURL(url)) {
                        isValid = false;
                    }
                })
                return isValid;
            },
            message: "Please provide a valid message"
        }
    }],
    price: {
        type: Number,
        required: true,
        min: [0, "Product price can't be negative"]
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Product quantity can't be negative"]
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinuted"],
            message: "Status can't be {VALUE}"
        }
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    },
    store: {
        name: {
            type: String,
            required: [true, "Please provide a brand name"],
            trim: true,
            lowercase: true,
            emum: {
                values: ['dhaka', 'rajshahi', 'khulna', 'barishal', 'faridpur', 'nowakhali', 'sylhet',],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Store"
        }
    },
    suppliedBy: {
        name: {
            type: String,
            required: [true, "Please provide a supplier name"],
            trim: true,
        },
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    }

}, {
    timestamps: true
})

// mongoose middleware for saving data
stockSchema.pre('save', function (next) {

    if (this.quantity == 0) {
        this.status = 'out-of-stock'
    }

    next()
})


const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock;