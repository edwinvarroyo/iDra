var express = require('express');
var React = require('react');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/Stadistics', function(req, res, next) {
  res.render('displayStats', { title: 'Estadísticas' });
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
