const pattern = n => n >= 1 
  ? Array(n).fill(0).map((m, i) => (i + 1).toString().repeat(i + 1)).join('\n') : ''