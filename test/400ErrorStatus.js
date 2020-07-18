//all 400 status errors in initial post input phase (body parameters)

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('400 error status', () => {
    it('should return status 400 if car_value is not given', ()=>{
      chai.request('http://localhost:8080')
      .post(url)
      .set('Accept', 'application/json')
      .send({
              "car_value": null,
              "driver_birthdate": "15/10/1990"
            })
      .end((err, res) => {
        assert.equal(res.status, 400, "status 400")
      })
    });



})    
