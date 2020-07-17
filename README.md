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

_________________________________________________________________

# Node.js HTTP REST API

http://localhost:8080/v1/quote/car-insurance

## Request:
Body Parameters:
- car_value - REQUIRED number - Float, value of the car excl. VAT
- driver_birthdate - REQUIRED string - Of the form "DD/MM/YYYY"

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

# HOW TO USE

git clone REPO_NAME
cd REPO_NAME
npm install
npm run test

curl -X POST -H "Content-Type: application/json" localhost:8080/api/v1/quote/car-insurance --data '{"car_value": 20000.0, "driver_birthdate": "15/10/1990"}'

# CODE

## app.js file

## app.js file

## app.js file

## app.js file

## app.js file

## DEPENDENCIES

# TESTING



