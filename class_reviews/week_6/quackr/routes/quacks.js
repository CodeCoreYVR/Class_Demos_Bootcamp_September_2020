const router = require("express").Router()
const { render } = require("ejs")
const knex = require("../db/client") 
const friendlyDate = require("../utils/friendlyDate")

router.get("/", (req, res) => {
  knex
    .select()
    .table("quacks")
    .then(quacks => {
      // res.render("index", { quacks: quacks })

      res.render("index", { 
        quacks,
        friendlyDate, 
      })
    })
  })

  router.get("/new", (req, res) => {
    // const username = req.cookies.username
    const { username } = req.cookies
    if ( username ) {
      res.render("new")
    } else {
      res.redirect("/sign_in")
    }
  })
  
  router.post("/", (req, res) => {
    const { username } = req.cookies
 
    if (username) {
      const quack = {...req.body}
      quack.username = username 

      knex("quacks")
        .insert(quack, "*")
        .then(quack => {
          res.redirect("/quacks")
        })
    } else {
      res.redirect("/sign_in")
    }
  })

  router.get("/:id", (req, res) => {
    const { id } = req.params
    knex("quacks")
      .where("id", id)
      .first()
      .then(quack => {
        res.render("show", { quack })
      })
  })

  router.delete("/:id", (req, res) => {
    const { id } = req.params
    const { username } = req.cookies

    if (username) {
      knex("quacks")
        .where("id", id)
        .del()
        .then(() => {
          res.redirect("/quacks")
        })
    } else {
      res.redirect("/sign_in")
    }
  })

  router.get("/:id/edit", (req, res) => {
    const { id } = req.params
    const { username } = req.cookies

    if (username) {
      knex("quacks")
        .where("id", id)
        .first()
        .then(quack => {
          res.render("edit", { quack })
        })
    } else {
      res.redirect("/sign_in")
    }
  })

  router.patch("/:id", (req, res) => {
    const { id } = req.params
    const { username } = req.cookies

    if (username) {
      const quack = {...req.body}
      quack.username = username
      quack.updatedAt = new Date()
      
      knex("quacks")
        .where("id", id)
        .update(quack)
        .then(() => {
          res.redirect(`/quacks/${id}`)
        })
    } else {
      res.redirect("/sign_in")
    }
  })




module.exports = router