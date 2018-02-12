var repeatString = function(text, times) {
	if (times < 0)
		return "ERROR";

	let message = "";
	for (var i = 0; i < times; i++) {
		message += text;
	}
	
	return message;
}

module.exports = repeatString
