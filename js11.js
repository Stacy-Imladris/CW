function grabDoll(dolls){
  var bag=[];
  var bagvar=[];
  for (var i=0; i<dolls.length; i++){
    if (dolls[i]=="Hello Kitty" || dolls[i]=="Barbie doll"){
      bagvar.push(dolls[i]);
    }
    else continue;
    }
  for (var x=0; x<bagvar.length; x++){
    if (bag.length<3){
      bag.push(bagvar[x]);
    }
    else break;
  }
  return bag;
}