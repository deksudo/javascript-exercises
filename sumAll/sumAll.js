var sumAll = function(lower, upper) {
	if (typeof lower != "number" || typeof upper != "number") {
		return "ERROR";
	}
	if (lower < 0 || upper < 0) {
		return "ERROR";
	}

	if (lower > upper) {
		lower = lower + upper;
		upper = lower - upper;
		lower = lower - upper;
	}

	let sum = 0;
	for (let i = lower; i <= upper; i++) {
		sum += i;
	}

	return sum;
}

module.exports = sumAll
