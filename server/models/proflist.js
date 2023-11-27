let mongoose = require('mongoose');

// create a model class
let profModel = mongoose.Schema({
        Name:String,
        Priority:String,
        Notes:String,
    },
    {
        collection:"prof-list"
    });
module.exports = mongoose.model('prof',profModel);
