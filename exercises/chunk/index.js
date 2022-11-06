// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array = [], size) {
	// result array to stuff into
	const result = [];
	// iterate over the array

	// start at first index, slice the given size
	// move to the index after the slice
	for (let i = 0; i <= array.length; i += size) {
		const start = i;
		const end = i + size;
		// size 2
		// END is always (START + SIZE)
		// START increments by SIZE to prevent repeats
		// V  V
		// 0, 1, 2, 3, 4,
		//       V  V
		// 0, 1, 2, 3, 4,
		const chunk = array.slice(start, end);
		chunk.length ? result.push(chunk) : null;
	}
	return result;
}

module.exports = chunk;
