const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number,
                required: true
            },
            title:{
                type: String,
                required: true
            },
            image:{
                type: String,
                required: true
            }
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        streetAddress: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
    },
    status: {
        type: String,
        // default: "pending"
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);