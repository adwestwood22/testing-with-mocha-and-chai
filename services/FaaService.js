'use strict';

//requires
var _ = require('lodash');
var reqPromise = require('request-promise');

//static data
var ENDPOINT = 'http://services.faa.gov/airport/status/';

function FaaService(){

	//constructor

}

FaaService.prototype.getAirportStatus = function(airportCode){

	var options = {

		method: 					'GET',
		uri: 						ENDPOINT + airportCode,
		resolveWithFullResponse: 	true, 
		json: 						true  

	};


	return reqPromise(options).then(
		function(response){

			return response.body;

		}
	);
};

module.exports = FaaService;