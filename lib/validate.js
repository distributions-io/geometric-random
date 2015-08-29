'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isPositive = require( 'validate.io-positive-primitive' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Number} [options.p] - success probability
* @param {Number} [options.seed] - integer-valued seed
* @param {String} [options.dtype] - output data type
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'random()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'p' ) ) {
		opts.p = options.p;
		if ( !isPositive( opts.p ) || opts.p > 1 ) {
			return new TypeError( 'random()::invalid option. `p` parameter must be a number in the interval (0,1]. Option: `' + opts.lambda + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'random()::invalid option. Data type option must be a string primitive. Option: `' + opts.dtype + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'seed' ) ) {
		opts.seed = options.seed;
		if ( !isPositiveInteger( opts.seed ) ) {
			return new TypeError( 'random()::invalid option. Seed option must be a positive integer. Option: `' + opts.seed + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
