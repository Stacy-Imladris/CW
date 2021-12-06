function pillars(num_pill, dist, width) {
    if (num_pill === 2){
      return dist * 100; 
    }
    else if (num_pill > 2){
      return (num_pill - 2) * width + (num_pill - 1) * dist * 100;
    }
    else return 0;
  }