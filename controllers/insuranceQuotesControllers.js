const {check, validationResult} = require("express-validator");

exports.postInsuranceQuotes = (req,res) => {
    const errors = validationResult(req)
    const omnium= req.body.car_value*0.03
    const birthdateDriver = req.body.driver_birthdate
    const ageDriver = driverAge(birthdateDriver)

    if(!errors.isEmpty()){
        return res.status(400).json({
            "success": false,
            "message": "parameters missing or incorrect values"
        })
    }

    if(ageDriver < 18){
        res.status(200).json({
            "success": true,
            "message": "quote successfully computed",
            "data": {
                "eligible": false,
                "premiums": null
            }
        })
    } else if(ageDriver >= 18){
        res.status(200).json({
            "success": true,
            "message": "quote successfully computed",
            "data": {
                "eligible": true,
                "premiums": {
                    "civil_liability": civilLiability(ageDriver),
                    "omnium": omnium
                }
            }
        });
    }
}

// Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// getUTCFullYear: https://www.w3schools.com/jsref/jsref_getutcfullyear.asp#:~:text=The%20getUTCFullYear()%20method%20returns,of%20local%20time%20and%20date.
const driverAge = (birthdateDriver) => {
    const arrdates = birthdateDriver.split("/");
    const date = (new Date(arrdates[2], arrdates[1], arrdates[0] )).getTime();
    const age = new Date(Date.now() - date);
    return Math.abs(age.getUTCFullYear() - 1970);
};

const civilLiability = (ageDriver) => {
    return (ageDriver > 25) ? 500.00 : 1000.00
}



