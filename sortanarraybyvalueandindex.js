function sortByValueAndIndex(array){
    return array.map((m, i) => ({n: m, i: i + 1})).sort((a, b) => a.n * a.i - b.n * b.i).map(({ n }) => n)
  }