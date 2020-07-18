const chai = require("chai")
const expect = chai.expect;
const assert = require('chai').assert;
const quote = require('../controllers/insuranceQuotes');
const app = require('../app');
const url = "/api/v1/quote/car-insurance";

chai.use(require("chai-http"));




