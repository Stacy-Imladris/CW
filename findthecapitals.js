let capitals = function (word) {
	return word.split('').map((m, i) => m.toUpperCase() === m ? i : m).filter(f => typeof f === 'number')
}