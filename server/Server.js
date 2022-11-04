const db = require('./Database');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM messages"
    db.query(sqlQuery, (error, result) => {
        const rand = Math.floor(Math.random() * Object.keys(result).length)
        res.status(200).send(result[rand].MessageContent)
    })
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});