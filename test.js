'use strict';
var assert = require('assert');
var uniq = require('lodash.uniq');
var uniqueRandomAtDepth = require('./');

it('should generate a random number from min to max without the same number in a row', function () {
	var random = uniqueRandomAtDepth(1, 10);
	var fail = false;
	var current;
	var count = 1000;
	var prev;

	while (--count > 0) {
		current = random();

		if (current === prev || current > 10 || current < 1) {
			fail = true;
		}

		prev = current;
	}

	assert(!fail);
});

it('should respect the depth argument', function() {

	var depth = 5;
	var random = uniqueRandomAtDepth(1, 10, depth);
	var previous = [];
	var fail = false;
	var count = 1000;
	var current;

	while(--count > 0) {
	  var current = random();
		previous.unshift(current);
		if (previous.length > depth) previous.pop();
 		if (uniq(previous).length !== previous.length) {
			fail = true;
		}
	}

	assert(!fail);

})


it('should return the same value everytime if min and max are equal',
function() {
	var count = 1000;
	var random = uniqueRandomAtDepth(1, 1);
	var expected = 1;
	var actual = 1;
	var fail = false;

	while (--count > 0) {
		actual = random();
		if (actual !== expected) fail = true;
	}
	assert(!fail);
})
