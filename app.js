const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const { db, Page, User } = require("./models");

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

async function init() {
try {
  await db.sync();
  await Page.sync();
  await User.sync();

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
} catch(e) {
  console.log("I'm broken! Help!!")
}
}
init();
