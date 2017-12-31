function towerBuilder(nFloors) {
	floor = 2 * nFloors - 1;
	base = '*'.repeat(floor);

	build=[];
	for (var i = 0; i < nFloors; i++) {
		blank = nFloors - (i + 1);
		build[i]=base.split("");
		for (var n = 0, m = floor-1; n < blank; ++n, --m) {
			build[i][n] = " "
			build[i][m] = " "
		}

		build[i] = build[i].join('');
	}
	return build;
}


r = towerBuilder(3)
console.log(r)


// [
//   '  *  ',     b=nFloors-k, a=2k-1
//   ' *** ', nFloors=3
//   '*****'      
//   	l=2*nFloors-1
// ]




