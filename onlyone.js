function onlyOne(args) {
  return [...arguments].filter(Boolean).length === 1
}