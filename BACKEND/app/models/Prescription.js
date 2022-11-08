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

    }
    ,
    imageUrl: {
        type: String,

    },
    prescriptionReplies: [],

    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
},

);

module.exports = mongoose.model('Prescription', PrescriptionSchema);