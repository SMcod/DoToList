var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let prof = require('../models/proflist');
let profController = require('../controllers/proflist')
/* Get route for the Info prof list */
// Read Operation
router.get('/', profController.Dislayproflist);
/* Get route for Add Book page --> Create */
router.get('/add', profController.Addprof);
/* Post route for Add Book page --> Create */
router.post('/add', profController.Processprof);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', profController.Editprof);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', profController.ProcessEditprof);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', profController.Deleteprof);
module.exports = router;