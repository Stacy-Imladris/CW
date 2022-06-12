function sexyName(name) {
  const scores = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
                  'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
                  'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
                  'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}
  const sum = name.length ? [...name.toUpperCase()].map(m => m === ' ' ? 0: scores[m]).reduce((acc, r) => acc + r) : 0
  switch (true) {
      case (sum <= 60): return 'NOT TOO SEXY'
      case (sum <= 300): return 'PRETTY SEXY'
      case (sum <= 599): return 'VERY SEXY'
      default: return 'THE ULTIMATE SEXIEST'
  }
}