// all background calculations checks

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe("Calculation civilLiability", () => {
  it("should return 1000 if person's age is below or equal to 25", () => {
    chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": 13000.00,
                "driver_birthdate": "16/07/2000"
              })
        .end((err, res) => {
          assert.equal(res.status, 200, "Status OK 200")
          assert.equal(res.body.data.premiums.civil_liability, 1000)
          assert.equal(res.body.data.eligible, true)
        })
  })

  it("should return 500 if person's age is above 25", ()=>{
    chai.request('http://localhost:8080')
    .post(pathUrl)
    .set('Accept', 'application/json')
    .send({
            "car_value": 20000.00,
            "driver_birthdate": "15/10/1990"
          })
    .end((err, res) => {
      assert.equal(res.status, 200, "Status OK 200")
      assert.equal(res.body.data.premiums.civil_liability, 500)
    })
  });
})