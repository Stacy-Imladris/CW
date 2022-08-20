const solution = (str) => {
    let data = str.substring(str.indexOf('?') + 1).split('&').map(m => m.split('='))
    let obj = {}
    data.forEach(el => obj[el[0]] = el[1])
    return obj
 }