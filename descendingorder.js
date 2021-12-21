function descendingOrder(n){
  let result = n.toString().split('');
  function compareNumbers(a, b) {
      if (a < b) return 1;
      if (a === b) return 0;
      if (a > b) return -1;
    }
  return Number(result.sort(compareNumbers).join(''));
}