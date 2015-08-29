'use strict';

// FUNCTIONS //

var floor = Math.floor,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( p[, rand] )
*	Partially applies parameter `p` and returns a function to generate random variables from the geometric distribution.
*
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( p, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a geometric distribution with success probability `p`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = random();
		return floor( ln( u ) /  ln( 1 - p) );
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
