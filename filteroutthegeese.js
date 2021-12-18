function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( b => (b !== geese[0] && b !== geese[1] && b !== geese[2] && b !== geese[3] && b !== geese[4]));
}