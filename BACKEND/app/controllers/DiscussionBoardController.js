const Message = require('../models/DiscussionBoard');

const DiscussionBoardController = {

    /* Post a new message */
    async post_message(req, res) {
        const newMessage = new Message(req.body);
        try {
            const savedMessage = await newMessage.save();
            res.status(201).json({
                type: "success",
                message: "newMessage added successfully",
                savedMessage
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    //Update message
    async update_message(req, res) {
        const existing = await Message.findById(req.params.id);
        if(!existing){
            res.status(404).json({
                type: "error",
                message: "Message doesn't exists"
            })
        } else {
            try {
                const updatedMessage = await Message.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                    { new: true }
                );
                res.status(200).json({
                    type: "success",
                    message: "Message updated successfully",
                    updatedMessage
                })
            } catch (err) {
                res.status(500).json({
                    type: "error",
                    message: "Something went wrong please try again",
                    err
                })
            }
        }
    },

    /* Post a  reply */
    /* async post_reply(req, res) {
        const reply = new Message(req.body);
        try {
            const savedreply = await reply.save();
            res.status(201).json({
                type: "success",
                message: "Reply added successfully",
                savedreply
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }, */

    /* get all messages (only admin) */
    async get_messages(req, res) {
        try {
            const msg = await Message.find();
            res.status(200).json({
                type: "success",
                msg
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* get user messages */
    async get_message(req, res) {
        try {
            const msg = await Message.findOne({ userId: req.params.userId });
            if (!msg) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    msg
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



    //Delete all messages
    async delete_messages(req, res) {
        try {
            await Message.deleteMany();
            res.status(200).json({
                type: "success",
                message: "Messages has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    }



    /* Add reply */


};

module.exports = DiscussionBoardController;