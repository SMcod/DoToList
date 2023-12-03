var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
//const { router } = require('../config/app');
let prof = require("../models/proflist");

module.exports.Dislayproflist = async (req, res, next) => {
  //< Mark function as async
  try {
    const proflist = await prof.find(); //< Use of await keyword
    res.render("prof/list", {
      title: "prof list",
      profList: proflist,
      displayName: req.user ? req.user.displayName : "",
    });
  } catch (err) {
    console.error(err);
    //Handle error
    res.render("prof/list", {
      error: "Error on server",
    });
  }
};

module.exports.Addprof = async (req, res, next) => {
  try {
    res.render("prof/add", {
      title: "Add prof",
      displayName: req.user ? req.user.displayName : "",
    });
  } catch (err) {
    console.error(err);
    res.render("prof/list", {
      error: "Error on the server",
    });
  }
};

module.exports.Processprof = async (req, res, next) => {
  try {
    let newprof = prof({
      Name: req.body.Name,
      Priority: req.body.Priority,
      Notes: req.body.Notes,
    });
    prof.create(newprof).then(() => {
      res.redirect("/proflist");
    });
  } catch (error) {
    console.error(err);
    res.render("prof/list", {
      error: "Error on the server",
    });
  }
};

module.exports.Editprof = async (req, res, next) => {
  try {
    const id = req.params.id;
    const profToEdit = await prof.findById(id);
    res.render("prof/edit", {
      title: "Edit prof",
      prof: profToEdit,
      displayName: req.user ? req.user.displayName : "",
    });
  } catch (error) {
    console.error(err);
    res.render("prof/list", {
      error: "Error on the server",
    });
  }
};

module.exports.ProcessEditprof = (req, res, next) => {
  try {
    const id = req.params.id;
    let updatedprof = prof({
      _id: id,
      Name: req.body.Name,
      Priority: req.body.Priority,
      Notes: req.body.Notes,
    });
    prof.findByIdAndUpdate(id, updatedprof).then(() => {
      res.redirect("/proflist");
    });
  } catch (error) {
    console.error(err);
    res.render("prof/list", {
      error: "Error on the server",
    });
  }
};

module.exports.Deleteprof = (req, res, next) => {
  try {
    let id = req.params.id;
    prof.deleteOne({ _id: id }).then(() => {
      res.redirect("/proflist");
    });
  } catch (error) {
    console.error(err);
    res.render("prof/list", {
      error: "Error on the server",
    });
  }
};
