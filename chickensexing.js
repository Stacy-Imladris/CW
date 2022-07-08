function correctness(bobsDecisions, expertDecisions) {
  return bobsDecisions.length ? bobsDecisions.map((m, i) => m === expertDecisions[i] ? 1 
                           : [m, expertDecisions[i]].includes('?') ? 0.5 : 0)
    .reduce((acc, r) => acc + r) : 0
}