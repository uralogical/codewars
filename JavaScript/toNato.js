function to_nato(words) {
	var natoJson = {'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray', 'Y': 'Yankee', 'Z': 'Zulu'}
	var len = words.length
	var result = ''
	for (var i = 0; i < len; i++) {
		if (words.charAt(i) == ' ') continue
		char = words.charAt(i).toUpperCase()
		result += natoJson[char] ? natoJson[char] + ' ' : char + ' '
	}
	return result.substr(0, result.length-1)
}

r = to_nato('If you can read!')
console.log(r)