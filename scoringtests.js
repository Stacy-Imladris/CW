const scoreTest = (str, right, omit, wrong) => str
  .map(i => i === 0 ? 1 * right : i === 1 ? 1 * omit : -(1 * wrong))
  .reduce((sum, n) => sum + n, 0)