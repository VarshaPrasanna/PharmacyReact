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
            /* image: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }, */
            quantity: {
                type: Number,
                default: 1
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