var mongoose = require('mongoose');

var Pieces = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: true
    },
    job : {
      type : mongoose.Schema.Types.ObjectId, ref:'Job', required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pieces', Pieces);
