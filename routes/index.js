express = require('express');
router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* Modules */

router.post('/sensors/:id', function(req, res, next){
	console.log(req.body)
	res.send("hell yhea")
})

module.exports = router;
