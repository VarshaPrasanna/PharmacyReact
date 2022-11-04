const Prescription = require('../models/Prescription')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

const upload = multer({ storage: storage });


const PrescriptionController = {

    /* Post a new prescription */
    async post_prescription(req, res) {
        const imageUrl = req.file.path
        const userId = req.body.userId
        const firstName = req.body.firstName

        console.log(req.file, imageUrl, req.body)



        const newPrescription = new Prescription({ userId: userId, firstName: firstName, imageUrl: imageUrl });
        try {
            const savedPrescription = await newPrescription.save();
            res.status(201).json({
                type: "success",
                message: "newPrescription added successfully",
                savedPrescription,

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
            const pre = await Prescription.find({ userId: req.params.userId });
            if (!pre) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    pre
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


    /* delete prescription */
    async delete_prescription(req, res) {
        try {
            await Prescription.findByIdAndDelete(req.params.id)
            res.status(200).json({
                type: "success",
                message: "prescription has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },
    //Delete all pre
    async delete_prescriptions(req, res) {
        try {
            await Prescription.deleteMany();
            res.status(200).json({
                type: "success",
                message: "Prescription has been deleted successfully"
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

module.exports = PrescriptionController;