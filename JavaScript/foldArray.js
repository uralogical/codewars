function foldArray(array, runs)
{
	function makeArray(array) {
		result = [];
		len = array.length
		count = 0;
		for (var i = 0, j = len - 1; i < len / 2 ; i++, j--) {
			if (i === j) {result.push(array[i]); break;}
			result.push(array[i] + array[j]);
			count++;
		}
		return result;
	}
	result = makeArray(array);

	for (var i = 0; i < runs - 1; i++) {
		result = makeArray(result);
	}
	return result;
}