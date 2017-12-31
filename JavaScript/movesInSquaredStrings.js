function vertMirror(strng) {
	arr = strng.split("\n");
	s=[];
	for (var i = 0; i < arr.length; i++) {
		s[i] = arr[i].split("").reverse().join("");
	}
	return s.join('\n');
}
function horMirror(strng) {
	return strng.split("\n").reverse().join('\n')
}
function oper(fct, s) {
	return fct(s);
}