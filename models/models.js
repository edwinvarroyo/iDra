var mongoose;

mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/idradb');

module.exports = mongoose;
