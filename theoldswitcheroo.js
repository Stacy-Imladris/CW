const vowel2index = str => [...str].map((m, i) => 'aouei'.includes(m.toLowerCase()) ? i + 1 : m).join('')