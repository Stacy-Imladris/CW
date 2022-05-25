function center (strng, width, fill = ' ') {
    let a = width - strng.length
    return width < strng.length ? strng : fill.repeat(Math.ceil(a / 2)) + strng + fill.repeat(Math.floor(a / 2))
  }