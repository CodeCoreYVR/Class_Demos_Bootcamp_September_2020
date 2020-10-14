function pickBy(obj, pickerFn) {
	const newObj = {};
	for (let key in obj) {
		if (pickerFn(key, obj[key], obj)) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

const objA = { a: 1, b: 2, c: 3, d: 4, e: 5 };

pickBy(objA, key => key === 'a'); // returns { a: 1 }
pickBy(objA, key => ['a', 'c', 'e'].includes(key)); // returns { a: 1, c: 3, e: 5 }

const objB = { lana: 10, Liam: 4, lyn: 16, derek: 19, diana: 21 };

pickBy(objB, key => key[0].toLowerCase() === 'l'); // returns { lana: 10, Liam: 4, lyn: 16 }
