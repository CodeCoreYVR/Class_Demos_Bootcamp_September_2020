function partition(array, partitionerFn) {
	const trueValues = [];
	const falseValues = [];
	for (let i = 0; i < array.length; i++) {
		if (partitionerFn(array[i], i, array)) {
			trueValues.push(array[i]);
		} else {
			falseValues.push(array[i]);
		}
	}
	return [trueValues, falseValues];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

partition(arr, val => val > 4); // returns [ [ 5, 6, 7, 8 ], [ 1, 2, 3, 4 ] ]
partition(arr, val => val % 2 === 0); // returns [ [ 2, 4, 6, 8 ], [ 1, 3, 5, 7 ] ]
