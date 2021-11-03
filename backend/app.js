const express = require("express");
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")

const app = express();
app.use(express.json())

app.use("/api/v1",product)
app.use("/api/v1/",user)

module.exports= app;
