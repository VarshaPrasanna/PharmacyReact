const Order = require('../models/Order');
const Cart = require('../models/Cart')

const OrderController = {

    /* get all orders (only admin) */
    async get_orders(req, res) {
        try {
            const orders = await Order.find();
            res.status(200).json({
                type: "success",
                orders
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },
    // get order
    async get_order(req, res) {
        try {
            const orders = await Order.findById(req.params.id);
            if (!orders) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    orders
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* get user's orders */
    async user_order(req, res) {
        try {
            const orders = await Order.find({ userId: req.params.userId });
            if (!orders) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    orders
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* add order */
    async create_order(req, res) {
        const newOrder = new Order(req.body);
        try {
            const savedOrder = await newOrder.save();
            res.status(201).json({
                type: "success",
                message: "Order created successfully",
                savedOrder
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    /* update order */
    async update_order(req, res) {
        try {
            const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {

                $set: req.body
            }, { new: true });
            res.status(200).json({
                type: "success",
                message: "Order updated successfully",
                updatedOrder
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },
    /* Most sold products*/


    async get_popular(req, res) {
        const _id = await Order.findById(req.params.id);

        try {
            const data = await Order.aggregate([{
                $unwind: {
                    path: "$products"
                }
            },
            {
                $lookup:
                {
                    from: "products",
                    localField: "products.productId",
                    foreignField: "_id",
                    as: "product_info"
                }
            },
            {
                $group: {
                    _id: "$products.productId",
                    quantity: {
                        $sum: "$products.quantity"
                    },
                    totalSold: {
                        $sum: 1
                    },
                    product: {
                        $last: "$product_info"
                    }
                }
            },
            {
                $sort: {
                    "totalSold": -1
                }
            },
            {
                $limit: 4
            }
            ])
            /* const data = await Order.aggregate([
                {
                    $unwind: {
                        path: "$products"
                    }
                }, 
                {
                    $group: {
                        _id: "$products.productId",
                        quantity: {
                            $sum: "$products.quantity"
                        },
                        totalSold: {
                            $sum: 1
                        },
                        //title: "$products.title",
                       // image: "$products.image",
                    }
                },
                {
                    $sort: {
                        "totalSold": -1
                    }
                },
                {
                    $limit: 5
                }
            ]);
 */
            res.status(200).json({
                type: "success",
                data
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    /* delete order */
    async delete_order(req, res) {
        try {
            await Order.findOneAndDelete(req.params.id);
            res.status(200).json({
                type: "success",
                message: "Order has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }
};

module.exports = OrderController;