'use strict';

//requires
var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require('chai-as-promised');

//local requires
var FaaService = require('../services/FaaService');

//build
chai.use(chaiAsPromised);


//test scenarios
describe('A basic test of the FaaService using promises', function(){

	//scenario variables
	var faaService;
	var airportCode;

	//test scenario context #1
	context('initialization', function(){

		//context #1 assertion #1
		it('check that the FaaService can be instantiated', function(){

			faaService = new FaaService();

			expect(faaService).to.be.instantiated;
		});

	})

	//test scenario context #2
	context('using a valid airport code', function(){

		//context #2 assertion #1
		it('check getAirportStatus works on FaaService', function(){

			//using chai-as-promised for the rest call

			airportCode = 'SFO';

			var airport = faaService.getAirportStatus(airportCode).then(function(airportObj){

				return airportObj.IATA  // airport code

			});

			return expect(airport).to.eventually.equal(airportCode);

		})
	})

});