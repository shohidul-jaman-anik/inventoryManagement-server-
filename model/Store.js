const mongoose = require('mongoose')
// const validator = require("validator")
const { ObjectId } = mongoose.Schema.Types


const storeSchema = mongoose.Schema({
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
    description: String,
    status: {
        type: String,
        enum: ["active", "in-active"],
        default: "active"
    },
    manager: {
        name: String,
        contactNumber: String,
        id: {
            type: ObjectId,
            ref: "User"
        }
    },
}, {
    tymestamps: true
})

const Store = mongoose.model('Brand', storeSchema)

module.exports = Store;