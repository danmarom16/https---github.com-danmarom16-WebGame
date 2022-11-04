const express = require("express");
const app = express();

const db = require("./Database");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM messages";
  db.query(sqlQuery, (error, result) => {
    const rand = Math.floor(Math.random() * Object.keys(result).length);
    res.status(200).send(result[rand].MessageContent);
  });
});

app.post("/", (req, res) => {
  const sqlQuery = `INSERT INTO game_log (id, user_ip, action, timestamp) VALUES (?, ?, ?, ?)`;

  db.query(sqlQuery, [req.body.id, req.body.ip, req.body.action, req.body.timestamp], (error, result) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("record inserted");
    }
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
