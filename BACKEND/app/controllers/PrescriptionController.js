
const Prescription = require('../models/Prescription')

const PrescriptionController = {

    /* Post a new prescription */
    async post_prescription(req, res) {
        const newPrescription = new Prescription(req.body);
        try {
            const savedPrescription = await newPrescription.save();
            res.status(201).json({
                type: "success",
                message: "newPrescription added successfully",
                savedPrescription
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
    async update_prescription(req, res) {
        const existing = await Prescription.findById(req.params.id);
        if (!existing) {
            res.status(404).json({
                type: "error",
                message: "Prescription doesn't exists"
            })
        } else {
            try {
                const updatedPrescription = await Prescription.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                    { new: true }
                );
                res.status(200).json({
                    type: "success",
                    message: "Prescription updated successfully",
                    updatedPrescription
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
    async get_prescriptions(req, res) {
        try {
            const pre = await Prescription.find();
            res.status(200).json({
                type: "success",
                pre
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
    async get_prescription(req, res) {
        try {
            const pre = await Prescription.findOne({ userId: req.params.userId });
            if (!pre) {
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



    // //Delete all messages
    // async delete_messages(req, res) {
    //     try {
    //         await Message.deleteMany();
    //         res.status(200).json({
    //             type: "success",
    //             message: "Messages has been deleted successfully"
    //         });
    //     } catch (err) {
    //         res.status(500).json({
    //             type: "error",
    //             message: "Something went wrong please try again",
    //             err
    //         })
    //     }
    // }



    /* Add reply */


};

module.exports = PrescriptionController;