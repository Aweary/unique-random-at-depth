'use strict';
module.exports = function (min, max, depth) {
	var depth = depth && depth > 0 ? depth : 1;
	var range = max - min + 1;
	if (range < depth) {
		throw new Error(
			'The depth argument must be greater than ' +
			'the total number of allowable values.'
		);
	}
	var previous = [];

	if (min === max) return function() { return min };

	return function rand() {
		var num = Math.floor(Math.random() * range + min);
		if (previous.indexOf(num) !== -1) {
			num = rand();
		}
		else {
			previous.unshift(num);
			if (previous.length > depth) previous.pop();
		}
		return num;
	};
};
