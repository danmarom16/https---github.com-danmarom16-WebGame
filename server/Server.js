const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send({users: ["userOne", "userTwo", "userThree"]});
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});