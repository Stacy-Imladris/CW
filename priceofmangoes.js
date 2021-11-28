function mango(quantity, price){
  if (quantity % 3 == 0){
    return quantity / 3 * price * 2;
  }
  else if (quantity % 3 == 1){
    return Math.floor(quantity / 3) * price * 2 + price;
  }
  else return Math.floor(quantity / 3) * price * 2 + price * 2;
}