function domainName(url){
	var http = new RegExp('http(s)?://(www.)?', "g")
	result = url.match(/^http(s)?:\/\/(www\.)?(.+)/)
	console.log(RegExp.$1);
	
}


// r = domainName("http://github.com/carbonfive/raygun")
r = domainName("http://www.zombie-bites.com")
// r = domainName("https://www.cnet.com")
console.log(r);