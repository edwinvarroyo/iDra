var mongoose = require('./models');

var Schema = mongoose.Schema;


var measurementSchema = new Schema({

	date: { type: Date, default: Date.now },
	moisture : Float,
	humidity : Float,
	temperature : Float

});

var userSchema = new Schema({

  module_id: { type: int, required: true, unique: true },

  sow_date : { type: Date, default: Date.now },
  maturity_date : Date,

  measurements: [measurementSchema],

  /*

	Cuando produce la primer fruta, entre los sig 25 y 35 dias se da tu fruta
	despues de 5 dias no pasa nada
	paso 1 :v

	El peligro son los primeros 80 - 100 dias	


	entre 60 a 80 cm

	

  */


  /*
	x = tiempo en dias

	y = centimetros en funcion del tiempo en condiciones OPTIMAS
	ce = centimetros en funcion del tiempo en condiciones ESTANDAR

	y = -0.0066 x² + 1.4213x - 6.4413

	ce = -0.0051 x² + 1.2465x - 5.6004
  */

  /*
	ETAPAS:

	germinacion: 5 dias
	crecimiento: 5 - 90 dias
	fruto en camino: 90 - 110
	reposo: 110 - 115 dias
	nuevo fruto en camino


	Datos
	
	en un div:
		- moisture (humedad tierra)
		- temperature (temperatura ambiente)
		- humidity (humedad ambiente)

	- etapa
	- porcentaje de desarrollo


	



  */


});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;