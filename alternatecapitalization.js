function capitalize(s) {
	return [s.split('').map((m, i) => i % 2 === 1 ? m.toLowerCase() : m.toUpperCase()).join(''),
			s.split('').map((m, i) => i % 2 === 1 ? m.toUpperCase() : m.toLowerCase()).join('')]
  }