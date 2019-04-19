require("dotenv").config();
const express = require("express");
const massive = require("massive");

const c = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database connected");
  })
  .catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Y000 I'm on port ${SERVER_PORT}`));
