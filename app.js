const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mainController = require("./controller/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Man chic!");
});
app.get("/main", mainController.main.get);
app.get("/signout", mainController.signout.get);
app.post("/signin", mainController.signin.post);
app.post("/signup", mainController.signup.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
