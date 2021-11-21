function ensureQuestion(s) {
  if (s[s.length - 1] == "?"){
    return s;
  }
  else return s + "?";
}