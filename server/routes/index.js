var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;

/*
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index',{ title: 'Home' });
});

/* GET to do page. */
router.get('/to-do', function(req, res, next) {
  res.render('To-Do', { title: 'To-Do' });
});

/* GET review page. */
router.get('/review', function(req, res, next) {
  res.render('Review', { title: 'Review' });
});

/* GET team page. */
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Team' });
});