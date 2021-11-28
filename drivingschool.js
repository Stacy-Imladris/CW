function cost (mins) { 
    if (mins <= 65){
      return 30;
    }
    else {
      let n = Math.ceil((mins - 60) / 30);
      let o = (mins - 60) % 30;
      if (mins - 60 <= 35){
        return 40;
      }
      else if (o <= 5 && o!= 0){
        return 10 * (n - 1) + 30;
      }
      else return 10 * n + 30;
  } 
  }  