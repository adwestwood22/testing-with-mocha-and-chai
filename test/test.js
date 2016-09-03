'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var FaaService = require('../services/FaaService');


describe('A basic test of the FaaService using promises', function(){


	var faaService;
	var airportCode;

	context('initialization', function(){

		it('check that the FaaService can be instantiated', function(){

			faaService = new FaaService();

			expect(faaService).to.be.instantiated;
		});

	})


	context('using a valid airport code', function(){

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