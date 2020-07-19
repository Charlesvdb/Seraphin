const express = require("express")
const bodyParser = require("body-parser")

const insuranceQuoteRoutes = require("./routes/insuranceQuotes")

const app = express()

app.use(bodyParser.json())

app.use("/api", insuranceQuoteRoutes)

app.listen(8080)

module.exports = app
