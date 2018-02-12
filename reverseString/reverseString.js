var reversedStringString = function(text) {
	let reversedString = "";

	for (let i = 0; i < text.length; i++) {
		reversedString += text[text.length - 1 - i];
	}

	return reversedString;
}

module.exports = reverseString