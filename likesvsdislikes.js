function likeOrDislike(buttons) {
	let value = 'Nothing'
	buttons.forEach(el => value === el ? value = 'Nothing' : value = el)
	return value
  }