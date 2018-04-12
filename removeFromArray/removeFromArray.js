var removeFromArray = function(array, ...args) {
	array = array.filter(function(item) {
		return !args.includes(item);
	});
	return array;
}

module.exports = removeFromArray	