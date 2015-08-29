'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, p[, rand] )
*	Creates a matrix of geometric distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} p - success probability
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with geometric random variates
*/
function random( dims, dt, p, rand ) {
	var out,
		draw,
		i;

	draw = partial( p, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
