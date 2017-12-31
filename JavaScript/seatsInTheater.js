function seatsInTheater(nCols, nRows, col, row) {
	return (nCols - (col - 1)) * (nRows - row)
}



r = seatsInTheater(13,6,8,3)
console.log(r)
