const mongoose = require('mongoose');

const DboardSchema = new mongoose.Schema({
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'User',


    },
    firstName: {
        type: String,

        ref: 'User'

    },

    message: {
        type: String,
        required: true,
    }
    ,
    replies: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
        trim: true
    }
},

);

module.exports = mongoose.model('Message', DboardSchema);