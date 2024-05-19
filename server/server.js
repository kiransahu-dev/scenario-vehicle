const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

// env setup
dotenv.config();

// router
const scenarios = require("./routes/scenarios");
const vehicles = require("./routes/vehicles");

// rest object
const app = express();

// port
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/scenarios", scenarios);
app.use("/vehicles", vehicles);

app.listen(port, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode with port ${port}`.bgCyan
      .white
  );
});
