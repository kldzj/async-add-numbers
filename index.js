/**
 * @param {number} a  Base number
 * @param {number} b  Number that should be added to the base number
 * @returns {number}  a + b
 */
function asyncAddNumbers(a, b) {
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number') {
			reject(new TypeError("Either 'a' or 'b' is not a number"));
		} else {
			resolve(a + b);
		}
	});
}

module.exports = asyncAddNumbers;
