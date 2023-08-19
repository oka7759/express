const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/user", (req, res, next) => {
  res.send(`<h1>${req.body.name}</h1>`);
});

app.get("/", (req, res, next) => {
  res.send(
    `<form action="/user" method="POST">
            <input type="text" name="name">
            <button type="submit">발송</button>
        </form>`
  );
});
app.listen(3000);
