const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',


    },
    firstName: {
        type: String,

        ref: 'User'

    },

    prescriptionImage: {
        type: String,
        required: true,
    }
    ,
    prescriptionReplies: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
},

);

module.exports = mongoose.model('Prescription', PrescriptionSchema);