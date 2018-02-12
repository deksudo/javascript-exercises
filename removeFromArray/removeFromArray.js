var removeFromArray = function(array) {
	let informalArguments = Array.prototype.slice.call(arguments, Function.length);
	for (let i = 0; i < array.length; i++) {
		if (informalArguments.indexOf(array[i]) != -1) {
			array.splice(i, 1);
			i--;
		}
	}


	return array;
}

module.exports = removeFromArray