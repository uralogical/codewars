class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.reduce(function(p, n){
			return min = p < n ? p : n;
		})
	}
}