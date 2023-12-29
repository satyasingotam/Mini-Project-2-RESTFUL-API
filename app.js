const express = require("express");
const mongoose = require("mongoose");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

mongoose.connect(
  "mongodb+srv://ssatyasrinivas:1234@cluster0.mvt5dmz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(reservationRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));

