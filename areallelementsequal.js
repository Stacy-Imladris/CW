Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  return [0, 1].includes([...new Set(Object.values(this))].length)
}})

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  return this.every((e, i, arr) => i === 0 || arr[i - 1] === e)
}})