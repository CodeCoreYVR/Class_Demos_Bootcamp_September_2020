const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get("/", function(req, res) {
  knex
    .select()
    .from("tasks")
    .then(tasks => {
      res.render("tasks/index", { tasks: tasks });
    });
});

router.post("/", function(req, res) {
  knex
    .insert({ title: req.body.title })
    .into("tasks")
    .then(() => {
      res.redirect("/tasks");
    });
});

module.exports = router;
