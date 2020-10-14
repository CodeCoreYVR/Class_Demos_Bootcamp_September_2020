const fs = require('fs');

const args = process.argv.slice(2);
const [readFileName, pigLatinFileName, ...rest] = args;

fs.readFile(readFileName, (err, data) => {
	if (err) throw err;
	const text = data.toString();
	const paragraphArray = text.split('\n');
	const pigLatinText = paragraphArray
		.map(paragraph => {
			const textArray = paragraph.split(' ');
			const pigLatinTextArray = textArray.map(word => {
				return pigLatinify(word);
			});
			return pigLatinTextArray.join(' ');
		})
		.join('\n');
	console.log('Translating into 🐷...');
	fs.writeFile(pigLatinFileName, pigLatinText, err => {
		if (err) throw err;
		console.log(`"${readFileName}" translated into pig latin!`);
	});
});

function pigLatinify(word) {
	if (word.length === 0) return '';
	let newWord = '';
	for (let i = 0; i < word.length; i++) {
		if (['a', 'e', 'i', 'o', 'u'].includes(word[i])) {
			if (word[0].toLowerCase() !== word[0]) {
				newWord += word[i].toUpperCase() + word.slice(i + 1);
			} else {
				newWord += word.slice(i);
			}
			// This is testing to see if the last character of the word is punctuation
			const lastChar = word[word.length - 1];
			// This uses something called "Regular Expressions".
			// This current regular expression is testing the last character of the word
			//      /[a-zA-Z0-9]+/ is a regular expression which tests to see if the
			//  test string has at least one letter (case insensitive) or one number
			//  if it has any of those, then it will return true
			// Since I am checking to see if the last character is NOT a letter or a
			// number, i.e. it is punctuation, then the test will return false
			// So I check if !(regExTest) is true to see if the last letter is punctuation
			// For further reading look here:
			//      https://en.wikipedia.org/wiki/Regular_expression
			if (!/[a-zA-Z0-9]+/.test(lastChar)) {
				newWord = newWord.slice(0, newWord.length - 1);
				return newWord + word.slice(0, i).toLowerCase() + 'ay' + lastChar;
			} else {
				return newWord + word.slice(0, i).toLowerCase() + 'ay';
			}
		}
	}
	return word;
}
