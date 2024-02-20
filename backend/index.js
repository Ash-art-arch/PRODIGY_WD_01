const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");
const app = express();
const rootRoute = require("./route/index.js");

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
})
mongoose.connect("mongodb://localhost:27017/paytm").then(() => {
    console.log("Connected to MongoDB");
})