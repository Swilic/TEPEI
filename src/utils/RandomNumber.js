const randRep = (index, length) => {
    let first = undefined;
    let second = undefined;
	do {
		first = Math.floor(Math.random() * length);
		second = Math.floor(Math.random() * length);
	} while (first === second || index === first || index === second);

	return [first, second];
};
const shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
module.exports = {randRep, shuffle};
