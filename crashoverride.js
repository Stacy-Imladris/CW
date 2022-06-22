function aliasGen(...args){
  return /[a-z]/gi.test(args[0][0]) && /[a-z]/gi.test(args[1][0])
    ? `${firstName[args[0][0].toUpperCase()]} ${surname[args[1][0].toUpperCase()]}`
    : 'Your name must start with a letter from A - Z.'
}