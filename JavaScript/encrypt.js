function encrypt(text, n) {
	if (!text || !n || n <= 0 || n.length == 0) { return text }
	arr = text.split("")

	odd = even = [];
	for (var i = 0; i < n; i++) {
		odd = arr.filter( function(elm, index) {
			if (index % 2 != 0) { return elm }
		})
		even = arr.filter( function(elm, index) {
			if (index % 2 == 0) { return elm }
		})

		arr = odd.concat(even)
	}
	arr = arr.join("")

	return arr
}
function decrypt(encryptedText, n) {
	if (!encryptedText || !n || n <= 0 || n.length == 0) { return encryptedText }
	len = encryptedText.length
	odd = len % 2 === 0 ? encryptedText.slice(Math.ceil(len/2)) : encryptedText.slice(Math.ceil(len/2) - 1);
	even = len % 2 === 0 ? encryptedText.slice(0, Math.ceil(len/2)) : encryptedText.slice(0, Math.ceil(len/2) - 1)
	result = ''

	for (var k = 0; k < n; k++) {
		result = ''
		for (var i = 0; i < len+1; i++) {
			result += odd.charAt(i) + even.charAt(i)
		}
		odd = len % 2 === 0 ? result.slice(Math.ceil(len/2)) : result.slice(Math.ceil(len/2) - 1);
		even = len % 2 === 0 ? result.slice(0, Math.ceil(len/2)) : result.slice(0, Math.ceil(len/2) - 1)
	}
	return result
}

r = encrypt("12345", 2);
console.log(decrypt("123456", 1));
console.log(encrypt([], 0));
console.log(decrypt(null, 0));