var mongoose = require('./models');
var Schema = mongoose.Schema;


var measurementSchema = new Schema({

	date: { type: Date, default: Date.now },
	moisture : Float,
	humidity : Float,
	temperature : Float

});

var sensorSchema = new Schema({

  module_id: { type: int, required: true, unique: true },

  sow_date : { type: Date, default: Date.now },
  maturity_date : Date,

  measurements: [measurementSchema],


});

var Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor ;