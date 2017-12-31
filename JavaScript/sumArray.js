function sumArray(array) {
  if(!array || array.length==0 || array.length==1){return 0}
	min = max = array[0];
	len = array.length;
	min =  array.map(function(elm){
		min = elm < min ? elm : min;
		return min
	})[len-1]
	max =  array.map(function(elm){
		max = elm > max ? elm : max;
		return max
	})[len-1]

	sum = array.reduce(function(p, c) {
		return p + c;
	})
	return sum - min - max

}


r = sumArray([ 6, 2, 1, 8, 10 ])
console.log(r)