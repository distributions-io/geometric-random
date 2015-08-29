'use strict';

// FUNCTIONS //

var floor = Math.floor,
	ln = Math.log;


// GENERATE GEOMETRIC RANDOM VARIATES //

/**
* FUNCTION random( p[, rand] )
*	Generates a random draw from a geometric distribution with success probability `p`.
*
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( p, rand ) {
	var u;
	u = rand ? rand() : Math.random();
	return floor( ln( u ) /  ln( 1 - p) );
}

module.exports = random;
