// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
//   }

// function reverse(str) {
// let result = [];
// for (let i = str.length - 1; i >= 0; i--) {
//      result.push(str[i]);
// }
// return result.join('');
// }

function reverse(str) {
	const result = [];
	str.split('').forEach((el) => result.unshift(el));
	return result.join('');
}

module.exports = reverse;
