//Does all computations and sends back correct messages

const {validationResult} = require("express-validator");

exports.postInsuranceQuotes = (req,res) => {
    const errors = validationResult(req)
    const birthdateDriver = req.body.driver_birthdate
    const ageDriver = driverAge(birthdateDriver)

    if(!errors.isEmpty()){
        return res.status(400).json({
            "success": false,
            "message": "parameters missing or incorrect values"
        })
    }

}


// Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// getUTCFullYear: https://www.w3schools.com/jsref/jsref_getutcfullyear.asp#:~:text=The%20getUTCFullYear()%20method%20returns,of%20local%20time%20and%20date.
const driverAge = (birthdateDriver) => {
    const arrDayMonthYear = birthdateDriver.split("/")
    const formattedBirthdate = `${parseInt(arrDayMonthYear[2])}-${parseInt(arrDayMonthYear[1])}-${parseInt(arrDayMonthYear[0])}`
    const dateOfBirth = new Date(formattedBirthdate);
    const dateOfToday = Date.now()
    const ageCalculation = new Date(dateOfToday - dateOfBirth)
    return Math.abs(ageCalculation.getUTCFullYear - 1970)
}

const civilLiability = (age) => {
    return (age > 25) ? 500.00 : 1000.00
}

const omnium = () => {
    return (req.body.car_value * 0.03).toFixed(2)
}
