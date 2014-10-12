'use strict';

/* Services */

var toteBettingServices = angular.module('toteBettingServices',[]);

toteBettingServices.factory('dividentService', function(){
	var service = {

		calc: function(bets, results) {
			console.log('calculating dividents ...')

			

			return [
				{
					product: "Win",
					runners: [2],
					stake: 2.61
				},
				{
					product: "Win",
					runners: [2],
					stake: 2.61
				},
				{
					product: "Win",
					runners: [2],
					stake: 2.61
				},
			];
		}
	}

	return service;

});



