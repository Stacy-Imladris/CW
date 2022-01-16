const closeCompare = (a, b, margin) => {
    margin ? margin : margin = 0;
    return margin >= Math.abs(b - a) ? 0 : a < b ? -1 : 1
  }