var mongoose = require('mongoose');

var Jobs = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    slogan: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    pieces : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Pieces'}],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Jobs', Jobs);
