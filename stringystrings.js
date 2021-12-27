function stringy(size) {
    let result = "10".repeat(Math.floor(size / 2));
    return size % 2 === 0 ? result : result + "1";
  }