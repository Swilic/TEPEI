const verifyValue = function (value) {
	const invalidChar = ['<', '>', '[', ']', '|', '{', '}', '(', ')', '"'];
	if (value == '' || value.length > 13) {
		console.log('Invalid length');
		return false;
	}

	const arrayValue = value.split('');
	let isGood = true;
	arrayValue.forEach((char) => {
		if (invalidChar.includes(char)) {
			isGood = false;
		}
	});
	if (!isGood) {
		console.log('Invalid character');
		return false;
	}

	console.log('Looks good!');
	return true;
};
module.exports = verifyValue;
