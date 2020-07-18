const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const url = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('is driver eligible for an insurance premium?', () => {
    it('it should return true if the driver is at least 18Y old', () =>{
      chai.request('http://localhost:8080')
      .post(url)
      .set('Accept', 'application/json')
      .send({
              "car_value": 15000.00,
              "driver_birthdate": "15/10/1985"
            })
      .end((err, res) => {
        assert.equal(res.status, 200, "Status OK 200")
        assert.equal(res.body.data.eligible, true)
    })
});


