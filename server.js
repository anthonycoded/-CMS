let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const app = express();

// Express Route
const checkupRoute = require("./routes/check.route");
const cutomerRoute = require("./routes/curtomer.route");
const jobRoute = require("./routes/job.route");
const userRoute = require("./routes/user.route");
app.use("/checkups", checkupRoute);
app.use("/customers", cutomerRoute);
app.use("/jobs", jobRoute);
app.use("/users", userRoute);

app.use(cors());
app.use("/public", express.static("public"));

// 404 Error
app.use((req, res, next) => {
  res.status(404);
});
app.use = (err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
};

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

//connect to MongoDB Atlas
const mongodb = process.env.mongoDB_CONNECTIONl;
mongoose
  .connect(mongodb, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });
