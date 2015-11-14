var mongoose;

mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iDra');

module.exports = mongoose;
