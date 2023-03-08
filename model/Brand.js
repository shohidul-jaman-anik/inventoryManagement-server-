const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;


const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a brand name"],
        trim: true,
        maxLength: 100,
        unique: true,
        lowercase: true
    },
    description: String,
    email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
      },
      website: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url"]
      },
    location: String,
    products: [{
        // type: mongoose.Types.ObjectId,
        type: ObjectId,
        ref: "Product"
    }],
    suppliers: [{
        name: String,
        contanctNumber: String,
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    }],
    status: {
        type: String,
        enum: ["active", "in-active"],
        default: "active"
    }
}, {
    tymestamps: true
})

const brand = mongoose.model('Brand', brandSchema)

module.exports = brand;

