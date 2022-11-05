// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
// 	// figure out if the arg is negative
// 	if (Math.abs(n) === n) {
// 		return Number(`${n}`.split('').reverse().join(''));
// 	}
// 	return Number(`${Math.abs(n)}`.split('').reverse().join('')) * -1;
// }

function reverseInt(n) {
	const reversedInt = n.toString().split('').reverse().join('');

	return parseInt(reversedInt) * Math.sign(n);
}
module.exports = reverseInt;
