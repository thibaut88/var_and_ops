/**...
 * Check the equality of two parameters
 * Two parameters are equals, only if they have
 * the same type, and same value.
 * @param  {[type]}
 * @param  {[type]}
 * @return {Boolean}
 */
var isEquals = function(a, b) { /*OK return a == b TRUE*/
    return a == b;
};


/**
 * Add 10 and then multiply the result by 5
 * @param  {[type]}
 * @return {[type]}
 */
var add10AndMultiplyBy5 = function(a) { /*OK (2 + 10) *5 = 60*/

	return (a + 10) * 5;
}

/**
 * Should compute the exponentiel of the first number by the second
 * @param  {[int]} number
 * @param  {[int]} factor
 * @return {[int]} result
 */
var computeExponention = function(a, b) {/*OK return Math.pow(2, 3);*/

return Math.pow(a, b);

}



/**
 * Computes the arithmetic sum of all the arguments
 * @return {[integer]}
 */
var computeSum = function() { /* OKOK parseINT(2, '5', 4)*/

	var result = 0;

	for (i = 0; i < arguments.length; i++) {
		result += parseInt(arguments[i]);
	}
	return result;

}


/**
 * It  computes and return the double of the specified number
 * @param  {[number]}
 * @return {[number]}
 */
var shouldComputeDouble = function(number){ /*number = 4 result = 8*/
	var a = 12;

    var multiply = function(b){
    	var a = b*2;
    	return a;
    }
    
    return multiply(number) ;
}



module.exports.isEquals = isEquals;
module.exports.sum = computeSum;
module.exports.add10AndMultiplyBy5 = add10AndMultiplyBy5;
module.exports.exponentiel = computeExponention;
module.exports.computeDouble = shouldComputeDouble;
