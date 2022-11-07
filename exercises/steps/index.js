// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	for (let row = 0; row < n; row++) {
		let stair = '';
		// each loop is 1 row
		// inner loop will print each character for all columns before moving to next row

		for (let col = 0; col < n; col++) {
			// loops n times for each time the outer loop runs once
			// will move along the columns until we hit the length of n, then exits into outer loop for next row
			// FIRST LOOP
			// col and row are both zero
			// col is less than or equal to row so we add a step

			//
			if (col <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

module.exports = steps;
