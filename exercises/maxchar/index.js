// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	const map = new Map();
// 	let max = 0;
// 	let maxChar;

// 	str.split('').forEach((char) => {
// 		const element = map.get(char);
// 		if (!element) {
// 			map.set(char, 1);
// 		} else {
// 			map.set(char, element + 1);
// 		}
// 	});

// 	for (const el of map) {
// 		if (el[1] > max) {
// 			max = el[1];
// 			maxChar = el[0];
// 		}
// 	}
// 	return maxChar;
// }

// ALTERNATE SYNTAX FOR VALUE
function maxChar(str) {
	const map = new Map();
	let max = 0;
	let maxChar;

	str.split('').forEach((char) => {
		if (!map.get(char)) {
			map.set(char, { value: 1 });
		} else {
			map.get(char).value++;
		}
	});

	for (const el of map) {
		if (el[1].value > max) {
			max = el[1].value;
			maxChar = el[0];
		}
	}
	return maxChar;
}

module.exports = maxChar;
