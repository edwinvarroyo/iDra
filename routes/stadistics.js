var express = require('express');
var React = require('react');
var mongoose = require('mongoose');
var router = express.Router();
var sensorModel = require('../models/sensors')

/* GET home page. */
router.get('/stadistics/:id', function(req, res, next) {


  sensorModel.findOne({"module_id": req.params.id},
  	function(erro, sensor){
  		if (erro){
  			console.log(err)
  			res.send("error")
  		}
  		else{
  			console.log(sensor)
  			res.render('displayStats', 
  			{
				title: 'Estadísticas',
  				plant: sensor
  			});
  		}
  	}
  )
});




var getPostValues = function(req){
	var hight = req.body.hight;
	var time = req.body.time;
	var temperature = req.body.temperature;
	var humidity = req-body.humidity;
	values={
		hight: hight,
		time: time,
		temperature: temperature,
		humidity: humidity
	}

	return values;
}
function statsFromSensors(req, res){
	var conn = mongoose.createConnection('');
}
module.exports = router;
