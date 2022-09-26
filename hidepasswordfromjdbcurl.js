function hidePasswordFromConnection(urlString){
  return urlString.split('password=').map((m, i) => {
    if (i === 0) return m
    let res = m.split('&')
    if (res.length > 1) return `${'*'.repeat(res[0].length)}&${res[1]}`
    return '*'.repeat(m.length)
  }).join('password=')
}