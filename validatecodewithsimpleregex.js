function validateCode (code) {
    let first = Number(code.toString().split("")[0])
    return first === 1 || first === 2 || first === 3;
  }