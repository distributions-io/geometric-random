'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, p[, rand] )
*	Creates a multidimensional array of geometric distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with geometric random variates
*/
function random( dims, p, rand ) {
	var draw = partial( p, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
