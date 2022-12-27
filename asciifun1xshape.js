function x(n){
  let centralIndex = Math.floor(n / 2)
  let array1 = Array(centralIndex).fill('□'.repeat(n))
    .map((m, i) => [...m].map((el, ind) => ind === i || ind === m.length - 1 - i ? '■' : el)
         .join(''))
  let center = '□'.repeat(centralIndex) + '■' + '□'.repeat(centralIndex)
  return [...array1, center, ...[...array1].reverse()].join('\n')
}