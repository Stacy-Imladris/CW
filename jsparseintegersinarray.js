let parseNumbers = function(intStrs) {
    return intStrs.map(m => m < 0 ? Math.ceil(+m) : Math.floor(+m));
  }