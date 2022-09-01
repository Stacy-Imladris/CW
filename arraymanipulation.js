const arrayManip = array => array.map((m, i) => array.slice(i)
                                      .filter(f => f > m).sort((a, b) => a - b)[0] || -1)