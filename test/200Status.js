//all 200 status result messages

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('200 message status', () => {
    it('should return 200 status message if person younger than 25 years and eligible', ()=>{
      chai.request('http://localhost:8080')
      .post(url)
      .set('Accept', 'application/json')
      .send({
              "car_value": 20000.00,
              "driver_birthdate": "11/01/2013"
            })
      .end((err, res) => {
        assert.equal(res.body.success, true)
        assert.equal(res.body.message, "quote successfully computed")
        assert.equal(res.body.data.eligible, true)
        assert.equal(res.body.data.premiums.civil_liability, 1000)
        assert.equal(res.body.data.premiums.omnium, res.request._data.car_value * 0.03)
      })
    });

})

