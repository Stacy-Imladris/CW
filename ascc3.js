var removeVowels = function(str){
  let a = str.split('a').join('');
  let e = a.split('e').join('');
  let i = e.split('i').join('');
  let o = i.split('o').join('');
  let u = o.split('u').join('');
  return u;
}