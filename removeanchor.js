function removeUrlAnchor(url){
  let i = url.indexOf("#", 0);
  if (i > 0){
    return url.slice(0, i);
  }
  else return url;
}