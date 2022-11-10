require("dotenv").config();

const express = require("express");

const connection = require("./database/dbcon");
const studentRoute = require("./routes/studentRoute");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route
app.use("/api/students", studentRoute);

// connection
connection.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to database & listening on port ${process.env.PORT}`
      );
    });
  }
});
