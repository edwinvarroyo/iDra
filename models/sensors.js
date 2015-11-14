var mongoose = require('./models');
var Schema = mongoose.Schema;


var measurementSchema = new Schema({

	date: { type: Date, default: Date.now },
	moisture : Number,
	humidity : Number,
	temperature : Number

});

var sensorSchema = new Schema({

  module_id: { type: Number, required: true, unique: true },

  sow_date : { type: Date, default: Date.now },
  maturity_date : Date,

  measurements: [measurementSchema],


});

var Sensor = mongoose.model('sensor', sensorSchema);

module.exports = Sensor ;