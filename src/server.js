require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
viewEngine.configViewEngine(app);
const connection = require("./config/database");
// config req.body (  bắt buộc phải trước app.use("/", webRoutes);)
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", webRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(" >>>ERROR connect to db ", error);
  }
})();
