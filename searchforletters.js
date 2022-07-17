function change(string){
  return Array(26).fill(0)
    .map((m, i) => string.toLowerCase().includes(String.fromCharCode(97 + i)) ? 1 : 0).join('')
}