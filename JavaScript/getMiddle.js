function getMiddle(s)
{
	len = s.length;
	return middle = len % 2 == 0 ? s.charAt(len/2 - 1) + s.charAt( Math.round(len/2) ) : s.charAt( Math.floor(len/2) );
}
