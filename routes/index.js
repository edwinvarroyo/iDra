var express = require('express');
var router = express.Router();

var sensorModel = require('../models/sensors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* Modules */

router.post('/sensors/:id', function(req, res, next){
	
	console.log(req.params.id)

	sensorModel.findOne({"module_id": req.params.id},
		function(erro, sensor){
			if (erro)
				console.log(err)
			else{

				
				sensor.measurements.push(req.body)


				sensor.save(function (err){
					console.log(err)
				})	

				res.send("hell yhea")
			}
		}
	)
})

module.exports = router;


router.get('/create_new/:id', function(req, res, next){
	var sensor = new sensorModel({
		module_id: req.params.id
	})

	sensor.measurements.push({
		moisture : 0,
		humidity : 0,
		temperature : 0
	})

	sensor.save(function(err){console.log(err)})

	res.send("succes")
})