const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
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
},
    { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);