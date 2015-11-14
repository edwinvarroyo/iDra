var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Stadistics', function(req, res, next) {
  res.render('displayStats', { title: 'Estadísticas' });
});

module.exports = router;
