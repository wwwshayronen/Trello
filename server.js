const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// enable all cors requests
app.use(cors());

const boards = require("./api/routes/boards");

// Body-parser middleware
app.use(bodyParser.json());

// connect to mongodb
mongoose
  .connect(
      "mongodb+srv://shay:KAngejFqBzQOFXeP@monez-cluster.dvbt7.mongodb.net/trello-db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.log("Error when trying to connect to mongodb: ", err)
  );

// use routes
app.use("/api/boards", boards);

if (process.env.NODE.ENV === "production") {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
