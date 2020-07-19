//all 200 status result messages

//all 4 tests working

const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotesControllers');
const app = require('../app');
const pathUrl = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));

describe ('200 message status', () => {
    it('should return the 200 status message if the person is not eligible', ()=>{
      chai.request('http://localhost:8080')
      .post(pathUrl)
      .set('Accept', 'application/json')
      .send({
              "car_value": 22000.00,
              "driver_birthdate": "17/11/2010"
            })
      .end((err, res) => {
        assert.equal(res.status, 200, "Status OK 200")
      })
    });

    it('should return the 200 status message if the person is eligible', ()=>{
        chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": 10000.00,
                "driver_birthdate": "17/11/1990"
              })
        .end((err, res) => {
          assert.equal(res.status, 200, "Status OK 200")
          assert.equal(res.body.success, true)
          assert.equal(res.body.message, "quote successfully computed")
          assert.equal(res.body.data.eligible, true)
        })
      });

    it('should return 200 status message if person older than 18 but below or equal to 25 year', ()=>{
      chai.request('http://localhost:8080')
      .post(pathUrl)
      .set('Accept', 'application/json')
      .send({
              "car_value": 13000.00,
              "driver_birthdate": "11/01/1998"
            })
      .end((err, res) => {
        assert.equal(res.status, 200, "Status OK 200")
        assert.equal(res.body.success, true)
        assert.equal(res.body.message, "quote successfully computed")
        assert.equal(res.body.data.eligible, true)
        assert.equal(res.body.data.premiums.civil_liability, 1000.00)
        assert.equal(res.body.data.premiums.omnium, 390)
      })
    });

    it('should return 200 status message if person older than 25 years and eligible', ()=>{
        chai.request('http://localhost:8080')
        .post(pathUrl)
        .set('Accept', 'application/json')
        .send({
                "car_value": 20000.00,
                "driver_birthdate": "12/02/1988"
              })
        .end((err, res) => {
          assert.equal(res.status, 200, "Status OK 200")
          assert.equal(res.body.success, true)
          assert.equal(res.body.message, "quote successfully computed")
          assert.equal(res.body.data.eligible, true)
          assert.equal(res.body.data.premiums.civil_liability, 500.00)
          assert.equal(res.body.data.premiums.omnium, 600.00)
        })
      });
})
