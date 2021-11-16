function padIt(str,n){
  let x = 1;
  let y = 1;
  let b;
  let c = n%2;
  if (n>1) {
    b = (n-n%2)/2;
   
  while (x<=b){
    str = "*" + str;
    x++;
  }
  while (y<=b){
    str = str + "*";
    y++;
  }
  }
  else {
    str = "*" + str;
    }
  if (c==1 && n>1){
    str = "*" + str;
  }
return str;  
}