function averageLength() { 
	var args = arguments[0];
	var length_ave = getAverageLength(args);
	var result = [];

	args.forEach(function(arg, index) {
		result.push( arg[0].repeat(length_ave));
	})

	return result;
}

function getAverageLength(args) {

	var args_length = args.length;
	var length_sum = 0;

	args.forEach(function(elm, index) {
		length_sum += elm.length;
	})

	return Math.round(length_sum / args_length);
}

averageLength(['aa', 'bb', 'ddd', 'eee']);