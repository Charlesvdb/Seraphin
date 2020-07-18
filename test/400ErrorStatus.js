//all 400 status errors in initial post input phase (body parameters)

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('400 error status', () => {
    it('should return status 400 error if car_value is not given', ()=>{
      chai.request('http://localhost:8080')
      .post(pathUrl)
      .set('Accept', 'application/json')
      .send({
              "car_value": null,
              "driver_birthdate": "12/08/1993"
            })
      .end((err, res) => {
        assert.equal(res.status, 400, "status 400")
      })
    });

    it('should return status 400 error if driver_birthdate is not given', ()=>{
        chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": 123455.00,
                "driver_birthdate": "null"
              })
        .end((err, res) => {
          assert.equal(res.status, 400, "status 400")
        })
    });

    it('should return status 400 error if car_value is string', ()=>{
        chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": "thisisastring",
                "driver_birthdate": "12/08/1993"
              })
        .end((err, res) => {
          assert.equal(res.status, 400, "status 400")
        })
    });

    


})    
