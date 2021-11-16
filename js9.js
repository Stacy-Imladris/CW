function padIt(str,n){
  let i = 1;
  let b;
  let c = n%2;
  if (n>1) {
    b = (n-n%2)/2;
    while (i<=b){
    str = "*" + str + "*";
    i++;
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