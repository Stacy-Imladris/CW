function findChildren(santasList, children) {
  return [...new Set(children.filter(f => santasList.includes(f)))].sort((a, b) => a > b ? 1 : -1)
}