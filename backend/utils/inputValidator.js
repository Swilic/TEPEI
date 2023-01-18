// Fonction qui vérifie que la valeur entrée par l'utilisateur est valide
const verifyValue = function (value) {
	const invalidChar = ['<', '>', '[', ']', '|', '{', '}', '(', ')', '"'];
	if (value == '' || value.length > 13) {
		console.log('Invalid length');
		return false;
	}
// On split le mot par caractère
	const arrayValue = value.split('');
	arrayValue.forEach((char) => {
		if (invalidChar.includes(char)) {
			return false
		}
	});
	if (!isGood) {
		console.log('Invalid character');
		return false;
	}

	return true;
};
module.exports = verifyValue;
