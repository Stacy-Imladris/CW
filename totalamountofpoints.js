function points(games) {
  let result = 0;
  for (let i = 0; i < games.length; i++){
    let arr = games[i].split(':');
    if (arr[0] > arr[1]){
      result += 3;
    }
    else if (arr[0] === arr[1]){
      result += 1;
    }
  }
  return result;
}