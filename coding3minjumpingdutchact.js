function sc(floor){
    let last = floor > 6 ? '' : ' Aa!'
    return floor <= 1 ? '' : `${'Aa~ '.repeat(floor - 1)}Pa!${last}`
  }