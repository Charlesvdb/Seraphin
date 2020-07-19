const express = require("express")
const {body, validationResult} = require("express-validator");

const insuranceQuoteController = require("../controllers/insuranceQuotesControllers")

const router = express.Router()

//carDateRegex: https://www.regextester.com/99555
const carDateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/

//Express-validator: https://express-validator.github.io/docs/
router.post("/v1/quote/car-insurance", [
    body("car-value").isFloat(),
    body("driver_birthdate").matches(carDateRegex)
], insuranceQuoteController.postInsuranceQuotes);

module.exports = router

