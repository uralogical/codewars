var uniqueInOrder=function(iterable){
	iterable = Array.isArray(iterable) ? iterable : iterable.split("");

	return iterable.map( function(elm, index) {
		return elm = iterable[index] === iterable[index+1] ? '' : elm;
	}).filter(isNull)
}
function isNull(elm) {
	return !!elm
}

r = uniqueInOrder([1,2,2,3,3]);
console.log(r)