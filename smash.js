function smash (words) {
  "use strict";
  let str = "";
  for (let i = 0; i < words.length; i++){
    str += words[i] + " ";
  }
  return str.slice(0, -1);
};