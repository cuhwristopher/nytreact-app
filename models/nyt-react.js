var mongoose = require("mongoose");

var nytSchema = new mongoose.Schema({
    articleTitle: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    articleUrl: {
        type: String
    },
});