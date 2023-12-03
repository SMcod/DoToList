let express = require("express");
let router = express.Router();
let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
/*
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET to do page. */
router.get("/to-do", function (req, res, next) {
  res.render("To-Do", { title: "To-Do" });
});

/* GET review page. */
router.get("/review", function (req, res, next) {
  res.render("Review", { title: "Review" });
});

/* GET team page. */
router.get("/team", function (req, res, next) {
  res.render("team", { title: "Team" });
});
/*get login page */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "login" });
});
/* get registration page */
router.get("/register", function (req, res, next) {
  res.render("register", { title: "register" });
});
/* get logout page */
router.get("/logout", function (req, res, next) {
  res.render("logout", { title: "logout" });
});
module.exports = router;
