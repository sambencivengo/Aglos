// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	// 2 loops like the steps, rows & columns
	// amount of columns in each row is (n * 2) - 1
	for (let row = 0; row < n; row++) {
		let level = '';
		for (let col = 0; col <= n; col++) {
			const midPoint = Math.ceil(n / 2);
			console.log(midPoint, n);
			if (condition) {
			} else {
			}
		}
		console.log(string, n);
	}
}

module.exports = pyramid;
