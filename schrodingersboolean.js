const omnibool = {
    key: 'a',
    valueOf() {
      return this.n =! this.n
    }
  }