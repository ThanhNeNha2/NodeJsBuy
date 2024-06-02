require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
viewEngine.configViewEngine(app);
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
