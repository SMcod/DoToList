let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
var router = express.Router();
let session = require("express-session");
let passport = require("passport");
let passportLocal = require("passport-local");
let flash = require("connect-flash");

let app = express();

// create a user model instance
let userModel = require("../models/user");
let User = userModel.User;

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

let mongoose = require("mongoose");
let mongoDB = mongoose.connection;
let DB = require("./db");
mongoose.connect(DB.URI);
mongoDB.on("error", console.error.bind(console, "Connection Error"));
mongoDB.once("open", () => {
  console.log("Mongo DB is connected");
});

// set up express session
app.use(
  session({
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false,
  })
);

// initialize flash
app.use(flash());

// implement a user for auth
passport.use(new passportLocal.Strategy(User.authenticate()));
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// serialize and deserialize the user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mongoose.connect(DB.URI);
let indexRouter = require("../routes/index");
let usersRouter = require("../routes/users");
let proflistRouter = require("../routes/proflist");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/proflist", proflistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res
    .status(404)
    .render("error", { title: "Not Found", message: "404 Not Found" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
