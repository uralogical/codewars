function divisors(integer) {
	arr = [];
	for (var i = 2; i < integer; i++) {
		if ( integer % i === 0 ) { arr.push(i) }
	}
	return arr.length != 0 ? arr : integer + " is prime"
};

d = divisors(13)
console.log(d)