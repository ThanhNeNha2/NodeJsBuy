require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8081;
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRouter = require("./routes/api");
const connection = require("./config/database");
const { MongoClient } = require("mongodb");
viewEngine.configViewEngine(app);

// file
const fileUpload = require("express-fileupload");

// config file
app.use(fileUpload());

// config req.body (  bắt buộc phải trước app.use("/", webRoutes);)
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", webRoutes);
app.use("/v1/api/", apiRouter);
(async () => {
  try {
    // using mongoose
    await connection();

    // using mongodb drive
    const url = process.env.DB_HOST_WITH_DRIVE;
    const client = new MongoClient(url);

    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("customers");
    collection.insertOne({ name: "vo chi thanh" });
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(" >>>ERROR connect to db ", error);
  }
})();
