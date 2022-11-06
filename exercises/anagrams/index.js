// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const map = new Map();

	if (stringA.length !== stringB.length) return false;

	for (let i = 0; i < stringA.length; i++) {
		if (!map.get(stringA[i])) {
			map.set(stringA[i], { val: 1 });
		}
	}
	for (let i = 0; i < stringB.length; i++) {
		if (!map.get(stringB[i])) {
			return false;
		}
	}
	return true;
}

module.exports = anagrams;
