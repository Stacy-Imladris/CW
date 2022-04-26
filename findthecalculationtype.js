function calcType(a, b, res) {
  return a - b === res ? 'subtraction' : a + b === res ? 'addition' 
  : a / b === res ? 'division' : 'multiplication'
}