const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.get("*", function (req, res, next) {
  let view = "404";

  if (req.path === "/") {
    view = "index";
  } else if (req.path !== "/index") {
    view = req.path;
  }

  res.sendFile(path.join(__dirname + `/pages/${view}.html`), function (err) {
    if (err) {
      next(err);
    }
  });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
