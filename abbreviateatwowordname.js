function abbrevName(name){
  let n = name.split(' ')[0];
  let l = name.split(' ')[1];
  return n.slice(0, 1).toUpperCase() + "." + l.slice(0, 1).toUpperCase();
}