var moveZeros = function (arr) {
	return arr.filter( isNotZero ).concat(arr.filter( isZero ));
}

function isZero(elm) {
	return elm === 0;
}
function isNotZero(elm) {
	return elm !== 0;
}