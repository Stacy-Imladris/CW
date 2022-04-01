function domainName(url){
  let start = url.indexOf('//www.') >= 0 ? url.indexOf('//') + 6 
            : url.indexOf('//') >= 0 ? url.indexOf('//') + 2 
            : url.indexOf('w.') >= 0 ? url.indexOf('w.') + 2 : 0
  let end = url.indexOf('.', start)
  return url.slice(start, end)
}