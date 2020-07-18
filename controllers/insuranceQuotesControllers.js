//Does all computations and sends back correct messages

const {validationResult} = require("express-validator");

exports.postInsuranceQuotes = (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            "success": false,
            "message": "parameters missing or incorrect values"
        })
    }




}