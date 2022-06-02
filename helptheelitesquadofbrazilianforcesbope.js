function magNumber(info){
    let data = {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}
    return Math.ceil(info[1] * 3 / data[info[0]])
  }