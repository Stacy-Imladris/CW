const nthChar = (words) => words.length === 0 ? '' : words.map((m, i) => m[i]).reduce((str, r) => str + r)