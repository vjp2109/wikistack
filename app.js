const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const { db } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static("/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(main());
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
