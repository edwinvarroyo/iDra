var mongoose = require('./models');
var Schema = mongoose.Schema;


var measurementSchema = new Schema({
	date: { type: Date, default: Date.now },
	moisture : Number,
	humidity : Number,
	temperature : Number,
	ph: Number,
	height: Number
});

var sensorSchema = new Schema({

  module_id: { type: Number, required: true, unique: true },

  sow_date : { type: Date, default: Date.now },
  total_days: { type: Number, default: 110 },
  measurements: [measurementSchema],


});

var Sensor = mongoose.model('sensor', sensorSchema);

module.exports = Sensor ;



/*
*humidity
*temperature
*moisture

*ph 
*height


plant
*-total_days 110



Calculadas:

>* humedad tierra

>*life_days
>*stage

>optimal_ratio
>standar_ratio
>ratio

>*percentage_over_standar_ratio
>*percentage_below_standar_ratio

>*state
	checar humedad y temperatura
	si temperatura 18 - 26
	si humedad 80 - 90
	si ph 6 - 8

*/



