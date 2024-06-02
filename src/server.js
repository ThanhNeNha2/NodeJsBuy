require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
viewEngine.configViewEngine(app);
app.use(webRoutes);
const connection = require("./config/database");

connection.query("SELECT * FROM  Users u", function (err, results, fields) {
  console.log("results ", results); // results contains rows returned by server
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
