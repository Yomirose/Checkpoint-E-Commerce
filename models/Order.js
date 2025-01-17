const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products:[{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1
        },
    }],
    price: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
},
 {timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema)