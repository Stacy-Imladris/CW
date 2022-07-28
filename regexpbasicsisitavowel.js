String.prototype.vowel = function() {
  return this.length === 1 && /[aoueiAOUEI]/.test(this)
}