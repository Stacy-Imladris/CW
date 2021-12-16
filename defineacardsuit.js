function defineSuit(card) {
  let arr = card.split('');
  return (arr[arr.length-1] === "♣") ? 'clubs' : (arr[arr.length-1] === "♠") ? 'spades' : (arr[arr.length-1] === "♦") ? 'diamonds' : 'hearts';
}