///launching server on 8080
const express = require("express")
const bodyParser = require("body-parser")

const theQuoteRoutes = require("./routes/quote")

const app = express()

app.use(bodyParser.json())
app.use("/api", theQuoteRoutes)

app.listen(8080)

module.exports = app