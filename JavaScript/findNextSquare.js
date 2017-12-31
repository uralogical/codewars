function findNextSquare(sq) {
	r = Math.sqrt(sq);
	return r % 1 !== 0 ? -1 : Math.pow( r + 1, 2);
}