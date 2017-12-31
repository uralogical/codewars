function theBiggestSearchKeys() {
	var args = [].slice.call(arguments)
	max = ''
	maxArr = []
	max = args.reduce( function(prev, current) {
		if (prev.length < current.length) {
			max = current;
			maxArr.length = 0
		}
		console.log(max)
		if (max.length == current.length) {
			maxArr.push(current)
		}
		return max

	})
	console.log(maxArr)

	return max
}



r = theBiggestSearchKeys("small keyword", "how to coding?", "very nice kata", "a lot of keys", "I like Ruby!!!")
console.log(r)