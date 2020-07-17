const express = require("express")
const bodyParser = require("body-parser")

const insuranceRoutes = require("./routes/insuranceQuotes")

const app = express()

app.use(bodyParser.json())
app.use("/api", insuranceRoutes)

app.listen(8080)

module.exports = app