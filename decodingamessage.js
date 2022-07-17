function decode(message){
  return [...message].map(m => m === ' ' ? m : String.fromCharCode(97 + 122 - m.charCodeAt())).join('')
}