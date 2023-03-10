const mongoose = require('mongoose')
const validator = require("validator")
const { ObjectId } = mongoose.Schema.Types;



const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a supplier name"],
        trim: true,
        lowercase: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at list 3 characters"],
        maxLength: [100, "Name is too learge"]
    },
    email: {
        type: String,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
        trim: true,
        lowercase: true,
        unique: true,
    },
    brand: {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true,
        }
    },
    contactNumber: [{
        type: String,
        required: [true, "Please provide a contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid phone  number"
        }
    }],
    emergenceyContactNumber: [{
        type: String,
        required: [true, "Please provide a contact number"],
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value);
            },
            message: "Please provide a valid phone  number"
        }
    }],
    tradeLicenceNumbr: {
        type: Number,

    },
    presentAddress: {
        type: String,
        required: [true, "Please provide your present address"],
    },
    permanentAddress: {
        type: String,
        required: [true, "Please provide your permanent address"],
    },
    location: {
        type: String,
        required: [true, "Please provide a brand name"],
        trim: true,
        lowercase: true,
        emum: {
            values: ['dhaka', 'rajshahi', 'khulna', 'barishal', 'faridpur', 'nowakhali', 'sylhet',],
            message: "{VALUE} is not a correct division"
        }
    },
    imageURL: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url"]
    },
    nationalIdImageURL: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url"]
    },
    status: {
        type: String,
        default: "active",
        enum: ["active", "in-active", "discontinuted"],
    },

}, {
    timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)

module.exports = Supplier;