function isValidWalk(walk) {
	if ( walk.length !== 10 ) { return false };
	ns = filter(walk, 'n') === filter(walk, 's');
	we = filter(walk, 'w') === filter(walk, 'e');

	return ns && we;
}

function filter(arr, direction) {
	count = 0;
	arr.filter( function(elm) { count = elm === direction ? ++count : count; })
	return count;
}


// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
