const express = require("express");
require("./models");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");

const mainController = require("./controller/index");

const app = express();

const port = 4000;

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    },
  })
);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => res.status(200).send("Man chic!"));
app.get("/main", mainController.main.get);
app.get("/signout", mainController.signout.get);
app.post("/signin", mainController.signin.post);
app.post("/signup", mainController.signup.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
