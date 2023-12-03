var express = require("express");
var router = express.Router();
//const { router } = require('../config/app');
let prof = require("../models/proflist");
let profController = require("../controllers/proflist");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
/* Get route for the Info prof list */
// Read Operation
router.get("/", profController.Dislayproflist);
/* Get route for Add Book page --> Create */
router.get("/add", requireAuth, profController.Addprof);
/* Post route for Add Book page --> Create */
router.post("/add", requireAuth, profController.Processprof);
/* Get route for displaying the Edit Book page --> Update */
router.get("/edit/:id", requireAuth, profController.Editprof);
/* Post route for processing the Edit Book page --> Update */
router.post("/edit/:id", requireAuth, profController.ProcessEditprof);
/* Get to perform Delete Operation --> Delete Operation */
router.get("/delete/:id", requireAuth, profController.Deleteprof);
module.exports = router;
