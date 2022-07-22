function lenR(x) {
    return !x.length ? 0 : 1 + lenR(x.slice(1))
  }