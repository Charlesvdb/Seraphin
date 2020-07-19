//all age-related testing with 18Y old as cutoff point

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('Is person eligible for an insurance premium?', () => {
    it('should return FALSE if the driver is younger than 18Y old', () =>{
        chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": 13000.00,
                "driver_birthdate": "13/02/2012"
              })
        .end((err, res) => {
          assert.equal(res.status, 200, "Status OK 200")
          assert.equal(res.body.data.eligible, false)
        })
      });

   
    it('should return TRUE if the person is at least 18Y old', () =>{
      chai.request('http://localhost:8080')
      .post(pathUrl)
      .set('Accept', 'application/json')
      .send({
              "car_value": 15000.00,
              "driver_birthdate": "23/01/1980"
            })
      .end((err, res) => {
        // assert.equal(res.status, 200, "Status OK 200")
        assert.equal(res.body.data.eligible, true)
    })
    });
})


