const validatePIN = pin => [...pin].every(e => /[0-9]/.test(e)) && [4, 6].includes(pin.length)