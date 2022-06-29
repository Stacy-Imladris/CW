function remove (string) {
  const marksCount = [...string].filter(f => f === '!').length
  return string.replace(/!/g, '') + '!'.repeat(marksCount)
}