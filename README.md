# SERAPHIN

# 2 KEY COMPONENTS

Simple insurance product with 2 key components:
1) Civil liability:
- Protects the driver in case there is a crash in which (s)he's responsible, paying out the damage to the victims
- Not eligible for drivers under 18 years old (excluded)
- Costs the following:
    * €1000/year for drivers up to 25 years old (included)
    * €500/year for drivers 26 years old or more

2) Omnium:
- Protects the car in case of material damage
- Not eligible for drivers under 18 years old (excluded)
- Costs 3% of the value of the car

Key here is that initial body parameters validation decides between 400 or 200 status message.

_________________________________________________________________

# Node.js HTTP REST API

POST Quote: http://localhost:8080/v1/quote/car-insurance

## Request:
Body Parameters:
- car_value - REQUIRED -  number - Float, value of the car excl. VAT
- driver_birthdate - REQUIRED - string - Of the form "DD/MM/YYYY"

## Response:
### 200: OK (All parameters present)
// Driver eligible for the insurance
    
    {
        "success": true,
        "message": "quote successfully computed",
        "data": {
            "eligible": true,
            "premiums": {
                "civil_liability": 1000.00,
                "omnium": 702.4
            }
        }
    }  

// Driver NOT eligible for the insurance
    
    {
        "success": true,
        "message": "quote successfully computed",
        "data": {
            "eligible": false,
            "premiums": null
        }
    }

### 400: Bad request (Parameters missing or incorrect values)
    {
        "success": false,
        "message": "parameters missing or incorrect values"
    }

# HOW TO USE (TODO)

## Terminal
git clone https://github.com/Charlesvdb/Seraphin.git

## Curl example
    curl -X POST -H "Content-Type: application/json" localhost:8080/api/v1/quote/car-insurance --data '{"car_value": 20000.0, "driver_birthdate": "15/10/1990"}'

# CODE

## app.js file
Starts server (localhost: 8080). Express framework and body-parser (to help parsing the body of the request) middleware are used here.

## insuranceQuotes.js
Does the initial body parameters validation. I used express-validator for this validation (checks for missing parameters or incorrect values). 
POST route:    http://localhost:8080/v1/quote/car-insurances
This then calls the insuranceQuotesControllers file (insuranceQuoteController.postInsuranceQuotes)

## insuranceQuotesControllers.js
Calculates civil liability & omnium premiums.
I decided to keep background calculations (age, civil liability, omnium) in this file (instead of creating a calculations file) to keep it simple.
Sends back correct message (200 status vs. 400 status).

## TESTING
4 test files:
- 400ErrorStatus.js: tests 400 status error messages
- 200Status.js: tests 200 status messages 
- ageCheck.js: tests eligibility
- calculationsQuotes: tests background calculations such as civil liability and age 

## DEPENDENCIES
    "dependencies": {
    "body-parse": "^0.1.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "express-validator": "^6.6.0"
    },
    "devDependencies": {
    "mocha": "^8.0.1",
    "nodemon": "^2.0.4"

## VISUAL OVERVIEW

<img src="/visualOverview.png">


