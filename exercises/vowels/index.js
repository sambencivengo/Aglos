// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str = '') {
	const map = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
	};

	str.toLowerCase()
		.split('')
		.forEach((char) => {
			if (map[char]) {
				map[char]++;
			} else {
				map[char] = 0;
			}
		});
	console.log(map);
	const val = Object.values(map).reduce((a, b) => a + b);
	return val - 5;
}

module.exports = vowels;
