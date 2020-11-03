const express = require("express");
const knex = require("../db/client");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("notes/new");
});

router.post("/", (req, res) => {
  knex
    .insert({
      title: req.body.title,
      body: req.body.body
    })
    .into("notes")
    .returning("*")
    .then(([note]) => {
      res.redirect(`/notes`);
    });
});

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("notes")
    .orderBy("createdAt", "DESC")
    .then(notes => {
      res.render("notes/index", { notes: notes });
    });
});

module.exports = router;
