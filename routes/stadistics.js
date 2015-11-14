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

        sensor.measurements[sensor.measurements.length - 1].moisture = 45;
        sensor.life_days = 3
        sensor.stage = "Ta creciendo"
        sensor.p_over = 12//percentage_over_standar_ratio
        sensor.p_below = 0.1
        sensor.state = true

  			res.render('displayStats', 
  			{
				  title: 'Estadísticas',
  				plant: sensor
  			});
  		}
  	}
  )
});

function get_last_measure(sensor){
  return sensor.measurements[sensor.measurements.length - 1]
}

function get_hum_land_percentage(sensor){
  max_hum = 500
  get_last_measure.moisture * 100 / max_hum
}

function get_life_days(sensor){

  var date1 = new Date()
  var date2 = sensor.sow_date

  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var life_days = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

  return life_days

}

function get_state(sensor){
  measure = get_last_measure(sensor)

  if(
      measure.temperature > 18 && measure.temperature < 26 &&
      get_hum_land_percentage(sensor) > 80 && get_hum_land_percentage(sensor) < 90 &&
      measure.ph > 6 && measure.ph < 8
    )

      return True;

  return False;
}

function get_stage(sensor){

  if(sensor.life_days <= 5)
    sensor.stage = 'Germinando'
  else if(sensor.life_days <= 115)
    sensor.stage = 'Creciendo'
  else if(sensor.life_days > 115)
    sensor.stage = 'Ya da frutos'

}


function get_ratio(sensor){
  standard_ratio = - 0.0051 * Math.pow(sensor.life_days, 2) + 1.2465 * sensors.life_days - 5.604 * 100/70

  optimal_ratio = - 0.0066 * Math.pow(sensor.life_days, 2) + 1.4213 * sensors.life_days - 6.4413 * 100/70

  ratio = h * 100/700

}



module.exports = router;
