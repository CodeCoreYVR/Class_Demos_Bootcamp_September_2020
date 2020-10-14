const reduce = function(arr, fn, initial) {
	let acc = initial;
	for (let i = 0; i < arr.length; i++) {
		acc = fn(acc, arr[i], i, arr);
	}
	return acc;
};

const plus = function(a, b) {
	return a + b;
};

let arr = [1, 2, 3, 4, 5];

console.log(reduce(arr, plus, 0)); // returns 15
console.log(reduce(arr, (a, b) => a * b, 1)); // returns 120
