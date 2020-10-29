const express = require("express");
const logger = require("morgan");

// REQUIRE ROUTE FILES
const notesRouter = require("./routes/notes");
const tasksRouter = require("./routes/tasks");
const welcomeRouter = require("./routes/welcome");

// CREATE APP
const app = express();

// CHOOSE TEMPLATING ENGINE
app.set("view engine", "ejs");

// SETUP MIDDLEWARE
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

// USE ROUTERS FROM ROUTE FILES
app.use("/", welcomeRouter);
app.use("/notes", notesRouter);
app.use("/tasks", tasksRouter);

// START SERVER
const PORT = 3000;
const DOMAIN = "localhost";
app.listen(PORT, DOMAIN, () => {
  console.log(`💁 Server is listening at http://${DOMAIN}:${PORT}`);
});
