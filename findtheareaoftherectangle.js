function area(d,l){
    if (d <= l) return "Not a rectangle"
    let side = Math.sqrt((d * d) - (l * l))
    return +(side * l).toFixed(2)
  }