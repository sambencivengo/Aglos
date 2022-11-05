// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
// 	// LONG AN SLOW
// 	return str.split('').reverse().join('') === str;
// }

// function palindrome(str) {
// 	let start = 0;
// 	let end = str.length - 1;

// 	while (start < end) {
// 		if (str[start] === str[end]) {
// 			start++;
// 			end--;
// 		} else {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// a, b, c, b, a
// 0, 1, 2, 3, 4

//  a(0)         a(4 - 0)
//  b(1)         b(4 - 1)
//  c(2)         c(4 - 2)
function palindrome(str) {
	return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
