function numbersWithDigitInside(x, d) {

	numbers = [];
	for (var i = 1; i <= x; i++) {
		if ( includeNumber(i, d) ) {
			numbers.push(i);
		};
	}

	console.log(numbers)

	count = numbers.length;
	if (count == 0) {
		return [ 0, 0, 0];
	}
	// sum = sumOfArray(numbers);
	// product = productOfArray(numbers);

	// return [count, sum, product];
}

function includeNumber(x, d) {
	return x.toString().indexOf(d) != -1
}
function sumOfArray(arr) {
	return arr.reduce( function(prev, sum) {
		return prev + sum
	})
}
function productOfArray(arr) {
	return arr.reduce( function(prev, sum) {
		return prev * sum
	})
}

numbersWithDigitInside(5,6)

