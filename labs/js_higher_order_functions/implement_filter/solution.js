let l = console.log;

function filter(arr, fn) {
	let retArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i, arr)) {
			retArr.push(arr[i]);
		}
	}
	return retArr;
}

// given three functions:
// even returns true if its argument, n, is an even number (false otherwise)
const even = function(n) {
	return n % 2 === 0;
};
// even returns true if its argument, n, is an odd number (false otherwise)
const odd = function(n) {
	return !even(n);
};

// creates a function that returns true if its argument is above min
const above = function(min) {
	return function(n) {
		return n > min;
	};
};

let arr = [1, 2, 3, 4, 5, 6];

l(filter(arr, even)); // returns 2,4,6
l(filter(arr, odd)); // returns 1,3,5
l(filter(arr, above(3))); // returns 4,5,6

const repeatedValue = function(value, index, arr) {
	return index !== arr.indexOf(value);
};

l(filter([1, 2, 3, 2, 3, 4, 5], repeatedValue)); // returns 2,3
