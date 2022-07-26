function completeSeries(arr) {
    if (arr.length !== new Set(arr).size) return [0]
    let max = Math.max(...arr)
    return Array(max + 1).fill(0).map((m, i) => i)
  }